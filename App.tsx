import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as firebase from 'firebase';

import {LogBox} from 'react-native';
// @ts-ignore
import _ from 'lodash';
import * as Font from 'expo-font';

import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic
} from '@expo-google-fonts/montserrat'

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
    LogBox.ignoreLogs(['Remote debugger']);
    LogBox.ignoreLogs(['Setting a timer']);
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

    const [loaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light,
        Montserrat_300Light_Italic,
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black,
        Montserrat_900Black_Italic
    });

    if (!loaded) {
        return null;
    }

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
