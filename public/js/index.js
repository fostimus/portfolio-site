const projects = document.querySelectorAll(".background-project");

projects.forEach(project => {
  const id = project.getAttribute("id");

  fetch("/github/repo/" + id)
    .then(response => response.json())
    .then(data => {
      project.querySelector("p").textContent = data.description;
    });
});
