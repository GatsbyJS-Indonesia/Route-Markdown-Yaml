import { Link } from "gatsby";
import React from "react";

export default function YamlExample({ data }) {
  const { nodes: products } = data.products;
  return (
    <div>
      <h2>Contoh Routes dengan YAML</h2>
      <p>
        Daftar products yang dibuat dengan{" "}
        <em style={{ color: "orange" }}>YAML</em> dihubungkan dengan name & SKU.
        yang dibuat dengan beberapa
        {` `}
        <em>dinamis</em> routes. Ketika halaman yang dikunjungi tidak ada akan
        di fallback dengan halaman{` `}
        <em style={{ color: "yellow" }}>[name].js</em>. Contoh ini bisa
        digunakan untuk multiple-halaman dengan merujuk ke name and SKU.
        Contents halaman ada di{" "}
        <em style={{ color: "yellow" }}>products/product.yaml</em>
      </p>
      <p>
        In order to link to create the correct links in this overview{` `}
        <em>gatsbyPath</em> was used.
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.meta.sku}>
            <Link to={product.nameSlug}>{product.name}</Link>
            {` `}
            <Link to={product.skuSlug}>(SKU)</Link>
          </li>
        ))}
        <li>
          <Link to={`/products/module-plc`}>Module PLC</Link>
          {` `}
          (Halaman ini tidak ada)
        </li>
      </ul>
    </div>
  );
}
