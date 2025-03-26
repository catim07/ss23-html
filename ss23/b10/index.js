let check = 1, count = 0, arr = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng và vị trí của chúng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập một số và đếm số lần xuất hiện trong mảng 
        7. Thêm một phần từ vào vị trí chỉ định
        8. Xóa một phần tử theo giá trị 
        9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 
        0. Thoát
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let dem = +prompt("mời bạn nhập số phần tử: ");
            for (let i = 0; i < dem; i++) {
                let value = +prompt(`mời bạn nhập phần tử thứ ${i + 1}: `);
                arr.push(value);
                count = 1;
            }
            break;
        case 2:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                alert(arr);
            }
            break;
        case 3:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                let arrchan=[];
                let sum = 0;
                arr.sort((a,b)=>b-a);
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 == 0) {
                        arrchan.push(arr[i]);
                        sum += arr[i];
                    }
                }
                alert(arrchan);
                alert("Tổng các phần tử chẵn là: " + sum);
            }
            break;
        case 4:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                arr.sort((a, b) => a - b);
                alert(` 
                    số nhỏ nhất: ${arr[0]}
                    số lớn nhất: ${arr[arr.length - 1]}
                    vị trí số nhỏ là: 0
                    vị trí lớn nhất là ${arr.length-1}`);
            }
            break;
        case 5:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let primeNumbers = [];
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    let isPrime = true;
                    if (arr[i] < 2) {
                        isPrime = false;
                    } else {
                        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                            if (arr[i] % j === 0) {
                                isPrime = false;
                                break;
                            }
                        }
                    }
                    if (isPrime) {
                        primeNumbers.push(arr[i]);
                        sum += arr[i];
                    }
                }
                alert("Các phần tử là số nguyên tố: " + primeNumbers);
                alert("Tổng các số nguyên tố là: " + sum);
            }
            break;
        case 6:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let dem=0;
                let num=prompt("mời bạn nhập số: ");
                for(let i=0;i<arr.length;i++){
                    if(num==arr[i]){
                        dem++;
                    }
                }
                if(dem==0){
                    alert("không có số bạn nhập trong mảng");
                }else{
                    alert(` số bạn nhập có ${dem} phần tử`)
                }
            }
            break;
        case 7:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let index=+prompt("mời bạn nhập vị trí: ");
                    let value=prompt("mời bạn nhập giá trị: ");
                    arr.splice(index,0,value);
            }
            break;
        case 8:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let check=0;
                let index=prompt("mời bạn giá trị: ");
                for(let i=0;i<arr.length;i++){
                    if(index==arr[i]){
                        arr.splice(i,1);
                        alert("đã xóa thành công");
                        check=1;
                    }
                }
                if(check==0){
                    alert("không có phần tử bạn nhập trong mảng để xóa");
                }
            }
            break;
            case 9:
                if (count == 0) {
                    console.log("Chưa có phần tử trong mảng");
                } else {
                    let bo=0,select;
                    do{
                        let select = +prompt(`
                            ======= MENU =====
                            1. Tăng dần
                            2. giảm dần
                            3. thoát
                            ==================
                            Lựa chọn của bạn: `);
                            switch(select){
                                case 1:
                                    arr.sort((a,b)=>a-b);
                                    alert(arr);
                                    break;
                                    case 2:
                                    arr.sort((a,b)=>b-a);
                                    alert(arr);
                                    break;
                                    case 3:
                                    bo=1;
                                    break;
                            }
                    }while(bo==0);
                }
                break;
        case 0:
            check = 0;
            break
        default:
            alert("số không hợp lệ");
            break;
    }

} while (check != 0);

