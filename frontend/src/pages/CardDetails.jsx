import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useRecoilState } from "recoil";
import { signupAtom } from "../atoms";
import { useNavigate } from "react-router-dom";

export default function CardDetails() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [validTo, setValidTo] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [validToError, setValidToError] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [signupInfo, setSignupInfo] = useRecoilState(signupAtom);
  function validateInput(e) {
    const name = e.target.name;
    if (name == "cardNumber") {
      const regex = /^\d{16}$/;
      if (!regex.test(cardNumber)) {
        setCardNumberError("Enter a Valid Card Number");
      } else {
        setCardNumberError("");
      }
    } else if (name == "validTo") {
      const regex = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/;
      if (!regex.test(validTo)) {
        setValidToError("Invalid Expiry Date");
      } else {
        setValidToError("");
      }
    } else {
      const regex = /^\d{3,4}$/;
      if (!regex.test(cvv)) {
        setCvvError("Enter a Valid CVV");
      } else {
        setCvvError("");
      }
    }
  }
  function clickHandler(page, prev) {
    setSignupInfo((prevInfo) => {
      return {
        ...prevInfo,
        payment: {
          cardNumber,
          validTo,
          cvv,
        },
      };
    });
    if (prev) {
      navigate(`/signup/${page}`);
      return;
    }
    if (!cardNumber || !validTo || !cvv) return;
    navigate("/signup/review");
  }

  useEffect(() => {
    setCardNumber(signupInfo.payment.cardNumber);
    setValidTo(signupInfo.payment.validTo);
    setCvv(signupInfo.payment.cvv);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold">Payment Details</div>
      <Input
        type={"text"}
        placeholder={"XXXX XXXX XXXX XXXX"}
        label={"Card Number"}
        name={"cardNumber"}
        setInput={setCardNumber}
        onBlur={validateInput}
        error={cardNumberError}
        value={cardNumber}
      />
      <div className="flex gap-2">
        <Input
          type={"text"}
          placeholder={"MM/YYYY"}
          label={"Valid To"}
          name={"validTo"}
          setInput={setValidTo}
          onBlur={validateInput}
          error={validToError}
          value={validTo}
        />
        <Input
          type={"text"}
          placeholder={"XXX"}
          label={"CVV"}
          name={"cvv"}
          setInput={setCvv}
          onBlur={validateInput}
          error={cvvError}
          value={cvv}
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <div
          className="py-2 px-3 font-semibold border-[1px] border-black cursor-pointer"
          onClick={() => clickHandler(2, true)}
        >
          Prev
        </div>
        {cardNumberError || validToError || cvvError ? (
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
