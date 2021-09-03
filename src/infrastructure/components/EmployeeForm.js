import React,{Component} from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";
import {connect} from "react-redux";
import {Select,CheckIcon} from 'native-base';
import {CardSection,Input} from "./common";
import {employeeUpdate} from "../../application/actions";

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name:"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: "name", value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone:"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: "phone", value })}
                    />
                </CardSection>

                <CardSection customStyle={{flexDirection: "column"}}>
                        <Text style={styles.labelStyle}>Shift:</Text>
                        <Select
                            selectedValue={this.props.shift}
                            maxWidth={Dimensions.get("window").width * 80}
                            placeholder="Select shift"
                            onValueChange={(value) => this.props.employeeUpdate({ prop: "shift", value})}
                            _selectedItem={{
                                bg: "cyan.600",
                                endIcon: <CheckIcon size={4} />,
                            }}
                        >
                            <Select.Item label="Monday" value="Monday" />
                            <Select.Item label="Tuesday" value="Tuesday" />
                            <Select.Item label="Wednesday" value="Wednesday" />
                            <Select.Item label="Thursday" value="Thursday" />
                            <Select.Item label="Friday" value="Friday" />
                            <Select.Item label="Saturday" value="Saturday" />
                            <Select.Item label="Sunday" value="Sunday" />
                        </Select>
                </CardSection>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
    },
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);