document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId);

    // Validate that all variables exist
    if (toggle && nav && bodypd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show-nav");
        // change icon
        $("#header-toggle").toggleClass("bx-menu-alt-left bx-left-arrow-alt");
        // add padding to body
        bodypd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd");
});

// TagCanvas
$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas({
      textColour: "teal",
      outlineColour: "transparent",
      maxSpeed: 0.03,
      depth: 0.5,
      decel: 1,
      shuffleTags: true,
      wheelZoom: false,
      noSelect: true,
      textHeight: 10,
      weight : true,
      initial: [0.1, -0.3],
    })
  ) {
    // TagCanvas failed to load
    $("#myCanvasContainer").hide();
  }
});
$("#myCanvas").tagcanvas(
  {
    depth: 0.5,
  },
  "tagList"
);

setSaxxMouseEffect(".saxx-text", "saxx rubberBand", "#f5f5f5", "var(--primary)");

function playSound(){
  let audio = new Audio('../audio/pop.mp3');
  audio.play();
}
$(document).ready(function () {
  playSound();
});

$('#phone').click(function(){
  playSound();
  Snackbar.show({
    text: 'Phone: 5-974-9958',
    pos: 'top-right',
    backgroundColor: 'teal',
    actionText: '<i class="bx bx-link-external"></i>',
    actionTextColor: 'white',
    onActionClick: function(element) {
      $(element).css('opacity', 0);
      window.open('tel: 59749958', '_self');
    }
  });
})
$('#email').click(function(){
  playSound();
  Snackbar.show({
    text: 'Email: vedrowjee2001@gmail.com',
    pos: 'top-right',
    backgroundColor: 'teal',
    actionText: '<i class="bx bx-link-external"></i>',
    actionTextColor: 'white',
    onActionClick: function(element) {
      $(element).css('opacity', 0);
      window.open('mailto:vedrowjee2001@gmail.com', '_self');
    }
  });
})
$('#linkedin').click(function(){
  playSound();
  Snackbar.show({
    text: 'LinkedIn: linkedin.com/in/ved-rowjee/',
    pos: 'top-right',
    backgroundColor: 'teal',
    actionText: '<i class="bx bx-link-external"></i>',
    actionTextColor: 'white',
    onActionClick: function(element) {
      $(element).css('opacity', 0);
      window.open('https://www.linkedin.com/in/ved-rowjee', '_blank');
    }
  });
})
$('#github').click(function(){
  playSound();
  Snackbar.show({
    text: 'Github: github.com/v-rowjee',
    pos: 'top-right',
    backgroundColor: 'teal',
    actionText: '<i class="bx bx-link-external"></i>',
    actionTextColor: 'white',
    onActionClick: function(element) {
      $(element).css('opacity', 0);
      window.open('https://github.com/v-rowjee', '_blank');
    }
  });
})