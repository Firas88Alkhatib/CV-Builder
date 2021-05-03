import { connect } from "react-redux";
import ApplicationState from "../Types/ApplicationState";
import AddLink from "./AddLink";
import actions from "../Redux/Actions";
import Education from "./Education";
import { mapStateToProps } from "../Redux/ReactRedux";

const Educations = ({ state }: { state: ApplicationState }) => {
  return (
    <div>
      <h2>Education</h2>
      <div className="education section">
        {state.educations.map((item) => {
          return <Education key={item.id} cid={item.id} />;
        })}
        <AddLink label="Add Education" actionType={actions.ADD_EDUCATION} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Educations);
