export default function initScrollSuave() {
  const links = document.querySelectorAll("[data-srcoll='suave'] a[href^='#']");

  if (links.length) {
    function activeScrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    links.forEach((link) => {
      link.addEventListener("click", activeScrollSuave);
    });
  }
}
