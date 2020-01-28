import { Link } from "gatsby"
import React, { useContext } from "react"
import PropTypes from "prop-types"

import Hamburger from "../assets/svg/hamburger"

import { context } from "../../provider"

const Header = () => {
  const ctx = useContext(context)

  return (
    <header className="fixed z-50 top-0 w-full flex items-center py-4 px-6 sm:px-8">
      <Link to="/" className="mr-10 ">
        site logo
      </Link>
      <div className="ml-auto ">
        <Hamburger style={{ color: "#4a4949" }} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
