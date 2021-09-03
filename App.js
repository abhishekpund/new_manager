import React,{Component} from 'react';
import {NativeBaseProvider} from "native-base";
import {SafeAreaProvider} from "react-native-safe-area-context";
import firebase from "firebase";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/application/reducers";
import Route from "./src/application/routes/Route";

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBOoIFqZa873cfhi4KV3aqj9qpJyOIKor4',
      authDomain: 'data-manager-e38d0.firebaseapp.com',
      projectId: 'data-manager-e38d0',
      storageBucket: 'data-manager-e38d0.appspot.com',
      messagingSenderId: '256706008156',
      appId: '1:256706008156:web:26f945e9f928433f3bc299',
      measurementId: 'G-QD4H6DEBGV'
    };
    // Initialize Firebase
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <NativeBaseProvider>
        <Provider store={store}>
          <SafeAreaProvider>
            <Route/>
          </SafeAreaProvider>
        </Provider>
      </NativeBaseProvider>
    );
  }
}

export default App;
