import { Link } from "react-router-dom";
import DarkModeSwitch from "../Buttons/DarkModeSwitch";
import Logo from "./../../assets/images/logo/logo_v1_black.png";

export default function Header() {
  return (
    <>
      <div className="flex justify-center">
        <Link to={"/"}>
          <img src={Logo} alt="Logo ready or know" className="max-w-72" />
        </Link>
      </div>
      <div className="absolute flex gap-4 items-center right-4 top-4">
        <DarkModeSwitch switched={false} />
        <span className="font-semibold">Contrast</span>
      </div>
    </>
  );
}
