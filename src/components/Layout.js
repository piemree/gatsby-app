import { Link } from "gatsby"
import React, { useRef, useState } from "react"
import "./Layout.css"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const mobileNavRef = useRef()

  document.addEventListener("click", e => {
    if (!e.composedPath().includes(mobileNavRef.current)) setToggle(false)
  })

  function handleClick(event) {
    event.stopPropagation()
    setToggle(true)
  }

  return (
    <div>
      <nav className="p-3 flex justify-between shadow">
        <h3 className="font-semibold text-xl ">U</h3>
        <ul className="hidden md:flex">
          <li className="m-2">Home</li>
          <li className="m-2">Store</li>
          <li className="m-2">About</li>
        </ul>
        <button className="md:hidden" onClick={handleClick}>
          <GiHamburgerMenu/>
        </button>
        <div
          ref={mobileNavRef}
          className={` z-10 bg-blue-100 absolute top-0 transition duration-200 ease-in-out  right-0 w-3/4 h-full ${
            toggle ? "" : "translate-x-full"
          } `}
        >
          <ul className="py-5 px-3">
            <li className=" p-2 my-2 text-white font-semibold rounded cursor-pointer hover:bg-sky-500  bg-blue-400"><Link>Home</Link></li>
            <li className=" p-2 my-2 text-white font-semibold rounded cursor-pointer hover:bg-sky-500  bg-blue-400"><Link>Store</Link></li>
            <li className=" p-2 my-2 text-white font-semibold rounded cursor-pointer hover:bg-sky-500  bg-blue-400"><Link>About</Link></li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Layout
