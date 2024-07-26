import { useContext } from "react";
import { View,Text, Button } from "react-native";
import { MyContext } from "./MyContext";
import { Foo } from "./Foo";

export const Child= ()=>{
    const context=useContext(MyContext);
return(
    <View style={[{width:300,height:300,borderRadius:30,justifyContent:"center",alignItems:"center"}, {backgroundColor: context.theme === 'light' ? '#eaeaea':'#4b4b4b'}]}>
        <Text style={{fontWeight:"bold",fontSize:25,color:"blue"}}>
          {context.theme} 
        </Text>
        <Button title="Değiştir" onPress={()=> context.setTheme(context.theme === 'dark' ? 'light' : 'dark')}/>
            <Foo />
    </View>
);
};