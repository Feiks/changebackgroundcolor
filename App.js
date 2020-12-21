import React , {useState} from 'react';

import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState(' ');
  const [surname, setSurname] = useState('');
  const [car, setCar] = useState(' '); 
  const [age, setAge] = useState(' '); 

  const clickHandler = () => {



  }


  


   return(
<View style = {styles.container}>
<View style = {styles.header}>

         <Text > Enter Name: </Text>
         <TextInput style = {styles.input}
         placeholder = 'e.g. John'
         multiline
         onChangeText = {(value) => setName(value )}/>

         <Text > Enter Surname: </Text>
         <TextInput style={styles.input}
           placeholder='e.g. Smith'
           
           onChangeText={(value) => setSurname(value)} />

         <Text > Enter Car: </Text>
         <TextInput style={styles.input}
           placeholder='e.g. BMW'
           onChangeText={(value) => setCar(value)} />

         <Text > Enter Age: </Text>
         <TextInput style={styles.input}
           placeholder='e.g. 56'
           keyboardType = 'numeric'
           onChangeText={(value) => setAge(value)} />



         <Text style={styles.boldText1}> My name is {name}  </Text>
         <Text style={styles.boldText1}> My surname is {surname} </Text>
         <Text style={styles.boldText1}> My car is {car} </Text>
         <Text style={styles.boldText1}> My age is {age} </Text>




  </View> 

       <View style={styles.buttonContainer}>
         <Button title='Update  Me' onPress={clickHandler} />



       </View>





  </View>



   );

}

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      },

      header: {
        backgroundColor: 'pink',
        padding: 20,
      },
      body: {
        backgroundColor: 'yellow'

      },
      boldText1: {
        fontWeight: 'bold'

      },

      buttonContainer: {

       marginTop: 20,


      },
      input: {

        borderWidth: 1,
        borderColor : 'black',
        padding : 8,
        margin: 20,
        width: 200,
      


      }
      
    });