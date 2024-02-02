import { useEffect, useMemo, useState } from "react";
import Slider from "./slider";
import { useRecoilValue } from "recoil";
import { productAtom, variableAtom } from "../atoms";
import { useParams } from "react-router-dom";

export default function Filter({ setFilteredList }) {
  const [selectedCategories, setCategories] = useState([]);
  const originalData = useRecoilValue(productAtom);
  const { categories, minPrice, maxPrice } = useRecoilValue(variableAtom);
  const [filterMin, setMin] = useState(minPrice);
  const [filterMax, setMax] = useState(maxPrice);
  const [sort, setSort] = useState(0);
  const params = useParams();

  useEffect(() => {
    setMin(minPrice);
    setMax(maxPrice);
  }, [minPrice, maxPrice]);

  function applyFilters() {
    const filteredList = [];
    originalData.forEach((data) => {
      // checking if category match
      const price = parseFloat(data.price);
      if (selectedCategories.length > 0) {
        selectedCategories.forEach((category) => {
          if (
            category == data.category &&
            price >= filterMin &&
            price <= filterMax
          ) {
            filteredList.push(data);
          }
        });
      } else if (price <= filterMax && price >= filterMin) {
        filteredList.push(data);
      }
    });
    if (sort != 0) {
      filteredList.sort((a, b) => {
        if (sort == -1) {
          return parseFloat(a.price) >= parseFloat(b.price);
        } else {
          return parseFloat(a.price) <= parseFloat(b.price);
        }
      });
    }
    setFilteredList(filteredList);
  }
  function reset() {
    setCategories([]);
    setMin(minPrice);
    setMax(maxPrice);
    setSort(0);
    setFilteredList(originalData);
  }
  function toggleCategory(category) {
    // searching for category
    const indx = selectedCategories.findIndex((cat) => cat == category);
    if (indx == -1) {
      // adding category
      setCategories([...selectedCategories, category]);
    } else {
      // removing category
      selectedCategories.splice(indx, 1);
      setCategories([...selectedCategories]);
    }
  }

  return (
    <div className="w-full box-border flex flex-col items-start gap-4 p-4">
      <div className="font-bold md:hidden">Filters</div>
      {/* categories filter start */}
      <div>
        <div className="font-bold">Categories</div>
        {categories.map((category, indx) => (
          <div key={indx} className="flex items-center gap-4">
            <div
              className="check-box h-[14px] w-[14px] border-[1px] border-black cursor-pointer"
              onClick={(e) => {
                e.target.classList.toggle("bg-black");
                toggleCategory(category);
              }}
            ></div>
            {category.toUpperCase()}
          </div>
        ))}
      </div>
      {/* categories filter end */}
      <div className="w-full">
        <div className="font-bold">Price</div>
        <div className="w-full flex items-center gap-1">
          <Slider
            min={filterMin}
            setMin={setMin}
            max={filterMax}
            setMax={setMax}
          />
        </div>
      </div>
      <div>
        <div className="font-bold">Sort By</div>
        <div
          className={`text-sm p-2 border-[1px] border-black cursor-pointer my-2 ${
            sort == -1 ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            if (sort == -1) setSort(0);
            else setSort(-1);
          }}
        >
          Price Low To High
        </div>
        <div
          className={`text-sm p-2 border-[1px] border-black cursor-pointer my-2 ${
            sort == 1 ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            if (sort == 1) setSort(0);
            else setSort(1);
          }}
        >
          Price High To Low
        </div>
      </div>
      <div className="flex w-full justify-start gap-4 items-center">
        <div
          className="h-10 w-16 text-md border-[1px] border-black cursor-pointer flex justify-center items-center"
          onClick={reset}
        >
          Reset
        </div>
        <div
          className="h-10 w-16 text-md border-[1px] border-black cursor-pointer flex justify-center items-center text-white bg-black"
          onClick={applyFilters}
        >
          Apply
        </div>
      </div>
    </div>
  );
}
