export function getNewProject(title) {
  return {
    title,
    items: [],
  };
}
export function getNewItem(name) {
  return { name, done: false };
}
export function insertNewItem(
  project,
  title,
  description,
  dueDate,
  prority,
  notes
) {
  project.items.push({
    title,
    description,
    dueDate,
    prority,
    notes,
  });
  return {
    ...project,
  };
}
