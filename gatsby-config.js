module.exports = {
  siteMetadata: {
    title: "United States Tamiya Ryu Iaijutsu"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    // source - where to get stuff from
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/articles`,
        name: "articles"
      }
    },
    // transforms markdown => html
    "gatsby-transformer-remark"
  ]
};
