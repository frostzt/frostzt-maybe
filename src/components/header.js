import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ThemeToggle from "./themeToggle"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <ThemeToggle />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--siteTitle)`,
            textDecoration: `none`,
          }}
        >
          frostzt maybe
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
