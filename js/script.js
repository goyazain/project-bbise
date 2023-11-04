 // rediect

   // Check if the current page is not the mobile page and the window width is less than 768px
   if (window.innerWidth < 768 && !window.location.href.includes("mob-index.html")) {
    window.location.href = "mob-index.html"; // Redirect to the mobile page
} 
// Check if the current page is not the desktop page and the window width is 768px or more
else if (window.innerWidth >= 768 && !window.location.href.includes("index.html")) {
    window.location.href = "index.html"; // Redirect to the desktop page
}
 
 let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });


 