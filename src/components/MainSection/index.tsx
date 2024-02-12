import { childrenProps } from "../../interfaces";

const MainSection = ({ children }: childrenProps) => {
  return <section className="main-section">{children}</section>;
};

export default MainSection;
