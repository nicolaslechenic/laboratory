<<<<<<< HEAD
function menuAct(indexActive){

    var menu = document.getElementById("menuactive"); /id de UL/
    var element = menu.getElementsByClassName("nav-item"); /class de LI/
     element[indexActive].className += " active";
=======
function menuAct(indexActive){

    var menu = document.getElementById("menuactive"); /id de UL/
    var element = menu.getElementsByClassName("nav-item"); /class de LI/
     element[indexActive].className += " active";
>>>>>>> 0af437dd09ab9dff1e1e6de14c955a03650e0bfc
}