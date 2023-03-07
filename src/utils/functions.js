export function opacityFilter() {
  const opacityFilter = document.body.querySelector(".animation-overlay");
  opacityFilter.classList.add("project-overlay-change");
}

export function opacityFilterRemove() {
  const opacityFilterRemove = document.body.querySelector(".animation-overlay");
  if (
    opacityFilterRemove &&
    opacityFilterRemove.classList.contains("project-overlay-change")
  ) {
    opacityFilterRemove.classList.remove("project-overlay-change");
  }
}
