// src/scripts/navbar.ts
export function initializeNavbar() {
  if (typeof document === "undefined") return;

  const navigationLinks = document.querySelectorAll(
    "[data-nav-link]"
  ) as NodeListOf<HTMLButtonElement>;
  const pages = document.querySelectorAll(
    "[data-page]"
  ) as NodeListOf<HTMLElement>;

  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const clickedPage = this.innerHTML.toLowerCase();
      pages.forEach((page, index) => {
        if (clickedPage === page.dataset.page) {
          page.classList.add("active");
          navigationLinks[index].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
          navigationLinks[index].classList.remove("active");
        }
      });
    });
  });
}
