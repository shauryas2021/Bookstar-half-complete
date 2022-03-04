function back(){
    window.location = "story_selection.html";
    }
    function read(){
        speak();
        document.getElementById("pause").style.visibility = "visible";
    }

    function speak(){
        var synth = window.speechSynthesis;
        speak_data = document.getElementById("textbox").value;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }
    function pause(){
     
    }