// convertir una cadena en una cadena cuyas palabras estan en minúscula separada por guiones (spinal case)
function spinalCase(str){
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");//pone un espacio antes de cualquier carácter en mayúscula encontrado en la cadena str
    //especificar todos los guienes bajos y espacios en el string
    let toChange = /_+|\s+/g;
    //Para reemplazar lo que no quiero por -
    let result = str.replace(toChange, "-").toLowerCase()
    console.log(result)
}

spinalCase("Mi nombre_es Laura Benavides");