

// client-slider-one
if (document.getElementsByClassName('client-slider-one')[0] != undefined) {
var slider = tns({
    container: '.client-slider-one',
    loop: true,
    navPosition: "bottom",
    controls: false,
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {        
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
          },
          700: {
            gutter: 30
          },
          900: {
            items: 1
          }
    }
});
}
