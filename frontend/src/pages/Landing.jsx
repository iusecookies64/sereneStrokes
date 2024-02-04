import { useEffect, useState, useRef } from "react";
import NavBar from "../components/navbar";
import Card from "../components/card";
import Filter from "../components/filter";
import { useRecoilState, useSetRecoilState } from "recoil";
import { productAtom, variableAtom } from "../atoms";
import { useSearchParams } from "react-router-dom";
import Modal from "../components/modal";

export default function Landing() {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const [data, setData] = useRecoilState(productAtom);
  const [filteredList, setFilteredList] = useState(null);
  const setVariables = useSetRecoilState(variableAtom);
  const filterContainer = useRef();
  // fetching data and then setting fetched data
  useEffect(() => {
    // fetch("https://shop.iusecookies64.xyz/api/products/bulk")
    fetch("https://shop.iusecookies64.xyz/api/products/bulk")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredList(data);
        // finding all categories, minPrice, maxPrice
        const st = new Set();
        let minPrice = 100,
          maxPrice = 0;
        data.forEach((product) => {
          st.add(product.category);
          minPrice = Math.min(minPrice, parseFloat(product.price));
          maxPrice = Math.max(maxPrice, parseFloat(product.price));
        });
        minPrice = Math.floor(minPrice);
        maxPrice = Math.floor(maxPrice);
        const categories = [];
        st.forEach((category) => categories.push(category));
        setVariables({ categories, minPrice, maxPrice });
      });
  }, []);

  let renderedCards = 0;
  return (
    <div className="h-dvh w-dvw bg-white overflow-y-auto font-mono select-none">
      <NavBar />
      <div className="flex md:flex-row flex-col relative">
        <div className="hidden w-1/5 min-w-64 md:block">
          <Filter setFilteredList={setFilteredList} />
        </div>
        {/* responsive filter list start */}
        <div className="md:hidden z-50">
          <div
            className="px-3 py-2 max-w-24 m-2 text-white bg-black cursor-pointer"
            onClick={() =>
              filterContainer.current.classList.remove("translate-x-[-100%]")
            }
          >
            Filters
          </div>
          <div
            ref={filterContainer}
            className="w-full h-dvh absolute top-0 left-0 transition-all duration-300 translate-x-[-100%] bg-white"
          >
            <div className="max-w-64">
              <Filter setFilteredList={setFilteredList} />
            </div>
            <div
              className="absolute top-0 right-0 m-4 h-6 w-6 flex justify-center items-center font-bold rounded-[50%] bg-black text-white cursor-pointer"
              onClick={() =>
                filterContainer.current.classList.add("translate-x-[-100%]")
              }
            >
              X
            </div>
          </div>
        </div>
        {/* responsive filter end */}
        {/* cards container start */}
        <div className="flex p-4 relative w-full justify center items-center z-0">
          {filteredList && (
            <div className="flex relative justify-center md:justify-start flex-wrap z-0">
              {filteredList.map((product) => {
                if (
                  product.title
                    .toLowerCase()
                    .includes(searchParams.get("search").toLowerCase())
                ) {
                  renderedCards++;
                  return <Card key={product.id} data={product} />;
                } else {
                  return null;
                }
              })}
            </div>
          )}
          {renderedCards ? null : "No Matched Items"}
        </div>
        {/* cards container end */}
      </div>
      <Modal />
    </div>
  );
}
