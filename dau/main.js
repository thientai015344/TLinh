

function start(){
        document.body.classList.remove("container");
       var foller = document.getElementById("foller")
       foller.removeAttribute('hidden');
       playAudios()

}

function playAudios() { 


        var btn = document.getElementById("btncl")
        btn.style="display: none"
        var x = document.getElementById("myAudio"); 
        x.play(); 

        x.addEventListener('ended', function() {
                window.location.href = '../index.html'; // Thay đổi 'new-page.html' thành trang bạn muốn chuyển đến
            });
}
