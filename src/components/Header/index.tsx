import { childrenProps } from "../../interfaces";
import Logo from "../Logo/index";
import Login from "../Login";

const Header = ({ children }: childrenProps) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <a href="/">
          <Logo />
        </a>
        {children}
        <Login />
      </div>
    </header>
  );
};

export default Header;
