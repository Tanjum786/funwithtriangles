var inputs=document.querySelectorAll(".Angle-input");
var isTrianglebtn=document.querySelector("#is-triangle-btn");
var output=document.querySelector("#output");


function calculateSumofTriangle(angle1,angle2,angle3) {
    var sumOfTriangle=angle1+angle2+angle3;
    // console.log(sumOfTriangle);
     return sumOfTriangle;
}
 
function isTriangle(){
    if(Number(inputs[0].value)>0 && Number(inputs[1].value)>0 && Number(inputs[2].value)>0){
        var sumOfTriangle=calculateSumofTriangle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
        console.log(sumOfTriangle);
        if (sumOfTriangle===180) {
            output.innerText="yey,yey!,angle form the triangle";
            
        }
        else{
            output.innerText="oh,oh!, angle dont form the tringle";
        }
    }else{
        output.innerText="Invalid Angle";
    }
}

isTrianglebtn.addEventListener("click",isTriangle);