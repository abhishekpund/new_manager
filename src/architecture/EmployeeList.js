import _ from "lodash";
import React,{Component} from "react";
import {FlatList} from "react-native";
import {connect} from "react-redux";
import {employeesfetch} from "../application/actions";
import ListItem from "../infrastructure/components/ListItem";

class EmployeeList extends Component {
    
    UNSAFE_componentWillMount() {
        this.props.employeesfetch();
    }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                keyExtractor={(data) => data.uid}
                renderItem={({item}) => {
                    return (
                       <ListItem employee={item}/>
                    );
                }}
            />
        );
    }
}

const mapStateToProps = (state) => {
    // Converting object into array of objects.
    console.log(state);
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // { shift: "Monday", name: "Abhi", phone: "5555555555", uid: "A4fodnsm"}
    });
    console.log(employees);
    return { employees };
};

export default connect(mapStateToProps, { employeesfetch })(EmployeeList);