let count = 0;
const resultH1 = document.getElementsByTagName("h1")[0];
const plusButton = document.getElementsByTagName("button")[0];
const minusButton = document.getElementsByTagName("button")[1];
const doubleButton = document.getElementsByTagName("button")[2];


plusButton.addEventListener("click",()=>{
    count++;
    resultH1.innerText = count;
});

minusButton.addEventListener("click",()=>{
    count--;
    resultH1.innerText = count;
});

doubleButton.addEventListener("click",()=>{
    count += 2;
    resultH1.innerText = count;
});
// // function 처리함수(){
// //     count++;
// //     resultH1.innerText = count;
// // }ngra
