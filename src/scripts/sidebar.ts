// src/scripts/sidebar.ts
export function initializeSidebar() {
  if (typeof document === "undefined") return; // Asegura que solo se ejecute en el cliente

  const sidebar = document.querySelector("[data-sidebar]") as HTMLElement;
  const sidebarBtn = document.querySelector(
    "[data-sidebar-btn]"
  ) as HTMLButtonElement;

  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  }
}
