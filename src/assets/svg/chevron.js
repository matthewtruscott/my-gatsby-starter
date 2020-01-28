import React from "react"

const Chevron = ({ width }) => {
  return (
    <svg width={width} viewBox="0 0 36 20">
      <path d={`M2,2 l16,16 L34,2`} fill="none" strokeWidth="2"></path>
    </svg>
  )
}

export default Chevron
