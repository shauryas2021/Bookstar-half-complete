function logout(){
    localStorage.removeItem("user_name");
    window.location = "book.html";
}
function storyOpen(){
    window.location = "story_selection.html";
}
function comicOpen(){
    window.location = "comic_selection.html";
}
function histOpen(){
    window.location = "history_selection.html";
}
function encyOpen(){
    window.location = "encyclopedia_selection.html";
}
user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function donOpen(){
        window.location = "donate.html";
    }