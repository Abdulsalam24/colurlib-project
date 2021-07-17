let toggleNavStatus = false;

let toggle = function(){
    let getSideNavBar = document.querySelector(".nav-sidebar");
    let getSideNavBarUl = document.querySelector(".nav-sidebar ul");
    let getSideNavBarLink = document.querySelectorAll(".nav-sidebar a");


    if (toggleNavStatus === false){
        getSideNavBar.style.height = "250px";
        getSideNavBarUl.style.display="block";
        toggleNavStatus = true;
    }else{
        getSideNavBar.style.height = "0px";
        getSideNavBarUl.style.display="none";
        toggleNavStatus = false;
    }

    
}

