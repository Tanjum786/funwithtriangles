var inputs=document.querySelectorAll(".Angle-input");
var isTrianglebtn=document.querySelector("#is-triangle-btn");
var output=document.querySelector("#output");


function calculateSumofTriangle(angle1,angle2,angle3) {
    var sumOfTriangle=angle1+angle2+angle3
    // console.log(sumOfTriangle);
     return sumOfTriangle
}
 
function isTriangle(){
    var sumOfTriangle=calculateSumofTriangle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    console.log(sumOfTriangle);
    if (sumOfTriangle===180) {
        output.innerText="yey,yey!,angle form the triangle"
        
    }
    else{
        output.innerText="oh,oh!, angle dont form the tringle"
    }
}

isTrianglebtn.addEventListener("click",isTriangle)