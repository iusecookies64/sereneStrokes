import React, { useRef, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { useSetRecoilState } from "recoil";
import { modalAtom } from "../atoms";

export default function Card({ data }) {
  const setModalUrl = useSetRecoilState(modalAtom);
  const { url, title, price } = data;
  const [loading, setLoading] = useState(true);
  const container = useRef();
  const overlay = useRef();
  return (
    <div className="flex relative flex-col m-5 justify-center items-center border-[1px] border-slate-50 z-0">
      <div className="w-64 hidden" ref={container}>
        <div
          className="h-[300px] w-100 flex justify-center items-center  hover:cursor-pointer border-[1px] border-slate-50 relative z-0"
          onMouseEnter={() => overlay.current.classList.remove("hidden")}
          onMouseLeave={() => overlay.current.classList.add("hidden")}
        >
          <div className="b-4 border-8 border-black p-2 bg-blue-100 flex justify-center items-center shrink">
            <img
              className="max-h-[240px] z-0"
              src={`${url}`}
              alt="img"
              onLoad={() => {
                setLoading(false);
                container.current.classList.remove("hidden");
              }}
            />
          </div>
          <div
            ref={overlay}
            className="absolute top-0 left-0 h-full w-full bg-slate-600/25 hidden flex flex-col justify-center items-center gap-3 z-0"
          >
            <div
              className="px-3 py-2 w-36 m-2 text-center border-[1px] bg-white border-black cursor-pointer"
              onClick={() => setModalUrl(url)}
            >
              Zoom
            </div>
            <div className="px-3 py-2 w-36 m-2 text-center text-white bg-black cursor-pointer">
              Add To Card
            </div>
          </div>
        </div>
        <div className="p-4 min-w-100 flex justify-between">
          <div>{title}</div>
          <div className="font-semibold">${price}</div>
        </div>
      </div>
      {!loading ? null : (
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#000000"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </div>
  );
}
