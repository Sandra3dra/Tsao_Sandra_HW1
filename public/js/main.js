(() => {
    // test fired
    console.log('fired!');

    var galleries = document.querySelectorAll(".galleries");

    galleries.forEach(gallery => {
        gallery.addEventListener("click", function() {
                // var h5 = document.getElementById("h5");
                // h5.classList.add("hidden");
                let newImg = `<img class="gallery-image" src="images/${"g" + this.id}.jpg" alt="image gallery">`;
                var showHere = document.getElementById("showHere");
                showHere.innerHTML = "";
                showHere.innerHTML += newImg;
            console.log("you are browsing images from gallery!");
        });
    });
    
})()