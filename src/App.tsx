import "./styles/scss/components/components.scss";
import Header from "./components/Header";
import MenuHeader from "./components/HeaderMenu";
import MainSection from "./components/MainSection";
import ButtonExplore from "./components/MainSection/components/ButtonExplore";
import MainText from "./components/MainSection/components/MainText";
import PhotoSection from "./components/MainSection/components/PhotoSection";

function App() {
  return (
    <>
      <Header>
        <MenuHeader />
      </Header>
      <MainSection>
        <section className="main-section-left">
          <ButtonExplore />
          <MainText />
        </section>
        <section className="main-section-right">
          <PhotoSection />
        </section>
      </MainSection>
    </>
  );
}

export default App;

