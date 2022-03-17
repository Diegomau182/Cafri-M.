import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import 'react-native-gesture-handler';
//pantallas homes
import Home from '../../screens/Home'
import homeTabCafe from "../../screens/homeTabCafe";
import homeTabFrijol from "../../screens/homeTabFrijol";
//pantallas herramientas
import pantallaCajaHerramientasCafe from "../../screens/pantallasCafe/pantallaCajaHerramientasCafe";
import pantallaCajaHerramientasFrijol from "../../screens/pantallasFrijol/pantallaCajaHerramientasFrijol";
//pantallas guias
import guiaN1Cafe from "../../screens/pantallasCafe/guias/guiaN1Cafe";
import guiaN1Frijol from "../../screens/pantallasFrijol/guias/guiaN1Frijol"
import guiaN2Frijol from "../../screens/pantallasFrijol/guias/guiaN2Frijol";
import guiaN3Frijol from "../../screens/pantallasFrijol/guias/guiaN3Frijol";
//pantallas de informacion 
import pantallaInfoT from "../../screens/pantallaInfoT";
import pantallaInfoTI from "../../screens/pantallaInfoTI"
import pantallaInfoTITI from "../../screens/pantallaInfoTITI";
import pantallaImg from "../../screens/pantallaImg";
import pantallaTITImg from "../../screens/pantallaTITImg"
import pantallaInfoTTITITI from "../../screens/pantallaInfoTTITITI";
import pantallaInfoTITITITT from "../../screens/pantallaInfoTITITITT";
const Stack = createStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="homeTabCafe" component={homeTabCafe}/>
                <Stack.Screen name="homeTabFrijol" component={homeTabFrijol}/>
                
                <Stack.Screen name="cajaHerramientasCafe" component={pantallaCajaHerramientasCafe}/>
                <Stack.Screen name="cajaHerramientasFrijol" component={pantallaCajaHerramientasFrijol}/>

                <Stack.Screen name="guiaN1Cafe" component={guiaN1Cafe}/>
                <Stack.Screen name="guiaN1Frijol" component={guiaN1Frijol}/>
                <Stack.Screen name="guiaN2Frijol" component={guiaN2Frijol}/>
                <Stack.Screen name="guiaN3Frijol" component={guiaN3Frijol}/>

                <Stack.Screen name="pantallaInfoT" component={pantallaInfoT}/>
                <Stack.Screen name="pantallaInfoTI" component={pantallaInfoTI}/>
                <Stack.Screen name="pantallaInfoTITI" component={pantallaInfoTITI}/>
                <Stack.Screen name="pantallaImg" component={pantallaImg}/>
                <Stack.Screen name="pantallaTITImg" component={pantallaTITImg}/>
                <Stack.Screen name="pantallaInfoTTITITI" component={pantallaInfoTTITITI}/>
                <Stack.Screen name="pantallaInfoTITITITT" component={pantallaInfoTITITITT}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation