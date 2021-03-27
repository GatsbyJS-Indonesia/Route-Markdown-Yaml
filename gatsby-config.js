module.exports = {
  siteMetadata: {
    title: `File System Route API`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({ node }) => {
          const name = node.sourceInstanceName;
          if (name === `products`) {
            return `Product`;
          }
          if (name === `parks`) {
            return `Park`;
          }
          return name;
        },
      },
    },
    /**
     * Agar bisa sourcing data dari sistem file (directory),
     * kita bisa menggunakan plugin 'gastby-surce-filesystem'
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        /**
         * "name" disini adalah alias agar kita bisa akses
         * ke file yang kita declare di "path" diatas
         * lalu kita bisa query melalui graphql
         */
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/products`,
        name: `products`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/parks`,
        name: `parks`,
      },
    },
  ],
};
