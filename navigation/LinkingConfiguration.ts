import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Suggest: {
                        screens: {
                            SuggestScreen: 'Suggest',
                        },
                    },
                    Record: {
                        screens: {
                            RecordScreen: 'Record',
                        },
                    },
                    Home: {
                        screens: {
                            HomeScreen: 'Home',
                        },
                    },
                    Task: {
                        screens: {
                            TaskScreen: 'Task',
                        },
                    },
                    Reward: {
                        screens: {
                            RewardScreen: 'Reward',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
