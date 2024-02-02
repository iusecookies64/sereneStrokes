import { Outlet } from "react-router-dom";

export default function Signup() {
  return (
    <div className="h-dvh w-dvh flex justify-center items-center font-mono select-none">
      <div className="w-full max-w-[400px] p-2 flex flex-col items-center justify-center gap-3">
        <div className="text-xl font-bold">Sign Up</div>
        <Outlet />
      </div>
    </div>
  );
}
