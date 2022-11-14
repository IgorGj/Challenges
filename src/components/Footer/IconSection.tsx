import { Icon } from "./Icon";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export const IconSection = () => {
  let icons: IconName[] = ["facebook", "instagram", "twitter", "linkedin"];

  return (
    <div className="container">
      <div className="row justify-content-between" >
        <>
          <h3 style={{ padding: "0" }}>Social Share</h3>
          {icons.map((el, index) => {
            return <Icon key={index} icon={["fab", el]} />;
          })}
        </>
      </div>
    </div>
  );
};
