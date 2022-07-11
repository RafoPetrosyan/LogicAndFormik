import {createLogic} from "redux-logic";
import {makeAction} from "../../../helpers/makeAction";
import {USERS_LIST_REQUEST, USERS_LIST_SUCCESS} from "../../actions/users";

const getUsersList = createLogic({
    type: USERS_LIST_REQUEST,
    latest: true,
    async process({ getState, action, apiClient }, dispatch, done) {
        try {
            const {data: { users }} = await apiClient.get('user');
            dispatch(makeAction(USERS_LIST_SUCCESS, users));

            action.callback && action.callback('success');
        }catch (e){
            console.log(e)
        }
        done();
    },
});

const users = [getUsersList];
export default users;