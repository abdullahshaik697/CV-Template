
var temp_1 = document.getElementById("temp1")
var temp_2 = document.getElementById("temp2")

var nameInput = document.getElementById("name")
var fNameInput = document.getElementById("fName")
var dobInput = document.getElementById("dob")
var cityInput = document.getElementById("city")
var contactInput = document.getElementById("contact")
var emailInput = document.getElementById("email")
var skillInput = document.getElementById("skill")
var interestInput = document.getElementById("interest")
var educationInput = document.getElementById("education")
var certificateInput = document.getElementById("certificate")

function validate(){
    if(nameInput.value==""||fNameInput.value==""||dobInput.value==""||cityInput.value==""||
        contactInput.value==""||emailInput.value==""||skillInput.value==""||interestInput.value==""||educationInput.value==""||certificateInput.value=="")
    {return false;}
    else{return true;}
}

function temp1(){
    if(validate()==false){
        alert("Please Enter Correct Value");
        document.getElementById("temp1").style.display = 'none'
        document.getElementById("temp2").style.display = 'none'
    }
    else{
        
        
         document.getElementById("temp2").style.display = 'none'
         document.getElementById("temp1").style.display = 'block'
         document.getElementById("name1").innerText="Name : "               + nameInput.value;
         document.getElementById("fName1").innerText="Father Name : "       + fNameInput.value;
         document.getElementById("dob1").innerText="Date of Birth : "        + dobInput.value;
         document.getElementById("city1").innerText="City : "               + cityInput.value;
         document.getElementById("contact1").innerText="Contact : "         + contactInput.value;
         document.getElementById("email1").innerText="Email : "             + emailInput.value;
         document.getElementById("skill1").innerText="Skill : "             + skillInput.value;
         document.getElementById("interest1").innerText="Interest : "       + interestInput.value;
         document.getElementById("education1").innerText="Education : "     + educationInput.value;
         document.getElementById("certificate1").innerText="Certificate : " + certificateInput.value;

    }
}
function temp2(){
    if(validate()==false){
        alert("Please Enter Correct Value");
        document.getElementById("temp2").style.display = 'none'
        document.getElementById("temp1").style.display = 'none'
    }
    else{
        
        document.getElementById("temp1").style.display = 'none'
         document.getElementById("temp2").style.display = 'block'
         document.getElementById("name2").innerText="Name : "               + nameInput.value;
         document.getElementById("fName2").innerText="Father Name : "       + fNameInput.value;
         document.getElementById("dob2").innerText="Date of Birth : "     + dobInput.value;
         document.getElementById("city2").innerText="City : "               + cityInput.value;
         document.getElementById("contact2").innerText="Contact : "         + contactInput.value;
         document.getElementById("email2").innerText="Email : "             + emailInput.value;
         document.getElementById("skill2").innerText="Skill : "             + skillInput.value;
         document.getElementById("interest2").innerText="Interest : "       + interestInput.value;
         document.getElementById("education2").innerText="Education : "     + educationInput.value;
         document.getElementById("certificate2").innerText="Certificate : " + certificateInput.value;


    }
}
