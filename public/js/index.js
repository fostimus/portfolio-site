const projects = document.querySelectorAll(".background-project");

projects.forEach(project => {
  const id = project.getAttribute("id");

  fetch("/repo/" + id)
    .then(response => response.json())
    .then(data => {
      project.querySelector("p").textContent = data.description;
    });
});

/**
 * skills manipulation
 */

let originalSkillHeight = null;
const skills = document.querySelectorAll(".skill");

//TODO: also allow for clicking to expand? for mobile
skills.forEach(skill => {
  skill.addEventListener("mouseenter", () => {
    if (originalSkillHeight === null) {
      originalSkillHeight = skill.offsetHeight;
    }

    // +15 for padding at bottom
    const newHeight =
      skill.offsetHeight +
      skill.querySelector(".skill-items").offsetHeight +
      15;

    skill.setAttribute("style", "height: " + newHeight.toString() + "px");
  });

  skill.addEventListener("mouseleave", () => {
    skill.setAttribute("style", "height: " + originalSkillHeight + "px");
  });
});
