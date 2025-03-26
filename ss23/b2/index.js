let arr=[];
for(let i=0;i<10;i++){
    arr[i]=+prompt("mời bạn nhập phần tử thứ" + i);
}
let count=0,max=arr[0],index=-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
for(let i=0;i<arr.length;i++){
    if(max==arr[i]){
        index=i;
    }
}
console.log("số lớn nhất: "+max);
if(index==-1){
    console.log("không có số lớn");
}else{
    console.log("vị trí: "+index);
}