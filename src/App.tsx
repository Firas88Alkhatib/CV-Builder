import Details from "./Components/Details";
import Employments from "./Components/Employments";
import Educations from "./Components/Educations";
import Skills from "./Components/Skills";
import Template from "./Templates/Default";
import Links from "./Components/Links";
import Languages from "./Components/Languages";
import StickyHeader from "./Components/StickyHeader";
import Footer from "./Components/Footer";

function App(props: any) {
  const template = {
    defaultTemplate: Template,
  };
  const Temp = template["defaultTemplate"];
  return (
    <div className="main-container">
      <div className="App">
        <div className="input">
          <StickyHeader />
          <Details />
          <Employments />
          <Educations />
          <Skills />
          <Links />
          <Languages />
          <Footer />
        </div>
      </div>
      <div className="output">
        <Temp />
      </div>
    </div>
  );
}

export default App;
