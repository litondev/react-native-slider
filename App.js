import React from 'react';
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from "./src/Routes";

const Stack = createNativeStackNavigator();

export default class App extends React.Component{   
  async componentDidMount(){
    await AsyncStorage.setItem('@default_data',JSON.stringify({
      current_page : 1,
      last_page : 5
    }));
  }

  render(){
    return (
      <NavigationContainer>
        <React.Suspense fallback={<View><Text>Loading . . .</Text></View>}>      
          <Stack.Navigator 
            screenOptions={{
              headerShown : false
            }}>
            {
              Routes.map((item,index) => 
                <Stack.Screen 
                  name={item.name} 
                  key={index}>
                  {props => <item.component {...props} {...this.props} /> }
                </Stack.Screen>
              )
            }        
          </Stack.Navigator>
        </React.Suspense>        
      </NavigationContainer>
    );
  }
}