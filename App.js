import { Text, View } from "react-native";
import { useState } from "react";
import {Center, Box, Heading, VStack, NativeBaseProvider, Button,} from "native-base";

export default function App() {
  let [number, setNumber] = useState("");
  let [numero01, setNumero01] = useState("");
  let [numero02, setNumero02] = useState("");
  let [calculo, setCalculo] = useState(0);
  let [operador, setOperador] = useState();

  // A IMPLEMENTAR POR EL ALUMNO //


  function handleEquals() {
    if(operador == "+"){
      let num1 = parseFloat(numero01);
      let num2 = parseFloat(numero02);

      let calculo = num1 + num2
      setNumber(calculo);

    }

    else if(operador == "-"){
      let num1 = parseFloat(numero01);
      let num2 = parseFloat(numero02);

      let calculo = num1 - num2
      setNumber(calculo);
    }
    else if(operador == "x"){
      let num1 = parseFloat(numero01);
      let num2 = parseFloat(numero02);

      let calculo = num1 * num2
      setNumber(calculo);
    }
    else if(operador == "/"){
      let num1 = parseFloat(numero01);
      let num2 = parseFloat(numero02);

      let calculo = num1 / num2
      setNumber(calculo);
    }

    else{
      setNumber(calculo);
    }
  
  }


  function handleNumber(e) {

    let numeros1 = ""
    let numeros2 = ""

    if(e == "+"){
        sumar(number);
    }
    else if(e == "-"){
      restar(number)
    }
    else if(e == "x"){
      multiplicar(number)
    }
    else if(e == "/"){
      dividir(number)

    }


    if(operador == undefined){
      numeros1 = numeros1 += e
      number += numeros1

      setNumero01(number)
      setNumber(number)
    }

    else if((operador != undefined) && (e != "+") && (e != "-") && (e != "x") && (e != "/")){
      numeros2 = numeros2 += e
      number += numeros2

      setNumero02(number)
      setNumber(number)
    }
    
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

      operador = "+"
      setOperador(operador)
  
      number = "";
      setNumber(number)
    }



  function restar(){
       

    operador = "-"
    setOperador(operador)

    number = "";
    setNumber(number)

  }

    function multiplicar(){

      operador = "x"
      setOperador(operador)
  
      number = "";
      setNumber(number)

  }

    function dividir(){
  

      operador = "/"
      setOperador(operador)
  
      number = "";
      setNumber(number)

  }

  function resetOnPress() {
    number = "";
    setNumber(number);

    calculo = 0;
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
                <Button onPress={()=>handleNumber("/")} size="20" mt="5" colorScheme="gray"> / </Button>
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
                <Button onPress={()=>handleNumber("x")} size="20" mt="-1" colorScheme="gray"> x </Button>
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
                <Button onPress={()=>handleNumber("-")} size="20" mt="-1" colorScheme="gray"> - </Button>
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
                <Button onPress={()=>handleNumber("+")} size="20" mt="-1" colorScheme="gray"> + </Button>
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
                <Button onPress={()=>handleNumber(".")} size="20" mt="-1" colorScheme="gray"> , </Button>
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