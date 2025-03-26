let test=+prompt("mời bạn nhập số lượng test case: ");
let arr=[],total=0,check=0;
if(test==0){
    console.log("mảng không có phần tử");
}else if(test<0){
    console.log("số lượng phần tử không được âm");
}else{
for(let i=0;i<test;i++){
    arr[i]=+prompt("mời bạn nhập giá trị: ");
    if(!isNaN(arr[i])){
        total+=arr[i];
        check=1;
    }
}
if(check==0){
    console.log("không có phần tử nào là số");
}else{
    console.log(total);
}
}
