

function start(){
        var greetings = document.getElementsByClassName("greetings")[0];
        greetings.style = "display : block"
        document.body.classList.remove("container");
       var foller = document.getElementById("foller")
       foller.removeAttribute('hidden');
       playAudios()

}

function playAudios() { 


        var btn = document.getElementById("btncl")
        var chuthich = document.getElementsByClassName("chuthich")[0]
        btn.style="display: none"
        chuthich.style="display: none"
        var x = document.getElementById("myAudio"); 
        x.play(); 

        x.addEventListener('ended', function() {
                window.location.href = '../index.html'; // Thay đổi 'new-page.html' thành trang bạn muốn chuyển đến
            });
}
