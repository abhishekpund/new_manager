import React,{Component} from "react";
import {connect} from "react-redux";
import {employeeUpdate,employeeCreate} from "../application/actions";
import {Card,CardSection,Button} from "../infrastructure/components/common";
import EmployeeForm from "../infrastructure/components/EmployeeForm";

class EmployeeCreate extends Component {
    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);