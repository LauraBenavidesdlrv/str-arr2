function diff(arr1, arr2) {
    let storage = arr1.concat(arr2).filter(function (element){
      return !arr1.includes(element) || !arr2.includes(element)
    })
    console.log(storage)
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

