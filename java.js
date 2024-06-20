function send(){

    var name = document.getElementById("Name").value;
    var Course = document.getElementById("Course").value;
    var DOB = document.getElementById("DOB").value;
    var Number = document.getElementById("Phone").value;
    var message = document.getElementById("message").value;
    
    var body = "Name :" + name +"<br/> Course :" + Course + "<br/>DOB :" + DOB +
    "<br/> Number :" + Number + " <br/> message :" + message;



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rlavish022@gmail.com",
        Password : "BB1EAA2697DFD3C7F0B3FDE15D49310E288C",
        To : 'rlavish022@gmail.com',
        From : "rlavish022@gmail.com",
        Subject : "Application Form For Student",
        Body : body
    }).then(
      message => {
        if(message=='OK'){
            swal("Successfull", "Your Data Success fully", "success");
   }
   else{

                swal("Something Wrong", "Your Data Not recived", "error");
       }


      }
    );
}