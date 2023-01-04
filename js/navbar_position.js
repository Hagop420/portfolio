// Get the navbar element
const navbar = document.querySelector('.navbar-collapse');
const navbarLink = document.querySelectorAll('.nav-link');

// const collapseElements = document.querySelectorAll(".collapse:not(.show)");
// // Add a listener for the resize event
// window.addEventListener('load', () => {
//   // Check if the viewport is at least 992 pixels wide
//   // if (window.innerWidth >= 992) {
//   //   // Add the top and position styles to the navbar element
//   //   navbar.style.top = '0';
//   //   navbar.style.position = 'relative';
//   // }
// });





// var mx = window.matchMedia("(max-width: 992px)");
// var mq = window.matchMedia("(min-width: 992px)");

 
//     // screen width is less then 992px
// var navbarExpandElements = document.querySelectorAll(".navbar-expand-lg");
    

// document.body.addEventListener('mousemove', () => {
//   if (mx.matches) {
  
//     navbarLink.forEach(function (navbarExpandElement) {
//       //  navbarExpandElement.style.top = '0';
//       //   navbarExpandElement.style.position = 'relative';
//     });
//   } else {
//     navbarLink.forEach(function (navbarExpandElement) {
//       navbar.style.background = 'none'

//         navbar.style.top = '0';
//     navbar.style.position = 'relative';
 
//      });
//   }
//  })



    
    
  
  

 


// const nav_menu_items = document.querySelector('.fadeInText>h2');

// document.body.addEventListener('resize', () => {
//   if(window.matchMedia('(min-width: 992px)').matches){
//     document.body.style.display='none'
//   } else {
//     console.log(2);
//   }
// })


// setInterval(function() {
//   if (window.matchMedia('(min-width: 992px)').matches) {
//     console.log(87);
//        navbar.style.top = '0';
//    navbar.style.position = 'relative';
//   } else {
//     document.querySelector('.navbar-collapse').style.width = '95%';
// document.querySelector('.navbar-collapse').style.top = '50px';
// document.querySelector('.navbar-collapse').style.position = 'absolute';
// console.log(9);
//   }
// }, 30);

function checkMediaQuery() {
  if (window.matchMedia('(min-width: 992px)').matches) {
           navbar.style.top = '0';
   navbar.style.position = 'relative';
  } else {
       document.querySelector('.navbar-collapse').style.width = '95%';
document.querySelector('.navbar-collapse').style.top = '50px';
document.querySelector('.navbar-collapse').style.position = 'absolute';
  }
  setTimeout(function() {
    requestAnimationFrame(checkMediaQuery);
  }, 10); // execute every 1000 milliseconds (1 second)
}

// requestAnimationFrame(checkMediaQuery);



if (document.querySelector('.navbar-toggler-icon').style.display==='none') {
  // Navbar toggler icon element is present on the page
  console.log(88);
} else {
  // Navbar toggler icon element is not present on the page
  console.log(55);
}

  




// while (true) {
  // if (window.matchMedia('(min-width: 992px)').matches) {
  //   navbar.style.top = '0';
  //   navbar.style.position = 'relative';
  //   i++
  // }
// }


const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
  if (navbarCollapse.classList.contains('collapse')) {
    console.log(999);
  } else {
    console.log(8754);
  }
});
