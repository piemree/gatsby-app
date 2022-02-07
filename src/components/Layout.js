import { Link } from "gatsby"
import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./Layout.css"
const Layout = ({ children }) => {
  return (
    <div>
      <nav className="p-3 flex justify-between">
        <h3 className="text-red-500">Logo</h3>
        <ul className="hidden">
          <li className="m-2">Home</li>
          <li className="m-2">Store</li>
          <li className="m-2">About</li>
        </ul>
        <Menu right with={280}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      
        </Menu>
      </nav>
      {children}
    </div>
  )
}

export default Layout
