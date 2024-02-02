import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useRecoilState } from "recoil";
import { signupAtom } from "../atoms";

export default function Address() {
  const navigate = useNavigate();
  const [houseNumber, setHouseNumber] = useState("");
  const [lane, setLane] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");
  const [houseNumberError, setHouseNumberError] = useState("");
  const [laneError] = useState("");
  const [landmarkError] = useState("");
  const [stateError, setStateError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [pinError, setPinError] = useState("");
  const [signupInfo, setSignupInfo] = useRecoilState(signupAtom);
  function validateInput(e) {
    const name = e.target.name;
    if (name == "pin") {
      if (e.target.value.length != 5) {
        setPinError("Enter A Valid Pin");
      } else {
        setPinError("");
      }
    } else if (e.target.value.length <= 3) {
      if (name == "houseNumber")
        setHouseNumberError("Enter Valid House Number");
      else if (name == "state") setStateError("Enter a Valid State");
      else if (name == "country") setCountryError("Enter a Valid country");
    } else {
      if (name == "houseNumber") setHouseNumberError("");
      else if (name == "state") setStateError("");
      else if (name == "country") setCountryError("");
    }
  }
  function clickHandler(page, prev = false) {
    setSignupInfo((prevInfo) => {
      return {
        ...prevInfo,
        address: {
          houseNumber,
          lane,
          landmark,
          state,
          country,
          pin,
        },
      };
    });
    if (prev) {
      navigate(`/signup/${page}`);
    } else if (!houseNumber || !state || !country || !pin) return;
    navigate(`/signup/${page}`);
  }

  useEffect(() => {
    setHouseNumber(signupInfo.address.houseNumber);
    setLane(signupInfo.address.lane);
    setLandmark(signupInfo.address.landmark);
    setState(signupInfo.address.state);
    setCountry(signupInfo.address.country);
    setPin(signupInfo.address.pin);
  }, []);

  return (
    <div className="w-full max-w-[400px] p-2 flex flex-col items-center justify-center gap-3">
      <div className="w-full font-bold">Address</div>
      <Input
        type={"text"}
        placeholder={"Block-7, Flat No-77"}
        label={"House Number"}
        name={"houseNumber"}
        setInput={setHouseNumber}
        onBlur={validateInput}
        error={houseNumberError}
        value={houseNumber}
      />
      <Input
        type={"text"}
        placeholder={"Lane 7"}
        label={"Lane No."}
        name={"lane"}
        setInput={setLane}
        onBlur={validateInput}
        error={laneError}
        value={lane}
      />
      <Input
        type={"text"}
        placeholder={"Near Bank 77"}
        label={"Landmark"}
        name="landmark"
        setInput={setLandmark}
        onBlur={validateInput}
        error={landmarkError}
        value={landmark}
      />
      <Input
        type={"text"}
        placeholder={"State7"}
        label={"State"}
        name="state"
        setInput={setState}
        onBlur={validateInput}
        error={stateError}
        value={state}
      />
      <Input
        type={"text"}
        placeholder={"Country .7"}
        label={"Country"}
        name="country"
        setInput={setCountry}
        onBlur={validateInput}
        error={countryError}
        value={country}
      />
      <Input
        type={"text"}
        placeholder={"77777"}
        label={"Pin"}
        name="pin"
        setInput={setPin}
        onBlur={validateInput}
        error={pinError}
        value={pin}
      />
      <div className="w-full flex justify-between items-center">
        <div
          className="py-2 px-3 font-semibold border-[1px] border-black cursor-pointer"
          onClick={() => clickHandler(1, true)}
        >
          Prev
        </div>
        {houseNumberError ||
        laneError ||
        landmarkError ||
        stateError ||
        countryError ||
        pinError ? (
          <div className="py-2 px-3 font-semibold border-[1px] border-slate-700 bg-slate-700 text-white">
            Next
          </div>
        ) : (
          <div
            className="py-2 px-3 font-semibold border-[1px] border-black bg-black text-white cursor-pointer"
            onClick={() => clickHandler(3)}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
}
