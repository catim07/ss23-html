let count=prompt("mời bạn nhập số test case: ");
if(count<0){
    console.log("số lượng phần tử ko hợp lệ");
}else if(count==0){
    console.log("mảng ko có phần tử");
}else{
let arr=[];
for(let i=0;i<count;i++){
    arr[i]=+prompt(` mời bạn nhập giá trị thứ ${i+1}: `);
}
let am=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        am++;
    }
}
if(am==0){
    console.log("mảng ko có số âm")
}else{
    console.log(` mảng có ${am} số âm`)
}
}