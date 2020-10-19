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
import {useEffect, useState} from "react";
import firebase from "firebase";
import {BarCodeScanner} from "expo-barcode-scanner";

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
    //let isUserLogin = false;
    const [isUserLogin, setUserLogin] = useState(false)
    const [isHomeModalVisible, setHomeModalVisible] = useState(false);

    const toggleModal = () => {
        checkLoginStatus();
        setHomeModalVisible(!isHomeModalVisible);
    };
    const userLogin = () => {
        setHomeModalVisible(!isHomeModalVisible);
        updateLoginStatus(0,true);
    };
    const userLogoff = () => {
        setHomeModalVisible(!isHomeModalVisible);
        updateLoginStatus(0,false);
    };
    let iconName: any;
    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    function checkLoginStatus(){
        // let userScore: number;
        let ref = firebase.database().ref('userStatus/' + 0 + '/isUserLogin')
        ref.on("value", function (snapshot) {
            setUserLogin(snapshot.val());
            // updateUserScore(snapshot.val());
            console.log("data pulled" + isUserLogin);
            // HomeScreen();
        });
    }
    function updateLoginStatus(levelId: number, status: boolean) {
        firebase.database().ref('userStatus/' + levelId).set({
            isUserLogin: status

        }).then(function () {
            checkLoginStatus();
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }
    useEffect(() => {

        (async () => {
            checkLoginStatus();
        })();
    }, []);

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerTitle: 'Welcome',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 145,
                        backgroundColor: '#78d9a4',
                        borderBottomLeftRadius: 70,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 10,
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
                                <View style={{flex: 1}}>
                                    <Button title="logoff" onPress={userLogoff}/>
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
    const [isRecordModalVisible, setRecordModalVisible] = useState(false);
    const [isUserLogin, setUserLogin] = useState(false)

    const toggleModal = () => {
        checkLoginStatus();
        setRecordModalVisible(!isRecordModalVisible);
    };
    const userLogin = () => {
        setRecordModalVisible(!isRecordModalVisible);
        updateLoginStatus(0,true);
    };
    const userLogoff = () => {
        setRecordModalVisible(!isRecordModalVisible);
        updateLoginStatus(0,false);
    };
    let iconName: any;

    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    function checkLoginStatus(){
        // let userScore: number;
        let ref = firebase.database().ref('userStatus/' + 0 + '/isUserLogin')
        ref.on("value", function (snapshot) {
            setUserLogin(snapshot.val());
            // updateUserScore(snapshot.val());
            console.log("data pulled" + isUserLogin);
            // HomeScreen();
        });
    }
    function updateLoginStatus(levelId: number, status: boolean) {
        firebase.database().ref('userStatus/' + levelId).set({
            isUserLogin: status

        }).then(function () {
            checkLoginStatus();
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }
    useEffect(() => {

        (async () => {
            checkLoginStatus();
        })();
    }, []);
    return (
        <RecordStack.Navigator>
            <RecordStack.Screen
                name="RecordScreen"
                component={RecordScreen}
                options={{
                    title: 'Record',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 145,
                        backgroundColor: '#78d9a4',
                        borderBottomLeftRadius: 70,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 10,
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
                                    <View style={{flex: 1}}>
                                        <Button title="logoff" onPress={userLogoff}/>
                                    </View>
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
    const [isSuggestModalVisible, setSuggestModalVisible] = useState(false);
    const [isUserLogin, setUserLogin] = useState(false)

    const toggleModal = () => {
        checkLoginStatus();
        setSuggestModalVisible(!isSuggestModalVisible);
    };
    const userLogin = () => {
        setSuggestModalVisible(!isSuggestModalVisible);
        updateLoginStatus(0,true);
    };
    const userLogoff = () => {
        setSuggestModalVisible(!isSuggestModalVisible);
        updateLoginStatus(0,false);
    };
    let iconName: any;

    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    function checkLoginStatus(){
        // let userScore: number;
        let ref = firebase.database().ref('userStatus/' + 0 + '/isUserLogin')
        ref.on("value", function (snapshot) {
            setUserLogin(snapshot.val());
            // updateUserScore(snapshot.val());
            console.log("data pulled" + isUserLogin);
            // HomeScreen();
        });
    }
    function updateLoginStatus(levelId: number, status: boolean) {
        firebase.database().ref('userStatus/' + levelId).set({
            isUserLogin: status

        }).then(function () {
            checkLoginStatus();
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }
    useEffect(() => {

        (async () => {
            checkLoginStatus();
        })();
    }, []);

    return (
        <SuggestStack.Navigator>
            <SuggestStack.Screen
                name="SuggestScreen"
                component={SuggestScreen}
                options={{
                    title: 'Suggest',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 145,
                        backgroundColor: '#78d9a4',
                        borderBottomLeftRadius: 70,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 10,
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
                                    <View style={{flex: 1}}>
                                        <Button title="logoff" onPress={userLogoff}/>
                                    </View>
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
    const [isTaskModalVisible, setTaskModalVisible] = useState(false);
    const [isUserLogin, setUserLogin] = useState(false)

    const toggleModal = () => {
        checkLoginStatus();
        setTaskModalVisible(!isTaskModalVisible);
    };
    const userLogin = () => {
        updateLoginStatus(0,true);
        setTaskModalVisible(!isTaskModalVisible);
    };
    const userLogoff = () => {
        setTaskModalVisible(!isTaskModalVisible);
        updateLoginStatus(0,false);
    };
    let iconName: any;

    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    function checkLoginStatus(){
        // let userScore: number;
        let ref = firebase.database().ref('userStatus/' + 0 + '/isUserLogin')
        ref.on("value", function (snapshot) {
            setUserLogin(snapshot.val());
            // updateUserScore(snapshot.val());
            console.log("data pulled" + isUserLogin);
            // HomeScreen();
        });
    }
    function updateLoginStatus(levelId: number, status: boolean) {
        firebase.database().ref('userStatus/' + levelId).set({
            isUserLogin: status

        }).then(function () {
            checkLoginStatus();
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }
    useEffect(() => {

        (async () => {
            checkLoginStatus();
        })();
    }, []);

    return (
        <TaskStack.Navigator>
            <TaskStack.Screen
                name="TaskScreen"
                component={TaskScreen}
                options={{
                    title: 'Task',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 145,
                        backgroundColor: '#78d9a4',
                        borderBottomLeftRadius: 70,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 10,
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
                                    <View style={{flex: 1}}>
                                        <Button title="logoff" onPress={userLogoff}/>
                                    </View>
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
    const [isRewardModalVisible, setRewardModalVisible] = useState(false);
    const [isUserLogin, setUserLogin] = useState(false)

    const toggleModal = () => {
        checkLoginStatus();
        setRewardModalVisible(!isRewardModalVisible);
    };
    const userLogin = () => {
        updateLoginStatus(0,true);
        setRewardModalVisible(!isRewardModalVisible);
    };
    const userLogoff = () => {
        setRewardModalVisible(!isRewardModalVisible);
        updateLoginStatus(0,false);
    };
    let iconName: any;

    if (isUserLogin) {
        iconName = 'user';
    } else {
        iconName = 'user-o';
    }
    function checkLoginStatus(){
        // let userScore: number;
        let ref = firebase.database().ref('userStatus/' + 0 + '/isUserLogin')
        ref.on("value", function (snapshot) {
            setUserLogin(snapshot.val());
            // updateUserScore(snapshot.val());
            console.log("data pulled" + isUserLogin);
            // HomeScreen();
        });
    }
    function updateLoginStatus(levelId: number, status: boolean) {
        firebase.database().ref('userStatus/' + levelId).set({
            isUserLogin: status

        }).then(function () {
            checkLoginStatus();
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }
    useEffect(() => {

        (async () => {
            checkLoginStatus();
        })();
    }, []);

    return (
        <RewardStack.Navigator>
            <RewardStack.Screen
                name="RewardScreen"
                component={RewardScreen}
                options={{
                    title: 'Reward',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 145,
                        backgroundColor: '#78d9a4',
                        borderBottomLeftRadius: 70,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 10,
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
                                    <View style={{flex: 1}}>
                                        <Button title="logoff" onPress={userLogoff}/>
                                    </View>
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

