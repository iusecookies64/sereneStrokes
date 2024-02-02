import { useRef, useState } from "react";

export default function Input({
  label,
  type,
  placeholder,
  setInput,
  onBlur,
  error,
  name,
  value,
}) {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();
  return (
    <div className="w-full">
      <div className="mb-2">{label}</div>
      <div className="relative">
        <input
          ref={inputRef}
          className="p-2 outline-none w-full border-[1px] border-black"
          type={type}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
          onBlur={onBlur}
          name={name}
          value={value}
        />
        {type == "password" ? (
          <div
            className="h-full pr-2 absolute top-0 right-0 flex items-center cursor-pointer text-slate-400"
            onClick={() => {
              if (inputRef.current.type == "password") {
                inputRef.current.type = "text";
              } else {
                inputRef.current.type = "password";
              }
              setVisible(!visible);
            }}
          >
            {visible ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </div>
        ) : null}
      </div>
      {error ? <div className="text-sm text-red-500">{error}</div> : null}
    </div>
  );
}
