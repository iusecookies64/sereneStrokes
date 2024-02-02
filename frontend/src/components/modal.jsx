import React from "react";
import { useRecoilState } from "recoil";
import { modalAtom } from "../atoms";

export default function Modal() {
  const [url, setUrl] = useRecoilState(modalAtom);

  return (
    <>
      {url ? (
        <div className="absolute top-0 left-0 h-dvh w-dvw flex justify-center items-center py-6 px-4 z-50">
          <div
            className="absolute top-0 left-0 h-dvh w-dvw bg-black/25"
            onClick={() => setUrl("")}
          ></div>
          <div
            className="h-full flex justify-center items-center z-50"
            onClick={() => setUrl("")}
          >
            <div className="border-[20px] bg-blue-100 border-black p-4">
              <img className="max-h-[90dvh] max-w-full" src={url} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
