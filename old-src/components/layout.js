import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            color: `var(--textNormal)`,
          }}
        >
          © {new Date().getFullYear()} frostzt,{" "}
          <a
            style={{ color: `var(--textTitle)` }}
            to="https://github.com/frostzt"
          >
            github
          </a>
          ,{" "}
          <a
            style={{ color: `var(--textTitle)` }}
            to="https://twitter.com/souravsrawat"
          >
            twitter
          </a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
