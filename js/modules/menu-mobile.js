import outSideClick from "./outsideclick.js";

export default function initMenuMobile(){
  const menuButtom = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click","touchstart"];

  if(menuButtom){
    function openMenu(){
      menuList.classList.add("ativo");
      menuButtom.classList.add("ativo");
      outSideClick(menuList, eventos, () => {
        menuList.classList.remove("ativo");
        menuButtom.classList.remove("ativo");
      })
    }
    eventos.forEach(evento => menuButtom.addEventListener(evento, openMenu));
  }
}





