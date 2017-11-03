// on load check if sessionStorage preferences exist
// if they do, add a class to each one where the user has opted out
//
// on toggle of the toggle button
// either add or remove a class per question
// opted-out etc.

// on save
// 



//Sets research opt in preferences to session
function setResearchPref() {
  var researchPref = $('input[name="research-pref"]:checked').val();

  if (researchPref == 'research-opted-out') {
    sessionStorage.researchPref = "false";
  } else if( researchPref == 'research-opted-in' ) {
    sessionStorage.researchPref = "true";
  } else {
    sessionStorage.researchPref = "";
    return false;
  }

};

//sets planning opt in preferences to session
function setPlanningPref() {
  var planningPref = $('switch-material--reversed.switch-material.switch-light.planningPref input:checked').val();

  if (planningPref == 'planning-opted-out') {
    sessionStorage.planningPref = "false";
  } else if (planningPref == 'planning-opted-in') {
    sessionStorage.planningPref = "true";
  } else {
    sessionStorage.planningPref = "";
    return false;
  }
};

//takes user to correct page based on the settings they have set
function confirm() {
  var researchPref = sessionStorage.researchPref;
  var planningPref = sessionStorage.planningPref;

  // add a flash message of preferences saved?
  // Or go to next page?

    $('html,body').animate({scrollTop: $('#content').offset().top -100});
    return;
};

function confirmAll() {
  setResearchPref();
  setPlanningPref();
  confirm();
}
