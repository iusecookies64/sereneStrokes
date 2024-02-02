import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { variableAtom } from "../atoms";

export default function Slider({ min, max, setMin, setMax }) {
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);
  const container = useRef();
  const [leftPos, setLeftPos] = useState(12);
  const [rightPos, setRightPos] = useState(12);
  const { maxPrice } = useRecoilValue(variableAtom);
  function changePos(e) {
    if (activeLeft) {
      const rect = container.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x < 12) return;
      if (x + rightPos >= rect.width) return;
      setLeftPos(x);
      setMin(Math.floor(((x - 12) / rect.width) * maxPrice));
    }
    if (activeRight) {
      const rect = container.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const rx = rect.width - x;
      if (rx <= 12) return;
      if (rx + leftPos >= rect.width) return;
      setRightPos(rx);
      setMax(Math.ceil(((x + 12) / rect.width) * maxPrice));
    }
  }

  // setting drag inactive when mouseup
  useEffect(() => {
    function setInactive() {
      setActiveLeft(false);
      setActiveRight(false);
    }
    window.addEventListener("mouseup", setInactive);

    return () => window.removeEventListener("mouseup", setInactive);
  }, []);

  return (
    <div className="w-full flex items-center gap-1">
      <div>${min < 10 ? `0${min}` : min}</div>
      <div
        ref={container}
        className="w-full relative h-6 flex items-center overflow-hidden cursor-pointer"
        onMouseMove={changePos}
      >
        <div className="w-full h-1 bg-black"></div>
        <div
          className="w-full h-full absolute top-0 z-10 translate-x-[-100%] flex items-center"
          style={{ left: leftPos }}
        >
          <div className="w-full h-1 bg-slate-100"></div>
          <div
            className="h-3 w-3 rounded-[50%] border-[1px] border-black bg-white cursor-pointer"
            onMouseDown={() => setActiveLeft(true)}
          ></div>
        </div>
        <div
          className="w-full h-full absolute top-0 z-10 translate-x-full flex items-center"
          style={{ right: rightPos }}
        >
          <div
            className=" h-3 w-3 rounded-[50%] border-[1px] border-black bg-white cursor-pointer"
            onMouseDown={() => setActiveRight(true)}
          ></div>
          <div className="w-full h-1 bg-slate-100"></div>
        </div>
      </div>
      <div>${max < 10 ? `0${max}` : max}</div>
    </div>
  );
}
