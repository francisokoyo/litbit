import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { Pedometer } from 'expo-sensors';

const styles = StyleSheet.create({
    root: {
        textAlign: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    count: {
        fontWeight: 'bold',
        fontSize: 150
    },
    count_text: {
        fontSize: 50
    }
});


const CountDisplay = ({
    count = 0,
    ...other
}) => {
    console.log('count display:', count);
    return (
        <View style={styles.root}>
            <Text style={styles.count}>
                {count}
            </Text>
            <Text style={styles.count_text}>
                steps
            </Text>
        </View>
    );
}

const Work = ({
    ...props
}) => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        Pedometer.watchStepCount(result => {
            setCount(result.steps);
        });
    }, []);

    return (
        <View>
            <CountDisplay count={count} />
        </View>
    )


}
export default Work;