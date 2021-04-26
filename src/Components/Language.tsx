import { connect } from "react-redux";
import actions from "../Redux/Actions";
import InputField from "./InputField";
import Level from "./Level";
import { LangLevel } from "../Types/Language";
import RemoveLink from "./RemoveLink";
import { updateLanguageAction } from "../Redux/Actions/UpdateLanguageAction";
import ApplicationState from "../Types/ApplicationState";

interface LanguageProps {
  cid: number;
  state: ApplicationState
}
const Language = ({state, cid }: LanguageProps) => {
  const language = state.languages.find((item) => item.id === cid);
  return (
    <div className="language container">
      <InputField value={language?.name} cid={cid} label="Language" name="name" action={updateLanguageAction} />
      <Level value={language?.level?.toString()} actionType={actions.UPDATE_LANGUAGE} options={LangLevel} cid={cid}></Level>
      <RemoveLink actionType={actions.REMOVE_LANGUAGE} cid={cid} />
      <div className="break-line"></div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(Language);
