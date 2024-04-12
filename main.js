onload = () =>{
        document.body.classList.remove("container");
};


function playAudios() { 
        var btn = document.getElementById("btncl")
        btn.style="display: none"
        var x = document.getElementById("myAudio"); 
        x.play(); 
}
