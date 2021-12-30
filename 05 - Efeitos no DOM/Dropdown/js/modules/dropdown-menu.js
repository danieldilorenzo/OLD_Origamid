export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
  outsideclick(this, () => {
    this.classList.remove("active");
  });
}
function outsideclick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleoutsideclick);
    element.setAttribute(outside, "");
  }
  function handleoutsideclick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener("click", handleoutsideclick);
      callback();
    }
  }
}
