import React from "react";
import {StyleSheet} from "react-native";
import {Router,Scene,Actions} from "react-native-router-flux";
import LoginForm from "../../architecture/LoginForm";
import EmployeeList from "../../architecture/EmployeeList";
import EmployeeCreate from "../../architecture/EmployeeCreate";
import EmployeeEdit from "../../architecture/EmployeeEdit";

const Route = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please Login"
                        titleStyle={styles.headerTitleStyle}
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={ () => { Actions.employeeCreate() } }
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        titleStyle={styles.headerTitleStyle}
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                        titleStyle={styles.headerTitleStyle}
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                        titleStyle={styles.headerTitleStyle}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    headerTitleStyle: {
        textAlign:"center",
    },
});

export default Route;