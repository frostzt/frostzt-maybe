import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ThemeToggle from "./themeToggle";
import { Helmet } from "react-helmet";

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: `relative`,
    }}
  >
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
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
    <ThemeToggle />
  </header>
);

export default Header;
