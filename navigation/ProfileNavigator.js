import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/profile/ProfileScreen'

const Stack = createStackNavigator()

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerTitle: 'プロフィール',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    )
}