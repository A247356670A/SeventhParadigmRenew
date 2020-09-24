import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconButton, Colors} from 'react-native-paper';
import theColors from '../constants/theColors';
import useColorScheme from '../hooks/useColorScheme';
import RecordScreen from '../screens/RecordScreen';
import HomeScreen from '../screens/HomeScreen';
import SuggestScreen from '../screens/SuggestScreen';
import TaskScreen from '../screens/TaskScreen';
import RewardScreen from '../screens/RewardScreen';
import {
    BottomTabParamList,
    RecordParamList,
    SuggestParamList,
    HomeParamList,
    TaskParamList,
    RewardParamList
} from '../types';
import {useState} from "react";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName: any;

                    if (route.name === 'Suggest') {
                        iconName = focused ? 'leaf' : 'leaf';
                    } else if (route.name === 'Record') {
                        iconName = focused ? 'bar-chart' : 'bar-chart';
                    } else if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Task') {
                        iconName = focused ? 'tasks' : 'tasks';
                    } else if (route.name === 'Reward') {
                        iconName = focused ? 'gift' : 'gift';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color}/>;
                },


            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'black',
            }}
        >
            <BottomTab.Screen
                name="Suggest"
                component={SuggestNavigator}
            />
            <BottomTab.Screen
                name="Record"
                component={RecordNavigator}
            />
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
            />
            <BottomTab.Screen
                name="Task"
                component={TaskNavigator}
            />
            <BottomTab.Screen
                name="Reward"
                component={RewardNavigator}
            />

        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
    let isUserLogin = false;
    const [isHomeModalVisible, setHomeModalVisible] = useState(false);

    const toggleModal = () => {

        setHomeModalVisible(!isHomeModalVisible);
    };
    const userLogin = () => {
        setHomeModalVisible(!isHomeModalVisible);
        isUserLogin = true;
    };
    let iconName: any;
    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
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
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name={iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}
                            />

                            <Modal style={styles.login} isVisible={isHomeModalVisible && !isUserLogin}>
                                <View>
                                    <Button title="back" onPress={toggleModal}/>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>
                                    <Text>email address</Text>
                                    <Text>password</Text>

                                </View>
                                <View style={{flex: 1}}>
                                    <Button title="login" onPress={userLogin}/>
                                </View>
                            </Modal>
                            <Modal style={styles.login} isVisible={isHomeModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal}/>
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
}

const RecordStack = createStackNavigator<RecordParamList>();

function RecordNavigator() {
    let isUserLogin = false;
    const [isRecordModalVisible, setRecordModalVisible] = useState(false);
    const toggleModal = () => {

        setRecordModalVisible(!isRecordModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setRecordModalVisible(!isRecordModalVisible);
        isUserLogin = true;
    };
    let iconName: any;
    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    return (
        <RecordStack.Navigator>
            <RecordStack.Screen
                name="RecordScreen"
                component={RecordScreen}
                options={{
                    title: 'Record',
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
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name={iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isRecordModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin}/>
                                </View>
                            </Modal>
                            <Modal isVisible={isRecordModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal}/>
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </RecordStack.Navigator>
    );
}

const SuggestStack = createStackNavigator<SuggestParamList>();

function SuggestNavigator() {
    let isUserLogin = false;
    const [isSuggestModalVisible, setSuggestModalVisible] = useState(false);
    const toggleModal = () => {

        setSuggestModalVisible(!isSuggestModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setSuggestModalVisible(!isSuggestModalVisible);
        isUserLogin = true;
    };
    let iconName: any;
    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    return (
        <SuggestStack.Navigator>
            <SuggestStack.Screen
                name="SuggestScreen"
                component={SuggestScreen}
                options={{
                    title: 'Suggest',
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
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name={iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isSuggestModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin}/>
                                </View>
                            </Modal>
                            <Modal isVisible={isSuggestModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal}/>
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </SuggestStack.Navigator>
    );
}

const TaskStack = createStackNavigator<TaskParamList>();

function TaskNavigator() {
    let isUserLogin = false;
    const [isTaskModalVisible, setTaskModalVisible] = useState(false);
    const toggleModal = () => {

        setTaskModalVisible(!isTaskModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setTaskModalVisible(!isTaskModalVisible);
        isUserLogin = true;
    };
    let iconName: any;
    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    return (
        <TaskStack.Navigator>
            <TaskStack.Screen
                name="TaskScreen"
                component={TaskScreen}
                options={{
                    title: 'Task',
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
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name={iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isTaskModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin}/>
                                </View>
                            </Modal>
                            <Modal isVisible={isTaskModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal}/>
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </TaskStack.Navigator>
    );
}


const RewardStack = createStackNavigator<RewardParamList>();

function RewardNavigator() {
    let isUserLogin = false;
    const [isRewardModalVisible, setRewardModalVisible] = useState(false);
    const toggleModal = () => {

        setRewardModalVisible(!isRewardModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setRewardModalVisible(!isRewardModalVisible);
        isUserLogin = true;
    };
    let iconName: any;
    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    return (
        <RewardStack.Navigator>
            <RewardStack.Screen
                name="RewardScreen"
                component={RewardScreen}
                options={{
                    title: 'Reward',
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
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name={iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isRewardModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin}/>
                                </View>
                            </Modal>
                            <Modal isVisible={isRewardModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal}/>
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </RewardStack.Navigator>
    );
}


const styles = StyleSheet.create({
    login: {
        display: 'flex',
        position: 'absolute',
        borderRadius: 20,
        padding: '10%',
        width: '80%',
        height: '85%',
        left: '5%',
        top: '5%',
        backgroundColor: 'white',

    },
});

