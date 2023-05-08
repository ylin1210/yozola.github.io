/*0315-2*/

function myfunctionA(){
    var A = document.getElementById("DivA");
    var a = document.getElementById("chA");
    var b = document.getElementById("chB");
    var back = document.getElementById("Back");
    var back2 = document.getElementById("Back-2");
    var next = document.getElementById("next");
    var title = document.getElementById("title-1")
    if (A.style.display === "none" ) {
        A.style.display = "block";
        back.style.display = "block";
        back2.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        title.style.display = "none";
        next.style.display = "none";
    }else{
        A.style.display = "none";
    }
}
function myfunctionB(){
    var B = document.getElementById("DivB");
    var a = document.getElementById("chA");
    var b = document.getElementById("chB");
    var back = document.getElementById("Back");
    var back2 = document.getElementById("Back-2");
    var next = document.getElementById("next");
    var title = document.getElementById("title-1")
    if (B.style.display === "none"){
        B.style.display = "block";
        back.style.display = "block";
        back2.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        title.style.display = "none";
        next.style.display = "none";
    }else{
        B.style.display = "none";
    }
}
function Back(){
    var A = document.getElementById("DivA");
    var B = document.getElementById("DivB");
    var back = document.getElementById("Back");
    var back2 = document.getElementById("Back-2");
    var title = document.getElementById("title-1")
    var a = document.getElementById("chA");
    var b = document.getElementById("chB");
    if (a.style.display === "none" ||  b.style.display === "none"){
        a.style.display = "inline-block";
        b.style.display = "inline-block";
        title.style.display = "block";
        A.style.display = "none";
        B.style.display = "none";
        back.style.display = "none";
        back2.style.display = "none";
        next.style.display = "block";
    }
}