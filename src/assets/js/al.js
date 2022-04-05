

(function($) {

  showSwal = function(al) {

  'use strict';
  if (al==true) {

  swal({
  title: 'Congratulations!',
  text: 'You entered the correct answer',
  type: 'success',
  button: {
  text: "Continue",
  value: true,
  visible: true,
  className: "btn btn-primary"
  }
  })

  }else{
  swal("Error occured !");
  }
  }

  })(jQuery);

