const str = "I love javascript";

function capitalizeFirstLetter() {
    return str.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
    
}


console.log(capitalizeFirstLetter(str));
