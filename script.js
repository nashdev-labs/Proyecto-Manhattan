const skillsBtn = document.getElementById("skillsBtn");
const skillsPanel = document.getElementById("skillsPanel");
const arrow = document.getElementById("arrow");

skillsBtn.addEventListener("click", () => {
  skillsPanel.classList.toggle("show");
  arrow.classList.toggle("rotate");
});

document.addEventListener("click", (event) => {
  const clickedInsidePanel = skillsPanel.contains(event.target);
  const clickedButton = skillsBtn.contains(event.target);

  if (!clickedInsidePanel && !clickedButton) {
    skillsPanel.classList.remove("show");
    arrow.classList.remove("rotate");
  }
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});