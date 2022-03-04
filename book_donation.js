function back(){
    alert("Sorry, but changes will not be saved!");
    window.location = "book_topic.html";
    }
    donor_type = localStorage.getItem("donor_type");
   document.getElementById("donor_type").innerHTML = "Donor Type : " + donor_type;
   country = localStorage.getItem("country");
   document.getElementById("country").innerHTML = "Location : " + country;
   name = localStorage.getItem("donator_name");
   document.getElementById("name").innerHTML = "Donator Name : " + name;
   phone_number = localStorage.getItem("phone_number");
  area_code = localStorage.getItem("area_code");
   document.getElementById("phone_number").innerHTML = "Phone Number : " + area_code +  phone_number;
  email = localStorage.getItem("email");
   document.getElementById("email").innerHTML = "Email Id : " + email;
   function submitBook(){
       localStorage.setItem = document.getElementById("book_name").value;
   }