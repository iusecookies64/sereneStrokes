import { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { loggedInAtom, productAtom } from "../atoms";
import { useNavigate, useSearchParams } from "react-router-dom";

function useDebounce(inputValue, duration) {
  const [DebouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, duration);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return DebouncedValue;
}

export default function NavBar() {
  const isLoggedIn = useRecoilValue(loggedInAtom);
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const DebouncedValue = useDebounce(inputValue, 200);
  const originalData = useRecoilValue(productAtom);
  const [matchingList, setMatchingList] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    if (!DebouncedValue) {
      setMatchingList([]);
      return;
    }
    if (!originalData) return;
    const list = [];
    originalData.forEach((data) => {
      if (data.title.toLowerCase().includes(DebouncedValue.toLowerCase())) {
        list.push(data);
      }
    });
    setMatchingList(list);
  }, [originalData, DebouncedValue]);
  return (
    <div className="flex relative justify-between px-2 md:px-5 py-2 border-b-[1px] bg-slate-50 items-center z-50">
      <div className="text-xl md:text-2xl font-bold">Serene Strokes</div>
      <div className="w-[50%] h-12 hidden md:flex border-2 border-black relative">
        <div className="h-full w-full relative">
          <input
            ref={inputRef}
            className="h-full w-full outline-none pl-3 "
            type="text"
            placeholder="Search For Products..."
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key != "Enter") return;
              setSearchParams({ search: e.target.value });
              setInputValue("");
            }}
          />
          <div className="w-full absolute top-[100%] translate-y-1 bg-white border-[1px] max-h-64 overflow-y-auto">
            {matchingList.map((data) => (
              <div
                key={Math.floor(Math.random() * 100000)}
                className="p-3 relative border-b-[1px] hover:bg-slate-100 cursor-pointer z-50"
                onClick={() => {
                  setSearchParams({ search: data.title });
                  setInputValue("");
                  inputRef.current.value = "";
                }}
              >
                {data.title}
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-full w-12 bg-black flex justify-center items-center cursor-pointer text-white text-lg"
          onClick={() => {
            setSearchParams({ search: inputRef.current.value });
            setInputValue("");
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      {!isLoggedIn ? (
        <button
          className="px-3 py-2 text-white bg-black cursor-pointer scale-90 md:scale-1"
          onClick={() => navigate("/signup/1")}
        >
          Sign Up
        </button>
      ) : (
        <i className="fa-solid fa-cart-shopping text-3xl cursor-pointer"></i>
      )}
    </div>
  );
}
