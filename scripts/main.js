//build tabs
function openPage(evt, pageTitle) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(pageTitle).style.display = "block";
    evt.currentTarget.className += " active";
}

//selects default tab
document.getElementById("defaultOpen").click();

//for the back buttons
function goBack() {
    window.history.back()
}

//For the accordion
function accordion() {
var acc = document.getElementsByClassName("arrowdown");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.nextElementSibling.classList.toggle("show");
  }
}
}
