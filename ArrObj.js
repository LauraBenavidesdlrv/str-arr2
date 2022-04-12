function coincidencias (arreglo, objeto){
    const objetoProperties = Object.keys(objeto)//arreglo con las propiedades enumerables de objeto
    let result = arreglo.filter(objArreglo =>{ //arreglo de objetos que cumplan con lo del for
        for(let i = 0; i < objetoProperties.length; i++){
            if (!objArreglo.hasOwnProperty(objetoProperties[i]) || //si los objetos de arreglo no contienen el elemento i de objetoproperties o si los  
                objArreglo[objetoProperties[i]] !== objeto[objetoProperties[i]]) {
                return false;
            }
        }
        return true;
        
    })
    console.log(result)

  
}
// test here
coincidencias([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })

