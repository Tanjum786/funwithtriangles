var sideInput=document.querySelectorAll(".side-input");
var hypotenouseBtn=document.querySelector("#hypotenuse-btn");
var output2=document.querySelector("#output");


function calculatesumofsquare(a,b){
    var sumOfSquare=a*a+b*b;
    return sumOfSquare;

}

function calculateHypotenouse(){
    var sumOfSquare= calculatesumofsquare(Number(sideInput[0].value),Number(sideInput[1].value))
    lengthOfhypotenouse=Math.sqrt(sumOfSquare);
    output2.innerText= "the length of Hypotenouse "+lengthOfhypotenouse
};

hypotenouseBtn.addEventListener("click",calculateHypotenouse);