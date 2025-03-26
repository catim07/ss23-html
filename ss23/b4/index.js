let test=prompt("mời bạn nhập test: ");
let arr=[],check=0,num="";
for(let i=0;i<test;i++){
    arr[i]=prompt(` mời bạn nhập phần tử thứ ${i+1}:`)
    if(!isNaN(arr[i])){
        check=1;
        num+=arr[i]+" ";

    }
}
if(check==0){
    console.log("không có ký tự số");
}else{
    console.log(num);
}