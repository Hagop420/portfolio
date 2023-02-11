<<<<<<< HEAD
// $(function () {
//    $('[data-toggle="tooltip"]').tooltip({
//      trigger: 'manual',
//      placement: 'auto',
//      container: 'body',
//      html: true
//    }).on('mouseenter', function () {
//      var self = this;
//      $(this).tooltip('show');
//      $('.tooltip').on('mouseleave', function () {
//        $(self).tooltip('hide');
//      });
//    }).on('mouseleave', function () {
//      var self = this;
//      setTimeout(function () {
//        if (!$('.tooltip:hover').length) {
//          $(self).tooltip('hide');
//        }
//      }, 300);
//    });
//  });




function myFunction(e) {
   var x = e.clientX;
   var y = e.clientY;
   document.getElementById("tooltip").style.left = x + "px";
document.getElementById("tooltip").style.top = y + "px";
}
 
=======
$(function () {
   $('[data-toggle="tooltip"]').tooltip()
})
>>>>>>> e3b30994d5dafae2ffb3ad1affa425c40b0c634e
