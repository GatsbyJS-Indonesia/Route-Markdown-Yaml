import { Link } from "gatsby";
import React from "react";

export default function NestedExample({ data }) {
  const {
    parks: { group },
  } = data;
  return (
    <div>
      <h2>Contoh Nested</h2>
      <p>
        Contoh Nested <em>/parks/theme-park/park-one/</em>.
      </p>
      <div>
        {group.map((field) => {
          const groupName = field.fieldValue;
          const inValidLinkPrefix =
            groupName === `Resort` ? `/parks/resort/` : `/parks/theme-park/`;
          return (
            <div>
              <h4>{groupName}</h4>
              <ul>
                <li>
                  <Link to={`${inValidLinkPrefix}hogwarts`}>
                    Non-existing {groupName}
                  </Link>
                </li>
                {field.nodes.map((park) => (
                  <li key={park.gatsbyPath}>
                    <Link to={park.gatsbyPath}>{park.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
