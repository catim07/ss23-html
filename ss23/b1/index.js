let arr=[];
for(let i=0;i<10;i++){
    arr[i]=prompt("mời bạn nhập phần tử thứ" + i);
}
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>10){
        console.log(arr[i]);
        count++;
    }
}
if(count==0){
    console.log("không có số nào lớn hơn 10")
}