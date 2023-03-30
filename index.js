var anch = document.querySelectorAll("section a");
var para = document.querySelectorAll("section p");
var imag = document.querySelectorAll("section img");
var box = document.querySelector("#box");

for (var i=0; i<5; i++) {
    anch[i].addEventListener("click", function() {
        var cnum = this.classList[0];
        box.classList.add('left');
        for (var j=0; j<5; j++) {
            var bool = para[j].classList.contains(cnum);
            if (bool == true) {
                para[j].classList.remove('hidden');
                imag[j].classList.add('transform');
                anch[j].classList.add('dark');
            } else {
                para[j].classList.add('hidden');
                imag[j].classList.remove('transform');
                anch[j].classList.remove('dark');
        }};
    });
};


