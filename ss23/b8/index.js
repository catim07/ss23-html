let test =+prompt("mời bạn nhập số test case: ");
let arr=[];
let a=0,b=1;
if(test==0){
    console.log("không phải số fibonaci")
}else if(test<0){
    console.log("số lượng phầ tử không đc nhỏ hơn 0");
}else{
    for(let i=0;i<test;i++){
        arr[i]=+prompt(` mời bạn nhập phần tử thứ ${i+1}: `);
    }
    let result=0,dem=0
    var dung=0;
    while(dem<test){
        if(arr[dem]!=a){
            console.log("không phải dãy số fibonaci");
            dung=1;
            break;
        }
        result=a+b;
        a=b;
        b=result;
        dem++;
    }
    if(dung==0){
        console.log("Là dãy số fibonacci");
    }
}