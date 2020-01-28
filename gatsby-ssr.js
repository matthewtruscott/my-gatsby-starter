/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "./src/assets/css/mixins.scss"

import "./src/global.scss"

import Provider from "./provider"

export const wrapRootElement = Provider
