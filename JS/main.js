document.querySelector('#title').innerHTML = "Truck Power"


  
function createMenu() {
    
    menuLinks = document.querySelectorAll("ul#primaryNav li a");
    console.log(menuLinks);
    let newUl = document.createElement("ul");

    menuLinks.forEach(menuLink => {
      
      let newLi = document.createElement("li");
      let newLink = document.createElement("a");


      newLink.setAttribute("href", menuLink.getAttribute("href"));
      newLi.appendChild(newLink);

      document.querySelector("#smallNavArea").appendChild(newUl);
      newUl.appendChild(newLi);


      console.log(menuLink.text);
      newLink.textContent = menuLink.innerText;
    });
  }
  
  createMenu();