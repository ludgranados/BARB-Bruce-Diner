//Form

function validateEmailForm(){

    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var errDiv = document.getElementById('errors');
    var error = '';
    var focusElem;

    if(fname.value.length == 0){
        error += "First Name is required<br />";
        focusElem = fname;
    }

    if(lname.value.length == 0){
        error += "Last Name is required<br />";
        focusElem = lname;
    }

    if(email.value.length == 0){
        error += "Email is required<br />";
        if(focusElem == undefined){
            focusElem = email;
        }
    }

    if(error.length > 0){
        errDiv.innerHTML = error;
        focusElem.focus();
        return false;
    }
    return true;
}

