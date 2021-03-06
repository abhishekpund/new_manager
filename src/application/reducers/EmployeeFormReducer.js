import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_SAVE_SUCCESS,
    CLEAR_FORM_INPUTS
} from "../actions/types";

const INITIAL_STATE = {
    name: "",
    phone: "",
    shift: ""
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === { prop: "name", value: "Jane" }
            // { ...state, name: "Jane" }
            // [action.payload.prop] is key extrator.
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            // To clear inputs after saving employee info.
            return INITIAL_STATE;
        case EMPLOYEES_SAVE_SUCCESS:
            return INITIAL_STATE;
        case CLEAR_FORM_INPUTS:
            return INITIAL_STATE;
        default:
            return state;
    }
};