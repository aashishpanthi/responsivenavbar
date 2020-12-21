/*Grabing main elements to perform actions*/
const navbar = document.querySelector(".Nav");
const navbarElements = navbar.querySelector(".Nav__elements");

//Function for indicator --The line below the links--
const showIndicator = (props) => {
  let actionOn = props ? props.actionOn : "click"; //Taking action if props is not undefined
  actionOn = actionOn || "click"; // If actionOn is not provided then I set it default on click

  //Making indicator
  const indicator = document.createElement("span");
  indicator.classList.add("indicator");
  navbarElements.appendChild(indicator);

  //Grabing all links
  const links =
    navbarElements.querySelectorAll(".Nav__item") ||
    navbarElements.querySelectorAll(".Nav__link");

  //Looping over all the elements and checking which element has been clicked
  links.forEach((link) => {
    link.addEventListener(actionOn, () => {
      indicator.style = `left:${link.offsetLeft}px;top:${
        link.offsetTop + 22
      }px;width:${link.offsetWidth}px`; // Styling the indicator respective to the clicked element
    });
  });
};

//Function for hanling responsiveness of navbar
const handleResponsive = () => {
  const toggleBtn = document.createElement("a"); //creating toggle icon
  toggleBtn.classList.add("Nav__toogleBtn");
  for (let i = 0; i < 3; i++) {
    const toggleBtnRow = document.createElement("div");
    toggleBtn.appendChild(toggleBtnRow);
  }
  navbar.appendChild(toggleBtn);

  //Tracking the state of the toogle button
  let status = true;
  toggleBtn.onclick = () => {
    if (status) {
      navbarElements.style.top = "60px";
      status = false;
    } else {
      navbarElements.style.top = "-600px";
      status = true;
    }
    toggleBtn.classList.toggle("active");
  };

  //Handling links when browser size changes
  window.onresize = () => {
    if (window.innerWidth > 700) {
      navbarElements.style.top = "0px";
      toggleBtn.classList.remove("active");
      status = true;
    } else {
      navbarElements.style.top = "-600px";
    }
  };
};
