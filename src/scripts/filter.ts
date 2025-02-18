// src/scripts/filter.ts
export function initializeFilter() {
  if (typeof document === "undefined") return; // Asegura que solo se ejecute en el cliente

  const select = document.querySelector("[data-select]") as HTMLButtonElement;
  const selectItems = document.querySelectorAll(
    "[data-select-item]"
  ) as NodeListOf<HTMLButtonElement>;
  const selectValue = document.querySelector(
    "[data-selecct-value]"
  ) as HTMLElement;
  const filterBtn = document.querySelectorAll(
    "[data-filter-btn]"
  ) as NodeListOf<HTMLButtonElement>;
  const filterItems = document.querySelectorAll(
    "[data-filter-item]"
  ) as NodeListOf<HTMLElement>;

  if (select) {
    select.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  selectItems.forEach((item) => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      select.classList.remove("active");
      filterFunc(selectedValue);
    });
  });

  const filterFunc = function (selectedValue: string): void {
    filterItems.forEach((item) => {
      if (selectedValue === "all" || selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
}
