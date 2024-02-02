import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signupAtom } from "../atoms";

export default function BasicDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useRecoilState(signupAtom);

  function validateInput(e) {
    const name = e.target.name;
    if (name == "firstName") {
      if (!firstName) {
        setFirstNameError("First Name is Required");
      } else {
        setFirstNameError("");
      }
    } else if (name == "lastName") {
      if (!lastName) {
        setLastNameError("Last Name is Required");
      } else {
        setLastNameError("");
      }
    } else if (name == "email") {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(email)) {
        setEmailError("Enter a valid email");
      } else {
        setEmailError("");
      }
    } else if (name == "password") {
      const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
      if (!regex.test(password)) {
        setPasswordError(
          "Password must be alteast 6 characters long and must contain atleast 1 capital letter and number"
        );
      } else {
        setPasswordError("");
      }
    }
  }

  useEffect(() => {
    setFirstName(signupInfo.firstName);
    setLastName(signupInfo.lastName);
    setEmail(signupInfo.email);
    setPassword(signupInfo.password);
  }, []);

  function clickHandler() {
    if (!firstName || !lastName || !email || !password) return;
    setSignupInfo((prevInfo) => {
      return {
        ...prevInfo,
        firstName,
        lastName,
        email,
        password,
      };
    });
    navigate("/signup/2");
  }

  return (
    <div className="w-full max-w-[400px] p-2 flex flex-col items-center justify-center gap-3">
      <Input
        type={"text"}
        placeholder={"John"}
        label={"First Name"}
        name={"firstName"}
        setInput={setFirstName}
        onBlur={validateInput}
        error={firstNameError}
        value={firstName}
      />
      <Input
        type={"text"}
        placeholder={"Doe"}
        label={"Last Name"}
        name={"lastName"}
        setInput={setLastName}
        onBlur={validateInput}
        error={lastNameError}
        value={lastName}
      />
      <Input
        type={"text"}
        placeholder={"johndoe@sample.com"}
        label={"Email"}
        name="email"
        setInput={setEmail}
        onBlur={validateInput}
        error={emailError}
        value={email}
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        label={"Password"}
        name="password"
        setInput={setPassword}
        onBlur={validateInput}
        error={passwordError}
        value={password}
      />
      <div className="w-full flex justify-between items-center">
        <div className="py-2 px-3 font-semibold border-[1px] border-black opacity-0">
          Prev
        </div>
        {firstNameError || lastNameError || emailError || passwordError ? (
          <div className="py-2 px-3 font-semibold border-[1px] border-slate-700 bg-slate-700 text-white">
            Next
          </div>
        ) : (
          <div
            className="py-2 px-3 font-semibold border-[1px] border-black bg-black text-white cursor-pointer"
            onClick={clickHandler}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
}
