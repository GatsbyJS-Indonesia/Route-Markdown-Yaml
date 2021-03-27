import * as React from "react";
import { graphql, Link } from "gatsby";
import YamlExample from "../components/content/YamlExample";
import MarkdownExample from "../components/content/MarkdownExample";
import NestedExample from "../components/content/NestedExample";

function Index({ data }) {
  return (
    <div className="wrapper">
      <main>
        <h1>Route API, Markdown, dan Yaml</h1>
        <h3>
          <span role="img" aria-label="tips">
            💡
          </span>{" "}
          <em style={{ color: "orangered" }}>TIPS</em>: Restart server kalau
          tidak ada perubahan saat edit Markdown / YAML
        </h3>
        <p>
          Silahkan lihat{` `}
          <a href="https://www.gatsbyjs.com/docs/file-system-route-api">
            dokumentasi
          </a>
          {` `}untuk Gatbsy Route API yang terbaru, di bawah ini contoh-contoh
          menggunakan Route API dengan Markdown dan YAML.
        </p>
        <YamlExample data={data} />
        <MarkdownExample data={data} />
        <NestedExample data={data} />
        <h2>Client-Only routes</h2>
        <p>
          Koleksi routes menggunakan{` `}
          <em style={{ color: "yellow" }}>[name].js</em> file didalam{" "}
          <em style={{ color: "yellow" }}>src/pages/products</em>
        </p>
        <ul>
          <li>
            <Link to="/products/gatotkaca/offer/BERUNTUNG123">
              /products/[brand]/penawaran/[coupon]
            </Link>
          </li>
          <li>
            <Link to="/image/www.gatsbyjs.com/Gatsby-Logo.svg">
              /image/[...imageUrl]
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Index;

export const query = graphql`
  {
    products: allProduct {
      nodes {
        name
        nameSlug: gatsbyPath(filePath: "/products/{Product.name}")
        skuSlug: gatsbyPath(filePath: "/products/{Product.meta__sku}")
        meta {
          sku
        }
      }
    }
    blog: allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
    parks: allPark {
      group(field: meta___location___type) {
        fieldValue
        nodes {
          name
          gatsbyPath(filePath: "/parks/{park.meta__location__type}/{park.name}")
        }
      }
    }
  }
`;
