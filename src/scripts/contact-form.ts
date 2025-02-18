// src/scripts/contact-form.ts
export function initializeContactForm() {
  if (typeof document === "undefined") return; // Asegura que solo se ejecute en el cliente

  const form = document.querySelector("[data-form]") as HTMLFormElement;
  const formInputs = document.querySelectorAll(
    "[data-form-input]"
  ) as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
  const formBtn = document.querySelector(
    "[data-form-btn]"
  ) as HTMLButtonElement;

  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}
