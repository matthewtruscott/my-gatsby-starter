import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

import Header from "./header"
import Navigation from "./navigation"

import { context } from "../../provider"

const Layout = ({ location, children }) => {
  return (
    <div>
      <Header />
      <Navigation />

      <main>
        <TransitionProvider
          location={location}
          //   mode="immediate"
          enter={{
            opacity: 0,
            transform: "translate3d(0,0vh,0)",
            onRest: () => {
              console.log("onRest")
            },
          }}
          usual={{
            opacity: 1,
            transform: "translate3d(0vh,0vh,0)",
          }}
          leave={{
            opacity: 0,
            transform: "translate3d(0vh,0vh,0)",
          }}
        >
          <TransitionViews>{children}</TransitionViews>
        </TransitionProvider>
      </main>
    </div>
  )
}

export default Layout
