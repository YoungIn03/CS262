import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#ddd' } }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    headerTitle: () => (
                        <Header navigation={navigation} title='Gamezone' />
                    ),
                })}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: 'Review' }}
            />
        </Stack.Navigator>
    )
};
