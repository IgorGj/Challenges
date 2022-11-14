import { Filter } from "./Filter";
import { CardPropsType } from "../Card/Card";
import { FilterType } from "../Card/CardList";

export type FiltersListAndFilterPropsType = {
  posts: CardPropsType[];
  isActive: FilterType;
  filter?: string;
  clickHandlerForFilter: React.MouseEventHandler;
};

export const FiltersList = (props: FiltersListAndFilterPropsType) => {
  let everyFilter = [
    "Show All",
    "Male",
    "Female",
    "LE GRAND BIKES",
    "KROSS",
    "EXPLORER",
    "VISITOR",
    "PONY",
    "FORCE",
    "E-BIKES",
    "IDEAL",
  ];
  return (
    <div className="col-3">
      <h5>Filter By:</h5>

      <>
        {everyFilter.map((element, index) => {
          return (
            <div key={index}>
              {element.toUpperCase() === "MALE" ? (
                <h5
                  style={{ borderTop: "1px solid #dedede", padding: "5px 0 " }}
                >
                  Gender
                </h5>
              ) : element.toUpperCase() === "LE GRAND BIKES" ? (
                <h5
                  style={{ borderTop: "1px solid #dedede", padding: "5px 0 " }}
                >
                  Brand
                </h5>
              ) : (
                ""
              )}
              <Filter
                key={+new Date() + index}
                clickHandlerForFilter={props.clickHandlerForFilter}
                filter={element}
                posts={props.posts}
                isActive={props.isActive}
              />
            </div>
          );
        })}
      </>
    </div>
  );
};
