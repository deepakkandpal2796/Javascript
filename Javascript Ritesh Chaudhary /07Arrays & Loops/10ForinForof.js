const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];
// we use const variable inside loop because it value will not change ..... technically the value dosen't change but the memory location changes....
for( const n of names){
    console.log(n);
    //this will print all value...we use in frameworks of javascript 
}

const symbols = {
    yt: "youtube",
    fb: "Facebook",
    ig: "Instagram",
    dd: "Dr.dev",
}


//for in is used for objects & for of is used for arrays,
for( const n in symbols){
    console.log(n);  //it will give us the keys not the values...
    console.log(symbols[n]);  //it will give us the values...

}

// good way to write
for( const n in symbols){
    console.log(`Key is: ${n} and value is ${symbols[n]}`);  
}