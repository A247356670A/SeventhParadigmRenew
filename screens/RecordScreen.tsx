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

        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        // backgroundColor: "white",
        color: (opacity = 1) => `rgba(5, 101, 52, ${opacity})`,
        // strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        // useShadowColorFromDataset: false, // optional

        decimalPlaces: 0, // optional, defaults to 2dp
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    };
    return (
        <ScrollView
            style={styles.scrollViewStyle}
            // horizontal={true}
            // pagingEnabled={true}
        >
            <View style={styles.record01}>
                <Text>your rec11ord</Text>

                <BarChart
                    yAxisSuffix="k"
                    data={{
                        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                        datasets: [
                            {
                                data: [20, 45, 28, 80, 99, 43, 50],
                            },
                        ],
                    }}
                    style={{
                        padding: '1%',
                    }}
                    width={width * 0.8}
                    height={height * 0.4}
                    yAxisLabel="Co2: "
                    chartConfig={chartConfig}
                    horizontalLabelRotation = {10}
                    // verticalLabelRotation={30}
                />
            </View>
            <View style={styles.record01}>
                <Text>your rec11ord</Text>
                <Text>your rec11ordL</Text>
            </View>
            <View style={styles.record02}>
                <Text>your rec11ord</Text>
                <Text>your rec11ordL</Text>
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
    graphStyle:{

    },
    record01: {
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '2%',
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
    record02: {
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '2%',
        marginTop: '3%',
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
