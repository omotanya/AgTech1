function toggleDetails(project) {
  const detailsContainer = document.getElementById(`${project}Details`);
  if (detailsContainer.style.display === 'none' || detailsContainer.style.display === '') {
    detailsContainer.style.display = 'block';
  } else {
    detailsContainer.style.display = 'none';
  }
}