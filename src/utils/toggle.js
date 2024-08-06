export function toggle() {
   const element = document.getElementById("reg-button");
   const hidden = element.getAttribute("hidden");
   
   if (hidden !== null) {
     element.removeAttribute("hidden");
   } else {
     element.setAttribute("hidden", "hidden");
   }
 }