import { IconSection } from "./IconSection";
import { OneList } from "./OneList";

export const Footer = () => {
  let eventInfo = [
    "Enter Now",
    "Event Info",
    "Course Maps",
    "Race Pack",
    "Results",
    "FAQs",
    "Am I Registered?",
  ];
  let registration = [
    "Volunteers",
    "Gallery",
    "Press",
    "Results",
    "Privacy Policy",
    "Service Plus",
    "Contacts",
  ];
  let schedule = [
    "Galery",
    "About",
    "Videos",
    "Results",
    "FAQs",
    "Results",
    "Volunteers",
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <IconSection />
        </div>
        <div className="col-3">
          <OneList header="Event Info" links={eventInfo} />
        </div>
        <div className="col-3">
          <OneList header="Registration" links={registration} />
        </div>
        <div className="col-3">
          <OneList header="Schedule" links={schedule} />
        </div>
      </div>
    </div>
  );
};
