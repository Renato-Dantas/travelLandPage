import PlayButton from "./PlayButton";

const MainText = () => {
  return (
    <div className="main-text-wrapper">
      <h1 className="main-text-title">
        <span>Travel</span> top destination <span> of the world</span>
      </h1>
      <p className="main-text-paragraph">
        We always make our customer happy by providing as many choices as
        possible
      </p>
      <section className="main-text-btns">
        <a href="#" className="get-started-btn">
          Get Started
        </a>
        <a href="#" className="watch-demo-btn">
          <PlayButton /> Watch Demo
        </a>
      </section>
    </div>
  );
};

export default MainText;
