function remove (arr){
    var toRemove = Array.from(arguments).slice(1);
    console.log(arr.filter(function(element){return !toRemove.includes(element)})) 

}
remove([1,2,3,4],5,6,7,1)