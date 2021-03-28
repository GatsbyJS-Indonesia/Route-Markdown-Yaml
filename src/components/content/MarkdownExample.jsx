import { Link } from "gatsby";
import React from "react";

export default function MarkdownExample({ data }) {
  const {
    blog: { nodes: blogs },
  } = data;
  return (
    <div>
      <h2>Contoh Routes dengan Markdown</h2>
      <p>
        Contoh di bawah adalah Blog yang ditulis dengan Markdown dengan format{" "}
        <em>YYYY-MM-DD-title.md</em>. Markdown nodes secara otomatis menambhakan{" "}
        <em>File</em> node sebagai parent yang dapat diakses dengan menggunakan
        seperti <em style={{ color: "yellow" }}>nama</em>, contohnya{" "}
        <em style={{ color: "yellow" }}>/blog/YYYY-MM-DD-title</em>.
      </p>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.parent.name}>
            <Link to={`/blog/${blog.parent.name}`}>
              {blog.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
