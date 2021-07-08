// var a = 0;
// $(window).scroll(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $('.counter-value').each(function() {
//       var $this = number_format(this),
//         countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text()
//       }).animate({
//         countNum: countTo
//       }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function() {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function() {
//           $this.text(this.countNum);
//         }
//       });
//     });
//     a = 1;
//   }
// });

// function number_format(number) {
//   var num = number.toLocaleString('en-US', {
//     maximumFractionDigits: 0
//   })
//   return num;
// }

// var a = 0;
// $(window).ready(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $('.counter-value').each(function() {
//       var $this = $(this),
//         countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text()
//       }).animate({
//         countNum: countTo
//       }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function() {
//           $this.text(number_format(this.countNum));
//         },
//         complete: function() {
//           $this.text(number_format(this.countNum));
//         }
//       });
//     });
//     a = 1;

//   }
// });

function startCounter() {
    const maxCounter = $('.money').data('counter');
    $({
      Counter: 0
    }).animate({
      Counter: maxCounter
    }, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $('.money').text(Math.ceil(this.Counter));
      }
    });
  }
  
  $('#bond-data').on('mouseenter', startCounter);

  function startCounter2(){
    const maxCounter2 = $('.passed').data('counter');
    $({
      Counter: 0
    }).animate({
      Counter: maxCounter2
    }, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $('.passed').text(Math.ceil(this.Counter));
      }
    });
  }
  
  $('#bond-data').on('mouseenter', startCounter2);
  
  function startCounter3(){
    const maxCounter3 = $('.categories').data('counter');
    $({
      Counter: 0
    }).animate({
      Counter: maxCounter3
    }, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $('.categories').text(Math.ceil(this.Counter));
      }
    });
  }
  
  $('#bond-data').on('mouseenter', startCounter3);
  