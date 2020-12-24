const projects = document.querySelectorAll(".background-project");

projects.forEach(project => {
  const id = project.getAttribute("id");

  console.log(id);

  fetch("/repo/" + id)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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

    const subSkills = skill.querySelectorAll(".skill-item");
    // +20 is padding
    const subSkillsHeight = subSkills[0].offsetHeight * subSkills.length + 20;

    const newHeight = skill.offsetHeight + subSkillsHeight;

    skill.setAttribute("style", "height: " + newHeight.toString() + "px");
  });

  skill.addEventListener("mouseleave", () => {
    skill.setAttribute("style", "height: " + originalSkillHeight + "px");
  });
});
