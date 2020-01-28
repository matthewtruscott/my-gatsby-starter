import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import styles from "./navigation.module.scss"
import { useSpring, animated } from "react-spring"
import { context } from "../../provider"

const Navigation = () => {
  const ctx = useContext(context)

  const delayedCloseNav = () => {
    setTimeout(() => {
      ctx.closeNav()
    }, 0)
  }

  const config = {
    //    mass: 5, tension: 2000, friction: 200
  }
  useEffect(() => {
    // const activeLink = document.querySelector(
    //   `a[href="/${window.location.href.split("/").reverse()[1]}/"]`
    // )
    // console.log(activeALink)
    // active.
  })

  const fade = useSpring({
    config,
    transform: `translateX(${ctx.navOpen ? 0 : 100}%)`,
  })
  return (
    <animated.nav
      style={fade}
      className={styles.navigation + ` fixed top-0 right-0`}
    >
      <ul>
        <Link
          to="/about/"
          onClick={() => delayedCloseNav()}
          activeClassName="active"
        >
          <li className="">
            <span>about</span>
          </li>
        </Link>
        <Link
          to="/test/"
          onClick={() => delayedCloseNav()}
          activeClassName="active"
        >
          <li className="">
            <span>test</span>
          </li>
        </Link>
      </ul>
    </animated.nav>
  )
}

export default Navigation
