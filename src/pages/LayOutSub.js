import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";

const LayOutSub = ({ children }) => {
  const [sideBarWidth, setSideBarWidth] = useState(null);
  const [sideBarTop, setSideBarTop] = useState(null);

  useEffect(() => {
    const sideBarEl = document
      .querySelector(".sidebar")
      .getBoundingClientRect();
    setSideBarWidth(sideBarEl.width);
    setSideBarTop(sideBarEl.top);
  }, []);

  useEffect(() => {
    //not演算子がfalseにできるのがnull
    if (!sideBarTop) return;

    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sideBarTop]);

  console.log("boolean:", !sideBarTop);

  const isSticky = (e) => {
    const sideBarEl = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;

    if (scrollTop >= sideBarTop - 10) {
      sideBarEl.classList.add("is-sticky");
    } else {
      sideBarEl.classList.remove("is-sticky");
    }
  };

  return (
    <>
      <main className="md:flex md:justify-between px-5 mt-8 h-[100vh]">
        <div className="content w-full md:w-[73%]">{children}</div>
        <div
          className="md:w-[25%] border-2 border-solid border-gray-100 rounded-xl p-5"
          style={{ width: sideBarWidth }}
        >
          <SideBar />
        </div>
      </main>
    </>
  );
};

export default LayOutSub;
