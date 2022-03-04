function back(){
    window.location = "book_topic.html";
    }
    function registerForm(){
        donator_name = document.getElementById("donator_name").value;
            localStorage.setItem("donator_name", donator_name);
            country = document.getElementById("country").value;
            localStorage.setItem("country", country);
            donor_type = document.getElementById("donor_type").value;
            localStorage.setItem("donor_type", donor_type);
            area_code = document.getElementById("area_code").value;
            localStorage.setItem("area_code", area_code);
            phone_number = document.getElementById("phone_number").value;
            localStorage.setItem("phone_number", phone_number);
            email = document.getElementById("email").value;
            localStorage.setItem("email", email);
            window.location = "book_donation.html";
        }