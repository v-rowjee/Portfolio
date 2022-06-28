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


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#00adb5"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 30,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 160,
      "color": "#aaaaaa",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 160,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 130,
        "duration": 0.3
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);