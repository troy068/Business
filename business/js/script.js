var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


//    $("#spec-b").mouseover(function(){
//            $("#spec-b-cover").css("left", "0");
//        });
//        
//         $("#spec-b").mouseout(function(){
//            $("#spec-b-cover").css("left", "100%");
//        });


function checkName () {
                var inputBox = document.getElementById("name");
                var input = inputBox.value;
                
                if (input.length >= 3 && !/\d/.test(input)) {
                    // Valid name.
                    inputBox.style.borderColor = "green";
                } else {
                    // Invalid name.
                    inputBox.style.borderColor = "red";
                }
                
            }

function checkPhone() {
    var inputBox = document.getElementById("phone");
    var input = inputBox.value;
    
    // Remove non-digit characters for validation
    var digits = input.replace(/\D/g, '');

    if (digits.length == 10) {
        // Format and set the formatted number to the input box
        var formattedNumber = digits.substring(0, 3) + ' ' + digits.substring(3, 6) + ' ' + digits.substring(6);
        inputBox.value = formattedNumber;

        // Valid phone.
        inputBox.style.borderColor = "green";
    } else {
        // Invalid phone.
        inputBox.style.borderColor = "red";
    }
}


    function isNumber (code) {
                if (code >= 48 && code <= 57) {
                    return true;
                } else {
                    return false;
                }
            }


  function selectRadio () {
                var radios = document.getElementsByName("product");
                var uniBox = document.getElementById("productid");
                
                if (radios[0].checked) {
                    // Yes, a student.
                    uniBox.style.display = "block";
                } else {
                    // No, not a student.
                    uniBox.style.display = "none";
                }
            }

function formatProductId() {
    var inputBox = document.getElementById("productid");
    var input = inputBox.value;
    
    // Extract the first three letters and convert to uppercase
    var letters = input.substring(0, 3).toUpperCase();
    
    // Remove all non-digit characters and then take the first four digits
    var digits = input.replace(/[^\d]/g, '').substring(0, 4);
    
    // Combine letters and digits with a dash
    var formatted = letters + (digits ? '-' + digits : '');
    inputBox.value = formatted;
}

document.getElementById("productid").onkeyup = formatProductId;


function checkMessage() {
    var messageTextbox = document.getElementById("message");
    var message = messageTextbox.value;

    if (message.length > 10 && message.length < 30) {
        // Valid message length.
        messageTextbox.style.border = "5px solid green";
    } else {
        // Invalid message length.
        messageTextbox.style.border = "5px solid red";
    }
}

