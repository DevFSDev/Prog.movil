import { Text, View } from "react-native";
import { useState } from "react";
import {Center, Box, Heading, VStack, NativeBaseProvider, Button,} from "native-base";

export default function App() {
  let [number, setNumber] = useState("0");
  let [oldNumber, setOldNumber] = useState();

  
  let [numberOne, setNumberOne] = useState();
  let [numberTwo, setNumberTwo] = useState();
  let [numberThree, setNumberThree] = useState();
  let [calculo, setCalculo] = useState();
  let [operador, setOperador] = useState();

  // A IMPLEMENTAR POR EL ALUMNO //


  function handleEquals() {
    setNumber(calculo);
  }




  function handleNumber(e) {


    if(number == numberTwo){

      numberThree = e;
      let numeros = numberTwo + numberThree;
      let numerosFloat = parseFloat(numeros);
      setNumber(numerosFloat )
      numberTwo = numerosFloat
      setNumberTwo(numberTwo);

      if(operador == "+"){
        sumar();
      }
      else if(operador == "-"){
        restar()
      }
      else if(operador == "x"){
        multiplicar()
      }
      else if(operador == "/"){
        dividir()
      }
      
      
    }




    if (number == "0") {

        number = e; //Asigna a la variable number
        setNumber(number); //Mostrar por pantalla
        setOldNumber(number); //Asigna a la variable oldNUmber
      
        let numeros = number + oldNumber;
        let numerosFloat = parseFloat(numeros);
        setNumber(numerosFloat);
        numberOne = numerosFloat;
        setNumberOne(numberOne);
        
      
        
    } else {


        if (operador == undefined) {
          number = e;
          let num1 = (oldNumber);
          let num2 = (number);
          let numeros = num1 + num2;
          let numerosFloat = parseFloat(numeros);
          setNumber(numerosFloat);
          numberOne = numerosFloat;
          setNumberOne(numberOne);


        } else if(numberTwo == undefined) {

          // TODO: crear primer digito del segundo sumando
          
          numberTwo = e;
          let num1 = (numberTwo)
          let num2 = (numberThree)
          let numeros = num1 + num2;
          let numerosFloat = parseFloat(numeros);
          setNumber(numerosFloat )
          numberTwo = numerosFloat
          setNumberTwo(numberTwo);

          if(operador == "+"){
            sumar();
          }
          else if(operador == "-"){
            restar()
          }
          else if(operador == "x"){
            multiplicar()
          }
          else if(operador == "/"){
            dividir()
          }

        }

      }
  }



  function signOnPress(e) {
    let operador = e;
    setOperador(operador);
    console.log(operador);
  }



  function handleInversa() {
    let calculo = 1 / number;
    setCalculo(calculo);
  }



  function handleFactorial() {
    let calculo = 0;
    if (number === 0 || number === 1) {
      calculo = 1;
    }
    for (let i = number - 1; i >= 1; i--) {
      calculo = number *= i;
    }
    setCalculo(calculo);
  }



  function handleRaiz() {
    let calculo = Math.sqrt(number);
    setCalculo(calculo);
  }



  function sumar() {
    operador = "+";
    setOperador(operador);
    let suma = 0;

    let num1 = parseFloat(numberOne);
    let num2 = parseFloat(numberTwo);

      suma = num1 + num2;
      setCalculo(suma);
  

  }

  function restar(){
       
      operador = "-"
      setOperador(operador)
      let resta = 0

      let num1 = parseFloat(numberOne);
      let num2 = parseFloat(numberTwo);

      resta = num1 - num2
      setCalculo(resta);

  }

    function multiplicar(){
       
      operador = "x"
      setOperador(operador)
      let multiplicar = 0

      let num1 = parseFloat(numberOne);
      let num2 = parseFloat(numberTwo);

      multiplicar = num1 * num2
      setCalculo(multiplicar);

  }

    function dividir(){
       
      operador = "/"
      setOperador(operador)
      let dividir = 0

      let num1 = parseFloat(numberOne);
      let num2 = parseFloat(numberTwo);

      dividir = num1 / num2
      setCalculo(dividir);

  }

  function resetOnPress() {
    number = "0";
    setNumber(number);

    numberOne = undefined;
    setNumberOne(numberOne)

    numberTwo = undefined;
    setNumberTwo(numberTwo);

    oldNumber = undefined;
    setOldNumber(oldNumber);

    calculo = undefined;
    setCalculo(calculo);

    operador = undefined;
    setOperador(operador)
  }


  //***********************/

  return (

    <NativeBaseProvider>
      <Center w="80%">
        <Box safeArea p="2" w="90%" maxW="290" py="5">
          <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontSize="48" fontWeight="semibold">Calculadora</Heading>

          <VStack space={2} mt="5">
            <View style={{ flexDirection: "row", marginBottom: -20, height: 70, width: 335, borderRadius: 4, borderWidth: 1 }}>
              <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}>{number}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleInversa("1/X")} size="20" mt="5" colorScheme="gray"> 1/X </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleFactorial("!")} size="20" mt="5" colorScheme="gray"> ! </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleRaiz("√")} size="20" mt="5" colorScheme="gray"> √ </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>signOnPress("/")} size="20" mt="5" colorScheme="gray"> / </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("7")} size="20" mt="-1" colorScheme="blue"> 7 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("8")} size="20" mt="-1" colorScheme="blue"> 8 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("9")} size="20" mt="-1" colorScheme="blue"> 9 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>signOnPress("x")} size="20" mt="-1" colorScheme="gray"> x </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("4")} size="20" mt="-1" colorScheme="blue"> 4 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("5")} size="20" mt="-1" colorScheme="blue"> 5 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("6")} size="20" mt="-1" colorScheme="blue"> 6 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>signOnPress("-")} size="20" mt="-1" colorScheme="gray"> - </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("1")} size="20" mt="-1" colorScheme="blue"> 1 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("2")} size="20" mt="-1" colorScheme="blue"> 2 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("3")} size="20" mt="-1" colorScheme="blue"> 3 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>signOnPress("+")} size="20" mt="-1" colorScheme="gray"> + </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>resetOnPress("C")} size="20" mt="-1" colorScheme="gray"> C </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleNumber("0")} size="20" mt="-1" colorScheme="blue"> 0 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleOnPress(",")} size="20" mt="-1" colorScheme="gray"> , </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={()=>handleEquals("=")} size="20" mt="-1" colorScheme="gray"> = </Button>
              </View>
            </View>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}