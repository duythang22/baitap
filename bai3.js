function Haydoanho() {
    let randomNumber = Math.floor(Math.random() * 2);
    let x;
    while (x != randomNumber) {
        x = prompt("Đoán số (0 hoặc 1):");
        x = parseInt(x);
        if (x === randomNumber) {
            alert("Congratulation!");
        } else {
            alert("Wrong.");
        }
    }
}