import React, { useState } from "react"

export const context = React.createContext()

const Provider = ({ children }) => {
  const [navOpen, setNavToggled] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  const state = {
    // Nav
    navOpen,
    openNav: () => setNavToggled(true),
    closeNav: () => setNavToggled(false),
    toggleNav: () => setNavToggled(!navOpen),
    // project active item
    activeProject,
    changeActiveProjectTo: ({ index, title, description, tags }) => {
      setActiveProject({
        index,
        title,
        description,
        tags,
      })
    },
    // changeActiveProjectTo: index => setActiveProject(index),
  }

  return <context.Provider value={state}>{children}</context.Provider>
}

export default ({ element }) => <Provider>{element}</Provider>
