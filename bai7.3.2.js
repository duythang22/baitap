function doanso(){
    const ran = Math.floor(Math.random() * 11);
    let number;
    number = parseInt(prompt("Hãy đoán số từ 0 đến 10"));
    while(number < 0 || number > 10){
        number = parseInt(prompt("Số nhập vào không hợp lệ, hãy nhập lại số"));
    }
    while(number >= 0 && number <= 10){
        while(ran !== number){
            number = parseInt(prompt("Bạn đã đoán sai, hãy nhập lại"));
            while(number < 0 || number > 10){
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