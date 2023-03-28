import { StyleSheet, Image,TouchableOpacity} from 'react-native';
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screen/Home';
import {COLORS,SIZES,FONTS,icons} from'./src/constants/index'

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent',
  }
}

const stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={HomeScreen} 
        options={{
          title:'SHOE SELECTOR',
          headerTintColor:COLORS.lightGray,headerTitleStyle:{
            ...FONTS.navTitle,
          },
          headerLeft:({onPress})=>(
            <TouchableOpacity 
            style={{marginLeft:SIZES.base}}
            onPress={onPress}
            >
              <Image source={icons.menu}
              style={{
                width:25,height:25,resizeMode:'contain'
              }}
              />
            </TouchableOpacity>
          ),
          headerRight:()=>(
            <TouchableOpacity 
            style={{marginRight:SIZES.base}}
            onPress={()=>console.log('On Click search')}
            >
              <Image source={icons.search}
              style={{width:30,height:30,resizeMode:'contain'}}
              />
            </TouchableOpacity>
          ),
          headerTitleAlign:'center',
        }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
