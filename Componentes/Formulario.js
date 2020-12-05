import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarForm}) => {

    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');
      
    //Aqui va las funciones del picker que no funciona
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        
        hideDatePicker();
    };


    //Muestra o ocula el time picker

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (time) => {
        const opciones = {hour: 'numeric', minute: 'numeric' }; //hour24: false
        guardarHora(time.toLocaleTimeString('en-US',opciones));
        hideTimePicker();
    };

    const crearNuevaCita = () => {
        //validar
        if(paciente.trim() === '' || 
        propietario.trim() === '' || 
        telefono.trim() === '' ||
        fecha.trim() === '' ||
        hora.trim() === '' ||
        sintomas.trim() === ''){
            //Falla la validación
            mostrarAlerta();
            return;
        }
        //Crear Nueva cita
        const cita = {paciente, propietario, telefono, fecha, hora, sintomas};

        cita.id = shortid.generate();

        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);
        

        //Ocultar el formulario
        guardarMostrarForm(false);

        //Resetear el formulario
        
    }
    const mostrarAlerta = () =>{
        Alert.alert(
            'Error', //Titulo
            'Todo los campos son obligatorios', //Mensaje
            [{
                text: 'OK' //Arreglo de botones
            }]
        )
    }

    return(
        <>
            <ScrollView style = {styles.formulario}>

                <View >
                    <Text style = {styles.label}>Paciente: </Text>
                    <TextInput style={styles.input}
                    onChangeText={texto => guardarPaciente(texto)}
                    />

                </View>

                <View>
                    <Text style = {styles.label}>Dueño: </Text>
                    <TextInput style={styles.input}
                    onChangeText={texto => guardarPropietario(texto)}
                    />

                </View>

                <View>
                    <Text style = {styles.label}>Telefono: </Text>
                    <TextInput style={styles.input}
                    onChangeText={texto => guardarTelefono(texto)}
                    keyboardType = 'numeric'
                    />

                </View>
                
                {/* Fecha */}
                <View>
                    <Text style = {styles.label}>Fecha: </Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        />
                    <Text>{fecha}</Text>
                </View>
                {/* Hora */}

                <View>
                    <Text style = {styles.label}>Hora: </Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        // is24Hour
                        />
                    <Text>{hora}</Text>
                </View>

                <View>
                    <Text style = {styles.label}>Sintomas: </Text>
                    <TextInput multiline style={styles.input}
                    onChangeText={texto => guardarSintomas(texto)}
                    />

                </View>
                {/* Boton */}
                <TouchableHighlight onPress={() => crearNuevaCita()} style = {styles.btnSubmit}>
                    <Text style = {styles.textoSubmit}>Agregar cita </Text>
                </TouchableHighlight>

            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color: 'black'
    },
    input: {
        marginTop: 10,
        height: 40,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit:{
        padding: 10,
        backgroundColor: '#7d024e',
        marginVertical: 10,
    },
    textoSubmit:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Formulario;