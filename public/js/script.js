document.addEventListener("DOMContentLoaded",function(){
    const allButtons = document.querySelectorAll(".searchBtn");
    const searchBar = document.querySelector(".search_bar");
    const searchInput = document.getElementById("#search_input");
    const searchClose = document.getElementById("searchClose");

    for (let i=0 ; i<allButtons.length ; i++){
        allButtons[i].addEventListener("click",()=>{
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded',"true");
            searchInput.focus();
        });
    }

    searchClose.addEventListener("click", function () {
    searchBar.style.visibility = 'hidden';
    searchBar.classList.remove('open');
    this.setAttribute('aria-expanded', "false");
    // searchInput.focus();
});
    
});