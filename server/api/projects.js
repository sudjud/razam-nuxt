import projects from "~/server/data/projects";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  
  if (query.slug) {
    const project = projects.find((project) => project.slug === query.slug);
    return project || { error: "Projects not found" };
  }

  return projects;
});
