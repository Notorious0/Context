import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Child } from './Child';
import { MyContext } from './MyContext';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme]=useState("light");
  return (
    <MyContext.Provider value={{theme,setTheme}}>
<View 
  style={[
    styles.container, 
    {backgroundColor: theme === 'light' ? 'white' : '#212121'}
  ]}
>
      <Text style={{fontWeight:'bold',fontSize:20}}>{theme}</Text>
      <Child />
      <StatusBar style="auto" />
    </View>
    </MyContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
