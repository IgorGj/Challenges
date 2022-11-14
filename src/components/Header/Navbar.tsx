import { Actions } from "./Actions";
import { Links } from "./Links";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-2">
          <Logo />
        </div>
        <div className="col-9">
          <Links />
        </div>
        <div className="col-1 text-end">
          <Actions />
        </div>
      </div>
    </div>
  );
};
