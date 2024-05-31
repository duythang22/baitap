function doanso(){
    const ran = Math.floor(Math.random() * 2);
    let number;
    number = parseInt(prompt("Hãy đoán số 0 hoặc 1"));
    while(number !== 0 && number !== 1){
        number = parseInt(prompt("Số nhập vào không hợp lệ, hãy nhập lại số"));
    }
    while(number === 0 || number === 1){
        while(ran !== number){
            number = parseInt(prompt("Bạn đã đoán sai, hãy nhập lại"));
            while(number !== 0 && number !== 1){
                number = parseInt(prompt("Số nhập vào không hợp lệ, hãy nhập lại số"));
            }
        }
        if(ran === number){
            alert("Bạn đã đoán đúng")
            break;
        }
    }
}
doanso();