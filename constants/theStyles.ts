import {Button, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Colors} from "react-native-paper";
import Modal from "react-native-modal";
import * as React from "react";

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
    titleOption: {
        headerTitle: 'Welcome',
        headerTitleAlign: 'left',
        headerStyle: {
            height: 135,
            backgroundColor: '#68BE92',
            borderBottomLeftRadius: 80,
        },
        headerTitleStyle: {
            paddingLeft: 55,
            paddingTop: 32,
            fontSize: 30,
            color: 'white',
        },
        headerRightContainerStyle: {
            paddingBottom: 55,
            paddingRight: 25,
        },
    },
    dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
    },
};
