import React, { useContext, useState, useEffect, useRef } from "react"

import { context } from "../../../provider"

import { useSpring, animated } from "react-spring"

const Chevron = ({ width }) => {
  const ctx = useContext(context)
  const [X, setX] = useState(0)
  const path = useRef(null)

  const rotate = useSpring({
    // config,
    // p3x: ctx.navOpen ? 34 : 18,
    p3x: ctx.navOpen ? 0 : 34,
    transform: `translateX(${ctx.navOpen ? 0 : 100}%)`,
  })

  useEffect(() => {
    setInterval(() => {
      path.current.setAttribute("d", `M2,2 l16,16 L${rotate.p3x.value},2`)
    }, 16)
  })

  console.log(rotate.p3x)

  return (
    <svg width={width} viewBox="0 0 36 20">
      <path ref={path} fill="none" strokeWidth="2"></path>
    </svg>
  )
}

export default Chevron
