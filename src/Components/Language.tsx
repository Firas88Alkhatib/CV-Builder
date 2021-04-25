import { connect } from "react-redux";
import actions from "../Redux/Actions";
import InputField from "./InputField";
import Level from "./Level";
import { LangLevel } from "../Types/Language";
import RemoveLink from "./RemoveLink";
import { updateLanguageAction } from "../Redux/Actions/UpdateLanguageAction";

interface LanguageProps {
  cid: number;
}
const Language = ({ cid }: LanguageProps) => {
  return (
    <div className="language container">
      <InputField cid={cid} label="Language" name="name" action={updateLanguageAction} />
      <Level actionType={actions.UPDATE_LANGUAGE} options={LangLevel} cid={cid}></Level>
      <RemoveLink actionType={actions.REMOVE_LANGUAGE} cid={cid} />
      <div className="break-line"></div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(Language);
