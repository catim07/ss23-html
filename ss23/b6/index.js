arr1=["",false,0,5,10,"hello wold!"];
arr2=["", false, 0, undefined, null];
arr3=[NaN, "test", 4];
arr4=["JavaScript", 0, null, true, 7, ""]
for(let i=arr1.length;i>=0;i--){
    if(!Boolean(arr1[i])){
        arr1.splice(i,1);
    }
}
for(let i=arr2.length;i>=0;i--){
    if(!Boolean(arr2[i])){
        arr2.splice(i,1);
    }
}
for(let i=arr3.length;i>=0;i--){
    if(!Boolean(arr3[i])){
        arr3.splice(i,1);
    }
}
for(let i=arr4.length;i>=0;i--){
    if(!Boolean(arr4[i])){
        arr4.splice(i,1);
    }
}
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);