import { connect } from "react-redux";
import ApplicationState from "../Types/ApplicationState";
import AddLink from "./AddLink";
import Employment from "./Employment";
import actions from "../Redux/Actions";

const Employments = ({ state }: { state: ApplicationState }) => {
  return (
    <div>
      <h2>Employment History</h2>
      <div className="employments section">
        {state.employmentHistory.map((item) => {
          return <Employment key={item.id} cid={item.id} />;
        })}

        <div className="">
          <AddLink label="Add Employment" actionType={actions.ADD_EMPLOYMENT} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(Employments);
