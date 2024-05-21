document.addEventListener('DOMContentLoaded', function() {
    var coll = document.querySelectorAll(".collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            content.style.display = (content.style.display === "none") ? "flex" : "none";
        });
    }
});