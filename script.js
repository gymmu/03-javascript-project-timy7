export  function aufgabe01 (args){
  const input = args
  const result = []

for (let i = 0; i < input.length; i++)
 {const currentElement = input[i]
   if (currentElement === "e")
    {
    result.push("")
   } 
   else if (currentElement === "E") {}
   else {
    result.push(currentElement)
   }
}
return result.join("")
}

 export function aufgabe02 (args){
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++)
   {const currentElement = input[i]
  result.push(currentElement.toUpperCase())
   }
return result.join("")
}

/* Alle e zählen*/

export function aufgabe03(args) {
  const input = args
  let count = 0
  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}


/*Zähle alle Wörter in einem Text*/

export function aufgabe04 (args){
  const input = args
  let count = 1
  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
   
    if (currentElement === " ") {
      count = count + 1
    }
  }
  return count
}


/*Schreibe eine Funktion, die testet, ob in einem Text mindestens ein
Grossbuchstabe vorkommt. Fragen: wie ich eine Grossbuchstabe definiere?*/

export function aufgabe05 (args){
  const input = args
  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
    if (currentElement === " ") {

    } else if (currentElement === ".") {

    } else if (currentElement.toUpperCase() === currentElement) {
      return true
    }
  }
  return false
}



export function aufgabe06 (args){
  const input = args
  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
    if (currentElement === ".") {
      return true
    }
  }
  return false
}

/*Schreibe eine Funktion, die testet, 
ob in einem Text das Wort 'und' vorkommt.*/

export function aufgabe07 (args){
  const input = args
  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
    
    if (currentElement === "u") {
      if (input[i+1] === "n")
      {
    if (input[i+2] === "d")
    return true
  }
}

  }
  return false
}

export function aufgabe08 (args){
  const input = args
  const result =  []
  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
    
    if (currentElement === "e") {
      result.push("3")
    } else {
     result.push(currentElement)
  }
}
  return result.join("")
}


/*Teste ob eine Eingabe genau sechs Zeichen lang ist.*/
export function aufgabe09 (args){
  const input = args
  
  if (input.length === 6) {
    return true
  } 

  return false
}


/*aufgabe 10
Teste ob eine Eingabe ein korrekter RGB Hexcode ist.*/

export function aufgabe10 (args){
  const input = args

  if (input.length !== 7) return false
   if (input[0] !== "#") return false

   for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (48 <= ascii && ascii <= 57){
      //ist eine Ziffer
    } else if (65 <= ascii && ascii <= 70){
      //ist a-f
    } else {
      return false 
     }
   }
  return true 
}

/*Gib den ASCII code eines einzelnen Buchstabens an.*/
export function aufgabe11 (args){
  const input = args
  const result = []

  if (input.length > 1) return null
  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    return ascii
}
return null
}

/*Suche die Position des ersten `e`s in einem Text.*/ 

export function aufgabe12 (args){
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]

    if (input[i] === "e"){
      return i
    }
  }
return -1
}

/*Suche die Position des letzten `e`s in einem Text.*/

export function aufgabe13 (args){
  const input = args
  let count = 0

  for (let i = input.length -1 ; i >=0 ; i--)  {
    const currentElement = input[i]

    if (input[i]  === "e"){
      return i 
    }
  }
return -1
}

/*Suche die Position des dritten `e`s in einem Text.*/

export function aufgabe14 (args){
  const input = args
  let count = 0
  let pos = -1
 
    for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
    if (currentElement === "e"){
      count++
      if (count === 3)
        return i
      }
  }
  return -1
}
/*Lesen Sie die Eingabe nur bis zum ersten Leerzeichen ein.
*/

export function aufgabe15 (args){
  const input = args
const result = [] /*leere Liste*/ 

  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
  
    if (currentElement === " "){
   return result.join("") 
  }
  result.push(currentElement) 
}
return result.join("")
}
/* es wird Zeichen für Zeichen überprüft 
ob es einen Leerschlag gibt, die Funktion bricht ab 
sobald es einen gibt und alle Ellemente die vor dem
Leerzeichen sind an der Liste angehängt   */



/* Aufgabe 16 Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und
den Rest als den zweiten Teil.*/

export function aufgabe16 (args){
  const input = args
  let switchFirstPart = true 
 const listFirst = []
const listSecond = []
  for (let i = 0 ; i < input.length ; i++)  {
    const currentElement = input[i]
if (currentElement === "$"){
  switchFirstPart = false
    } else {
      if (switchFirstPart === true) {
        listFirst.push(input[i])
      } else {
        listSecond.push(input[i])
      }
    }
  }
  const result = [listFirst.join(""), listSecond.join("")]
  return result 
}



/*Aufgabe 17

Lesen Sie die Eingabe als Liste ein, Einträge in der Liste werden von einem ','
getrennt.*/
export function aufgabe17 (args){
  const input = args
 const phrases = []
 let currentPhrase = []

  for (let i = input.length -1 ; i >=0 ; i--)  {

  }const currentElement = text[i]
  if (currentElement === ",") {
    // Wenn wir hier sind haben wir einen ',' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
    phrases.push(currentPhrase.join(""))
    currentPhrase = [] // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
  phases.push(currentPhrase.join(""))
  console.log(phrases)
}

export function bubbleSort (args) {
  const input = args
  const result = []
  
  return result.join("")
}



/*Aufgabe 18

Schreiben Sie folgende Ausgabe: Sie heissen `name` und sind `alter` Jahre alt,
wobei `name` und `alter` durch Eingaben eingesetzt werden.*/

export function aufgabe18 (args){
  const input = args
  let switchFirstPart = true 
 const listFirst = []
const listSecond = []
  for (let i = input.length -1 ; i >=0 ; i--)  {
    const currentElement = input[i]
if (currentElement === "$"){
  switchFirstPart = false
    } else {
      if (switchFirstPart === true) {
        listFirst.push(input[i])
      } else {
        listSecond.push(input[i])
      }
    }
  }
  //const result = 
}
