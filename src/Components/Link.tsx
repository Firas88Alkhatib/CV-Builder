import { connect } from "react-redux";
import actions from "../Redux/Actions";
import { updateLinkAction } from "../Redux/Actions/UpdateLinkAction";
import InputField from "./InputField";
import RemoveLink from "./RemoveLink";

interface LinkProps {
  cid: number;
}
const Link = ({ cid }: LinkProps) => {
  return (
    <div className="link container">
      <InputField cid={cid} label="Label" name="name" action={updateLinkAction} />
      <InputField cid={cid} label="Link" name="link" action={updateLinkAction} />
      <RemoveLink actionType={actions.REMOVE_LINK} cid={cid} />
      <div className="break-line"></div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(Link);
