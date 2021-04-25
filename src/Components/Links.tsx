import { connect } from "react-redux";
import ApplicationState from "../Types/ApplicationState";
import AddLink from "./AddLink";
import actions from "../Redux/Actions";
import Link from "./Link";

const Links = ({ state }: { state: ApplicationState }) => {
  return (
    <div>
      <h2>Websites & Social Links</h2>
      <div className="links section">
        {state.links.map((item) => {
          return <Link key={item.id} cid={item.id} />;
        })}

        <div className="">
          <AddLink label="Add Link" actionType={actions.ADD_LINK} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(Links);
