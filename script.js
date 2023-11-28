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
const result = []

  for (let i = 0; i < input.length; i++)  {
    const currentElement = input[i]
  
    if (currentElement === " "){
   return result.join("")
  }
  result.push(currentElement)
}
return result.join("")
}

