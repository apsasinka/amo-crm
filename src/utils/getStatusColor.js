export const getStatusColor = (taskDate) => {
  const today = new Date();
  const dueDate = new Date(taskDate);

  if (today.toDateString() === dueDate.toDateString()) {
    return "green";
  } else if (today > dueDate) {
    return "red";
  } else {
    return "yellow";
  }
};
