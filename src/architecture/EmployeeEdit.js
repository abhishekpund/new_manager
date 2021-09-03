import _ from "lodash";
import React,{Component} from "react";
import {Linking} from "react-native";
import {connect} from "react-redux";
import {employeeUpdate,employeeSave,employeeDelete} from "../application/actions";
import {Card,CardSection,Button,Confirm} from "../infrastructure/components/common";
import EmployeeForm from "../infrastructure/components/EmployeeForm";

class EmployeeEdit extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
        }
    }

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        })
    }

    onSaveChanges = () => {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onText = async () => {
        const { phone, shift } = this.props;
        await Linking.openURL(`sms:+${phone}`);
    }

    onAccept = () => {
        const { uid } = this.props.employee;

        this.props.employeeDelete({ uid });
    }

    onDecline = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button onPress={() => this.onSaveChanges()}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.onText()}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ show: true })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.show}
                    onAccept={() => this.onAccept()}
                    onDecline={() => this.onDecline()}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);