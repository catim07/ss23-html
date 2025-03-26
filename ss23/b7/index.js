let test=+prompt("mời bạn nhập số test case: ");
let arr=[];
if(test==0){
    console.log("mảng ko có phần tử nào");
}else if(test<0){
    console.log("Số lượng phần tử không được nhỏ hơn 0");
}else{
    for(let i=0;i<test;i++){
        arr[i]=+prompt(` mời bạn nhập phần tử ${i+1} là: `);
    }
    arr.sort((a, b) => a - b);
    console.log(`số lớn thứ hai trong mảng là: ${arr[arr.length-2]}`);
}