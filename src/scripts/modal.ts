// src/scripts/modal.ts
export function initializeModal() {
  if (typeof document === "undefined") return; // Asegura que solo se ejecute en el cliente

  const testimonialsItems = document.querySelectorAll(
    "[data-testimonials-item]"
  ) as NodeListOf<HTMLElement>;
  const modalContainer = document.querySelector(
    "[data-modal-container]"
  ) as HTMLElement;
  const modalCloseBtn = document.querySelector(
    "[data-modal-close-btn]"
  ) as HTMLButtonElement;
  const overlay = document.querySelector("[data-overlay]") as HTMLElement;

  const modalImg = document.querySelector(
    "[data-modal-img]"
  ) as HTMLImageElement;
  const modalTitle = document.querySelector(
    "[data-modal-title]"
  ) as HTMLElement;
  const modalText = document.querySelector("[data-modal-text]") as HTMLElement;

  const testimonialsModalFunc = function (): void {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  testimonialsItems.forEach((item) => {
    item.addEventListener("click", function () {
      const avatar = this.querySelector(
        "[data-testimonials-avatar]"
      ) as HTMLImageElement;
      const title = this.querySelector(
        "[data-testimonials-title]"
      ) as HTMLElement;
      const text = this.querySelector(
        "[data-testimonials-text]"
      ) as HTMLElement;

      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
      modalTitle.innerHTML = title.innerHTML;
      modalText.innerHTML = text.innerHTML;
      testimonialsModalFunc();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  }
  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  }
}
