import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// COMPONENTS
import Layout from "../components/layout";
import SEO from "../components/seo";

// STYLE
import "../styles/index.scss";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="world" />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link className="post__title" to={node.fields.slug}>
              <h3 className="heading-tertiary">{node.frontmatter.title}</h3>
              <h4
                className="heading-quaternary"
                style={{ color: `var(--textSecondary)` }}
              >
                {node.frontmatter.date}
              </h4>
            </Link>
            <p style={{ color: `var(--textNormal)` }}>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
