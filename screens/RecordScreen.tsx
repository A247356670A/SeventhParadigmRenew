import * as React from 'react';
import {StyleSheet, ScrollView, Button, Dimensions, TouchableOpacity} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import {useEffect, useState} from 'react';
import {Text, View} from '../components/Themed';
import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RecordScreen() {
    // const [hasPermission, setHasPermission] = useState(null);
    // const [scanned, setScanned] = useState(false);

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: '#1E2923',
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };
    return (
        <ScrollView
            style={styles.scrollViewStyle}
            // horizontal={true}
            // pagingEnabled={true}
        >
        {/*//*/}
        {/*//         /!*<View >*!/*/}
        {/*//         /!*    <Text>your rec11ord</Text>*!/*/}
        {/*//         /!*</View>*!/*/}
        {/*//         /!*<View style = {styles.record01}>*!/*/}
        {/*//         /!*    <Text>your record1</Text>*!/*/}
        {/*//         /!*</View>*!/*/}
        {/*//         /!*<Text style={styles.bigBlue}>Record Screen</Text>*!/*/}
        {/*//         /!*<Button title="Go to Details" onPress={() => navigation.navigate('Record_Details')}/>*!/*/}
        {/*//*/}
            <View style={styles.record01}>
                <Text>your rec11ord</Text>

                <BarChart
                    yAxisSuffix="k"
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [
                            {
                                data: [20, 45, 28, 80, 99, 43],
                            },
                        ],
                    }}
                    // width={Dimensions.get("window").width} // from react-native
                    // style={graphStyle}
                    width={width * 0.85}
                    height={height * 0.4}
                    yAxisLabel="$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
                <View style={styles.record01}>
                    <Text>your rec11ord</Text>
                    <Text>your rec11ordL</Text>

                </View>
            </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    record01: {
        paddingTop: '5%',
        paddingBottom: '5%',
        marginTop: '8%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,

        backgroundColor: 'white',
        left: 0,
        width: '90%',
        // height:"60%",
        // minHeight:"60%",
        // maxHeight:"70%",

    },
    scrollViewStyle: {
        flex: 1,

    },

});
