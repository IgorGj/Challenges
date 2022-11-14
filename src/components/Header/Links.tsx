import "./Links.css";

export const Links = () => {
  const links = [
    "HOME",
    "BIKES",
    "GEAR",
    "PARTS",
    "TIRES",
    "SERVICE-INFO",
    "CATALOGUES",
    "CONTACT",
  ];

  return (
    <>
      <ul className="d-flex list-unstyled justify-content-center">
        {links.map((el, index) => {
          if (el === "HOME") {
            return (
              <li
                key={index}
                className="me-2 hoverEffect"
                style={{ fontWeight: "bolder", cursor: "pointer" }}
              >
                {el}
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className="me-2 hoverEffect"
                style={{ cursor: "pointer" }}
              >
                {el}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};
