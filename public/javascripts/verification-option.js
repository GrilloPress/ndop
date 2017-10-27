//Please enter your personal details page ---------------------------------------------------------------------------------
//JQuery ------------------------------------------------------------------------------------------------------------------

//waits for the page to load
$(window).load(function() {
  $("#choose-option").click(confirmAll);
  localStorage.clear();
});

//JS ----------------------------------------------

//Sets research opt in preferences to session
function setVerOpt() {
  var verificationOption = $('input[name="channel-choice"]:checked').val();

  if (verificationOption == 'unrecognised') {
    localStorage.verificationOption = "unrecognised";
  } else if (verificationOption == 'email'){
    localStorage.verificationOption = "email";
  } else if (verificationOption == 'text') {
    localStorage.verificationOption = "text"
  } else {
    return;
  }

};

//takes user to correct page based on the settings they have set
function confirm() {

    var verificationOption = localStorage.verificationOption;

    if ((verificationOption == "email" || verificationOption == "text")) {
      window.location.href = 'http://ndop.herokuapp.com/app/prototypes/prototype-d/enter-your-code.html';
    } else if ( verificationOption == 'unrecognised' ) {
      window.location.href = '/F/app/03X-contact-us.html';
    } else {
      $('.form-row').addClass("form-row-error-active");
      $( '.error-message' ).addClass( 'error-message-active' );
      $( ".alert-success" ).hide();
      $(" .error-summary ").addClass(" error-message-active ").focus();
      $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    }

};

function confirmAll() {
  setVerOpt();
  confirm();
}
