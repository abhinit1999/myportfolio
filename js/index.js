let menu = document.getElementById("menubar");
let sidenav = document.getElementById("side_nav");
sidenav.style.width="0px";
menu.onclick=function()
{
    if(sidenav.style.width=="0px")
        sidenav.style.width="250px";
    else
        sidenav.style.width="0px";
}