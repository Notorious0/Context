import { useContext } from "react"
import { View ,Text} from "react-native"
import { MyContext } from "./MyContext";

export const Foo = () =>{
    const data =useContext(MyContext);

   return(
    <View style={{width:100,height:100,margin:20,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20}}>
         {data.theme}
        </Text>
    </View>
   )
}