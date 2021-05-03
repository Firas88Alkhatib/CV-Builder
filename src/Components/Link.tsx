import { connect } from "react-redux";
import actions from "../Redux/Actions";
import { updateLinkAction } from "../Redux/Actions/UpdateLinkAction";
import { mapStateToProps } from "../Redux/ReactRedux";
import ApplicationState from "../Types/ApplicationState";
import InputField from "./InputField";
import RemoveLink from "./RemoveLink";

interface LinkProps {
  cid: number;
  state: ApplicationState;
}
const Link = ({ state, cid }: LinkProps) => {
  const link = state.links.find((item) => item.id === cid);
  return (
    <div className="link container">
      <InputField value={link?.name} cid={cid} label="Label" name="name" action={updateLinkAction} />
      <InputField value={link?.link} cid={cid} label="Link" name="link" action={updateLinkAction} />
      <RemoveLink actionType={actions.REMOVE_LINK} cid={cid} />
      <div className="break-line"></div>
    </div>
  );
};

export default connect(mapStateToProps)(Link);
