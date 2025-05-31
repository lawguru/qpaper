document.addEventListener("DOMContentLoaded", () => {
  const subjectDropdown = document.getElementById("subjectDropdown");
  const goBtn = document.getElementById("goBtn");

  const subjectLinks = {
    "Computer Networks": "https://example.com/computer-networks",
    "Data Structures": "https://example.com/data-structures"
  };

  for (const subject in subjectLinks) {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectDropdown.appendChild(option);
  }

  goBtn.addEventListener("click", () => {
    const selected = subjectDropdown.value;
    if (selected) {
      window.location.href = subjectLinks[selected];
    } else {
      alert("Please select a subject.");
    }
  });
});
