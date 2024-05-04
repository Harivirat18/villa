// clickable function

var close = document.getElementById("close");
var ham = document.getElementById("ham");
var mobile = document.getElementById("mobile");

// for bar button

ham.addEventListener("click", function () {
    if (mobile.style.display === "none" || mobile.style.display === "") {
        mobile.style.display = "block";
        ham.style.display = "none";
        close.style.display = "block";
    }
});

// for close button

close.addEventListener("click", function () {
    mobile.style.display = "none";
    close.style.display = "none";
    ham.style.display = "block";
});


// accordin section

var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var isActive = this.classList.contains("active");

        // Hide all panels
        for (var j = 0; j < panels.length; j++) {
            panels[j].style.display = "none";
            acc[j].classList.remove("active");
        }

        // Toggle active class for the clicked button
        if (!isActive) {
            this.classList.add("active");
            panel.style.display = "block";
        }
    });
}
