import React,{Component} from "react";
import {Text,View,StyleSheet,TouchableWithoutFeedback} from "react-native";
import {Actions} from "react-native-router-flux";
import {CardSection} from "./common";

class ListItem extends Component {
    onRowPressed = () => {
        console.log(this.props.employee);
        Actions.employeeEdit({ employee: this.props.employee });
    }
    
    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={() => this.onRowPressed()}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
});

export default ListItem;