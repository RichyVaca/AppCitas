import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
  TouchableHighlight,
} from 'react-native';

const Cita = ({item, eliminarPaciente}) => {

    const diagoloEliminar = id => {
        console.log('Eliminando...', id);
        eliminarPaciente(id)
    }
    return( (
        <View style={styles.cita}>
            <View>
                <Text style = {styles.label}>Paciente: </Text>
                <Text style = {styles.text}>{item.paciente}</Text>
            </View>
            <View>
                <Text style = {styles.label}>Propietario: </Text>
                <Text style = {styles.text}>{item.propietario}</Text>
            </View>
            <View>
                <Text style = {styles.label}>Sintomas: </Text>
                <Text style = {styles.text}>{item.sintomas}</Text>
            </View>
            <View>
                <Text style = {styles.label}>Fecha : </Text>
                <Text style = {styles.text}>{item.fecha}</Text>
            </View>
            <View>
                <Text style = {styles.label}>Hora: </Text>
                <Text style = {styles.text}>{item.hora}</Text>
            </View>
            <View>
                <Text style = {styles.label}>Telefono: </Text>
                <Text style = {styles.text}>{item.telefono}</Text>
            </View>
            <TouchableHighlight onPress={() => diagoloEliminar(item.id)} style = {styles.btnEliminar}>
                <Text style = {styles.textoEliminar}>Eliminar &times; </Text>
            </TouchableHighlight>
        </View>
      ));
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
        
    },
    label:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    text:{
        fontSize: 18
    },
    btnEliminar:{
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
    },
    textoEliminar:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Cita;