function filterProjects(type) {
    let projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        if(type === 'all' || project.classList.contains(type)){
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}