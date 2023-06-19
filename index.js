var a = document.querySelectorAll('a');
var p = document.querySelectorAll('p');

a.forEach(element => {
    element.addEventListener("click", function(){
        var className = this.classList[0];

        if (this.classList.contains("selected-a")) {
            this.classList.remove("selected-a");      
            p.forEach(item => {
                if (item.classList.contains(className)){
                    item.classList.add("hidden-p");
                }
            });
            return;
        }

        a.forEach(item => {
            item.classList.remove("selected-a");
        });
        this.classList.add("selected-a");

        p.forEach(item => {
            item.classList.add("hidden-p");
            if (item.classList.contains(className)){
                item.classList.remove("hidden-p");
            }
        });
    })
});