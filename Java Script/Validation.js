//function to validate form
function validation() {

    var name = document.forms['formMessage']['name'].value;
    var email = document.forms['formMessage']['email'].value;
    var message = document.forms['formMessage']['message'].value;

    if (name == ''||  email == ''||  message == '') {
        alert('Fill up the empty form');
    } else {
        alert('Thank You!! Your form has been submitted');
    }
}
