function indexSumToTarget(Array,target){

    const map = new Map();
    for(let i=0;i<Array.length;i++){
        const complement  = target-Array[i];
        if(map.has(complement)){
            return [map.get(complement),i];
        }
        map.set(Array[i],i);
    }
    return [];  
}

console.log(indexSumToTarget([]))