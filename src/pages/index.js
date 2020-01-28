import React, { useState } from "react"

import { useTrail, animated, config } from "react-spring"

import SEO from "../components/seo"

import styles from "./index.module.scss"
import "./index.module.scss"

const IndexPage = () => {
  return (
    <div style={styles} className="animated-header">
      <SEO title="Home" />

      {/* hero-section */}
      <section className="container mt-16 py-8">
        <div></div>
      </section>
    </div>
  )
}

export default IndexPage
