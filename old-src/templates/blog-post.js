import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Personal from "../components/personal";

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        lang="en-us"
        description={data.markdownRemark.frontmatter.description}
      />
      <div>
        <h1 style={{ color: `var(--textTitle)`, fontWeight: `900` }}>
          {post.frontmatter.title}
        </h1>
        <div
          style={{ color: `var(--textNormal)` }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Personal />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
      }
    }
  }
`;
