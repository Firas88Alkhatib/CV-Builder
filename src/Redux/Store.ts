import { AnyAction, createStore } from "redux";
import ApplicationState from "../Types/ApplicationState";
import PersonalDetails from "../Types/PersonalDetails";
import ApplicationReducer from "./ApplicationReducer";

const storedState: ApplicationState = JSON.parse(localStorage.getItem("applicationState")!);
const initialState: ApplicationState = storedState || new ApplicationState(new PersonalDetails(), [], [], [], [], []);

const devToolsExt = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const middlewares = [devToolsExt];

const store = createStore<any, AnyAction, any, any>(ApplicationReducer, initialState, ...middlewares);

//initialState
export default store;
