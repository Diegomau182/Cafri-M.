import React  from "react"
import {Text,View,StyleSheet,Image,TouchableOpacity} from "react-native"
import ComponenteGuia from "../../components/component/ComponenteGuia"

const pantallaCajaHerramientasFrijol = ({navigation}) =>{
    return(
        <View style={styles.fondo}>
        <View style={styles.contenedorNavegacion}>
            <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("homeTabFrijol")}}>
                    <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.contenedortitulo}>
            <Text style={styles.titulo}>Caja de herramientas para Frijol</Text>
        </View>
        <View style={styles.row}>
            <ComponenteGuia titulo="Guia#1: Enfermedades de la raíz. "  imagen="1" callback={()=>{navigation.navigate("guiaN1Frijol")}} />
            <ComponenteGuia titulo="Guia#2: Enfermedades del tallo y marchitamiento."  imagen="2" callback={()=>{navigation.navigate("guiaN2Frijol")}} />
            <ComponenteGuia titulo="Guia#3: Enfermedades Foliares"  imagen="3" callback={()=>{navigation.navigate("guiaN3Frijol")}} />
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: "column",
      },
    fondo:{
        flex:1,
        backgroundColor:'#F1F1F5',
     },
     contenedorNavegacion: {
        backgroundColor:"#9FA617",
        alignItems:"flex-start",
        flexDirection:"row",
        height:"15%"
      },
    tamañoFlecha:{
        marginLeft:"20%",
        width:"60%",
        height:"30%",
        marginTop: "70%"
    },
    flecha:{
        marginLeft:"1%",
        width:"20%",
        height:"100%",
    },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"5%",
        alignItems:"center"
    }

})

export default pantallaCajaHerramientasFrijol