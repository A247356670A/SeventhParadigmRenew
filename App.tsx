import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as firebase from 'firebase';

import { YellowBox } from 'react-native';
// @ts-ignore
import _ from 'lodash';



export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    // Initialize Firebase
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAooY5lloGbo-nqDHl4in2Pb8ndDe3J2n8",
        authDomain: "seventhparadigmrenew.firebaseapp.com",
        databaseURL: "https://seventhparadigmrenew.firebaseio.com",
        projectId: "seventhparadigmrenew",
        storageBucket: "seventhparadigmrenew.appspot.com",
        messagingSenderId: "18587242451",
        appId: "1:18587242451:web:fc3a156f422340e275e926",
        measurementId: "G-9SBDPCNZ29"
    };
    YellowBox.ignoreWarnings(['Setting a timer']);
    const _console = _.clone(console);
    // @ts-ignore
    console.warn = message => {
        if (message.indexOf('Setting a timer') <= -1) {
            _console.warn(message);
        }
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme}/>
                <StatusBar/>
            </SafeAreaProvider>
        );
    }
}
