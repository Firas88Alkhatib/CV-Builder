import { connect } from "react-redux";
import ApplicationState from "../Types/ApplicationState";
import actions from "../Redux/Actions";
import AddLink from "./AddLink";
import Language from "./Language";

const Languages = ({ state }: { state: ApplicationState }) => {
  return (
    <div>
      <h2>Languages</h2>
      <div className="languages section">
        {state.languages.map((item) => {
          return <Language key={item.id} cid={item.id} />;
        })}
        <AddLink label="Add Language" actionType={actions.ADD_LANGUAGE} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(Languages);
