import Details from "./Components/Details";
import Employments from "./Components/Employments";
import Educations from "./Components/Educations";
import Skills from "./Components/Skills";
import Templates from "./Templates"
import Links from "./Components/Links";
import Languages from "./Components/Languages";
import StickyHeader from "./Components/StickyHeader";
import Footer from "./Components/Footer";
import FooterPreview from "./Components/FooterPreview";
import PreviewMode from "./Components/previewMode"
import { connect } from "react-redux";
import ApplicationState from "./Types/ApplicationState";


function App({state}:{state:ApplicationState}) {
  const CurrentTemplate = Templates[state.currentTemplate as keyof  typeof Templates];
  const previewMode = state.previewMode
  return (
    <div className="App">
      {previewMode ? <PreviewMode /> : 
      <div className="edit-mode">
        <div className="edit-container">
          <div className="input">
            <StickyHeader />
            <Details />
            <Employments />
            <Educations />
            <Skills />
            <Links />
            <Languages />
            <FooterPreview />
            <Footer />
          </div>
        </div>
        <div className="output">
          <CurrentTemplate />
        </div> 
      </div>}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(App);


