import outSideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outSideClick(this,  ["click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropDownMenus.forEach((menu) => {
    ["click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}



