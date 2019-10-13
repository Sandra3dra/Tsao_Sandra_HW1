(() => {
    // test fired
    console.log('fired!');

    // window.addEventListener('scroll', function() {
    //     var pagePosition = pageYOffset + "px";
    //     console.log(pagePosition);
    // });
    var windowPosition = pageYOffset;
    var pagePosition = pageYOffset + "px";
    window.addEventListener('wheel', function() {
        console.log(pagePosition);
    });
})()