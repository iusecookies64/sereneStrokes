import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedInAtom, signupAtom } from "../atoms";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const navigate = useNavigate();
  const setLoggedIn = useSetRecoilState(loggedInAtom);
  const signupInfo = useRecoilValue(signupAtom);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="font-semibold">Personal Info</div>
        <div>First Name: {signupInfo.firstName}</div>
        <div>Last Name: {signupInfo.lastName}</div>
        <div>Email: {signupInfo.email}</div>
      </div>
      <div>
        <div className="font-semibold">Address Info</div>
        <div>House Number: {signupInfo.address.houseNumber} </div>
        <div>Lane: {signupInfo.address.lane} </div>
        <div>Landmark: {signupInfo.address.landMark} </div>
        <div>State: {signupInfo.address.state} </div>
        <div>Country: {signupInfo.address.country} </div>
        <div>Pin: {signupInfo.address.pin} </div>
      </div>
      <div>
        <div className="font-semibold">Payment Info</div>
        <div>Card Number: {signupInfo.payment.cardNumber}</div>
        <div>Valid To: {signupInfo.payment.validTo}</div>
        <div>CVV: {signupInfo.payment.cvv}</div>
      </div>
      <div className="flex gap-8">
        <div
          className="py-2 px-3 font-semibold border-[1px] border-black cursor-pointer"
          onClick={() => navigate("/signup/1")}
        >
          Edit
        </div>
        <div
          className="py-2 px-3 font-semibold border-[1px] border-black bg-black text-white cursor-pointer"
          onClick={() => {
            setLoggedIn(true);
            navigate("/");
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
}
