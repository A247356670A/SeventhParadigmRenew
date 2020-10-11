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

const finderWidth: number = 280;
const finderHeight: number = 230;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

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

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState<any>(BarCodeScanner.Constants.Type.back);
    const [scanned, setScanned] = useState<boolean>(false);


    useEffect(() => {

        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
        if (!scanned) {
            const {type, data, bounds: {origin} = {}} = scanningResult;
            // @ts-ignore
            const {x, y} = origin;
            if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
                setScanned(true);
                alert(`Bar code with type ${type} and data ${data} has been scanned!`);
            }
        }
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        // <ScrollView
        //     style={styles.scrollViewStyle}
        //     // horizontal={true}
        //     // pagingEnabled={true}
        // >
        //     <View style={styles.record01}>
        //

        //
        //         {/*<View >*/}
        //         {/*    <Text>your rec11ord</Text>*/}
        //         {/*</View>*/}
        //         {/*<View style = {styles.record01}>*/}
        //         {/*    <Text>your record1</Text>*/}
        //         {/*</View>*/}
        //         {/*<Text style={styles.bigBlue}>Record Screen</Text>*/}
        //         {/*<Button title="Go to Details" onPress={() => navigation.navigate('Record_Details')}/>*/}
        //
        //     </View>
            <View style={{flex: 1}}>
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
                    width={350}
                    height={250}
                    yAxisLabel="$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
                <View style={styles.record01}>
                    <Text>your rec11ord</Text>
                    <Text>your rec11ordL</Text>

                </View>
            </View>

        // </ScrollView>
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
