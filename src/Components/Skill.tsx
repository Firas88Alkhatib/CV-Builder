import { connect } from "react-redux";
import actions from "../Redux/Actions";
import InputField from "./InputField";
import Level from "./Level";
import { SkillLevel } from "../Types/Skill";
import RemoveLink from "./RemoveLink";
import { updateSkillAction } from "../Redux/Actions/UpdateSkillAction";

interface SkillProps {
  cid: number;
}
const Skill = ({ cid }: SkillProps) => {
  return (
    <div className="skill container">
      <InputField cid={cid} label="Skill" name="name" action={updateSkillAction} />
      <Level actionType={actions.UPDATE_SKILL} options={SkillLevel} cid={cid}></Level>
      <RemoveLink actionType={actions.REMOVE_SKILL} cid={cid} />
      <div className="break-line"></div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(Skill);
