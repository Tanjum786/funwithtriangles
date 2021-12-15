var sideOfAngles=document.querySelectorAll(".side");
var sideBtn=document.querySelector("#side-btn");
var output4=document.querySelector("#output");


function calculatesumofsquare(base,hight){
    var a=base*hight;
    return a;

}

function calculateareaOftringle(){
    if(Number(sideOfAngles[0].value)>0 && Number(sideOfAngles[1].value)>0){
        var a= calculatesumofsquare(Number(sideOfAngles[0].value),Number(sideOfAngles[1].value));
        areaOftriangle=a/2;
        output4.innerText= "the area of triangle "+areaOftriangle+ " cm²";
    }else{
        output4.innerText="Invalid Angles side";
    }
};

sideBtn.addEventListener("click",calculateareaOftringle);
