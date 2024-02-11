import { ReactNode } from "react";
import Logo from "../Logo/index";
import Login from "../Login";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Logo />
        {children}
        <Login />
      </div>
    </header>
  );
};

export default Header;
