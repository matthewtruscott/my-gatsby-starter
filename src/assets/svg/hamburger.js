import React, { useContext } from "react"

import { context } from "../../../provider"

import { useSpring, animated } from "react-spring"

// import styles from "./hamburger.module.scss"

const Hamburger = ({ width }) => {
  const ctx = useContext(context)

  const line1Spring = useSpring({
    transform: `
    rotate(${ctx.navOpen ? 45 : 0}deg)
    translateX(${ctx.navOpen ? 0 : 0}px)
    translateY(${ctx.navOpen ? 27 : 3}px)
    `,
    transformOrigin: "center",
  })
  const line2Spring = useSpring({
    transform: `
     scaleX(${ctx.navOpen ? 0 : 1})
    translateX(0px)
    translateY(28.25px)
    `,
    opacity: ctx.navOpen ? 0 : 1,
    transformOrigin: "left",
  })
  const line3Spring = useSpring({
    transform: `
    rotate(${ctx.navOpen ? -45 : 0}deg)
    translateX(${ctx.navOpen ? 0 : 0}px)
    translateY(${ctx.navOpen ? 27 : 54}px)
    `,
    transformOrigin: "center",
  })

  return (
    <svg
      width={width}
      viewBox="0 0 83 56.5"
      strokeWidth="6"
      data-state={ctx.navOpen ? "active" : "idle"}
      stroke="currentColor"
      style={{ overflow: "visible" }}
      className={"h-8 stroke-current cursor-pointer"}
      onClick={() => ctx.toggleNav()}
    >
      <g id="hamburger">
        <animated.line
          style={line1Spring}
          className="hamburger-line-1"
          x2="83"
        />
        <animated.line
          style={line2Spring}
          className="hamburger-line-2"
          x2="83"
        />
        <animated.line
          style={line3Spring}
          className="hamburger-line-3"
          x2="83"
        />
      </g>
    </svg>
  )
}

export default Hamburger
