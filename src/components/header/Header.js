import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { menuList } from "../../assets/data/Data";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeMenuLink = ({ isActive }) => (isActive ? "active" : "menuLink");
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-screen  md:shadow-md shadow-sm bg-white">
      <div className="hidden md:flex justify-between px-7 p-2 items-center">
        <div className="logo flex items-center">
          <div>
            <img
              src="./images/music-logo.png"
              alt="logo"
              width="60px"
              height="60px"
            />
          </div>
          <h2 className="text-2xl font-semibold ml-3 h-8">Lorem</h2>
        </div>
        <div className="menu">
          <ul className="flex">
            {menuList.map((menu, i) => (
              <li
                className={`font-semibold mx-5 py-2 ${activeMenuLink}`}
                key={i}
              >
                <NavLink to={menu.path}>{menu.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile flex items-center">
          <AiOutlineSearch size={22} />
          <button className="bg-black px-6 py-1.5 text-white rounded-full mx-3">
            投稿
          </button>
          <div className="img w-10 h-10 rounded-full">
            <img
              src="./images/profile-img.jpg"
              alt="profile"
              className="img w-10 h-10 bg-red-300 rounded-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8">
        <div className="logo flex items-center">
          <div>
            <img
              src="./images/music-logo.png"
              alt="logo"
              width="60px"
              height="60px"
            />
          </div>
          <h2 className="text-2xl font-semibold ml-3">Lorem</h2>
        </div>

        <div>
          {isMenu && (
            <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full">
              <ul className="flex flex-col">
                {menuList.map((menu, i) => (
                  <li
                    className={`font-semibold mx-5 py-2 ${activeMenuLink}`}
                    key={i}
                  >
                    <NavLink to={menu.path}>{menu.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <AiOutlineMenu size={20} onClick={() => setIsMenu(!isMenu)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
