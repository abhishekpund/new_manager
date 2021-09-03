import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {connect} from "react-redux";
import {emailChanged,passwordChanged,loginUser} from "../application/actions";
import {Button,Card,CardSection,Input,Spinner} from "../infrastructure/components/common";

class LoginForm extends Component {
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChanged = (text) => {
        this.props.passwordChanged(text);
    }

    onLoginButtonPressed = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError = () => {
        const { error } = this.props;
        if(error) {
            return (
                <View>
                    <Text style={styles.errorStyle}>{error}</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaViewStyle}>
                <Card>
                    <CardSection>
                        <Input
                            label="Email:"
                            placeholder="email@email.com"
                            onChangeText={(text) => this.onEmailChange(text)}
                            value={this.props.email}
                        />
                    </CardSection>
                        
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password:"
                            placeholder="password"
                            onChangeText={(text) => this.onPasswordChanged(text)}
                            value={this.props.password}
                        />
                    </CardSection>

                    { this.renderError() }

                    <CardSection>
                        <Button
                            onPress={() => this.onLoginButtonPressed()}
                        >
                            Login
                        </Button>
                    </CardSection>

                    { this.props.loading && <Spinner/> }
                </Card>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    errorStyle: {
        fontSize: 20,
        color: "#ff0000",
        textAlign: "center",
    },
})

const mapStateToProps = (state) => {
    return { 
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginUser })(LoginForm);