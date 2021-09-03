import firebase from "firebase";
import {Actions} from "react-native-router-flux"
import {
    CLEAR_FORM_INPUTS,
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEES_SAVE_SUCCESS
} from "./types";

const clearFormInputs = () => {
    return {
        type: CLEAR_FORM_INPUTS,
    };
};

const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

const employeeCreate = ({ name, phone, shift }) => {
   const { currentUser } = firebase.auth();

   return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
   };
};

const employeesfetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on("value", snapshot => {
                // Automatically dispatches this action when new user created.
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

const employeeSave = ({ name, phone, shift, uid }) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEES_SAVE_SUCCESS });
            Actions.pop();
        });
    }
}

const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.pop();
        })
    }
}

export { clearFormInputs, employeeUpdate, employeeCreate, employeesfetch, employeeSave, employeeDelete };