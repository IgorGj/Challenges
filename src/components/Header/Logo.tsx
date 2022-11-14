import LogoImg from "../../img/logo.png";

export const Logo = () => {
  return (
    <div className="w-25" style={{ cursor: "pointer" }}>
      <img src={LogoImg} className="w-100" alt="" />
    </div>
  );
};
