document.addEventListener("DOMContentLoaded", () => {
  const subjectDropdown = document.getElementById("subjectDropdown");
  const goBtn = document.getElementById("goBtn");

  // Map subjects to URLs (redirect links)
  const subjectLinks = {
    "Computer Networks": "https://example.com/computer-networks",
    "Data Structures": "https://example.com/data-structures",
    "Operating Systems": "https://example.com/operating-systems"
  };

  // Populate dropdown
  for (const subject in subjectLinks) {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectDropdown.appendChild(option);
  }

  // Handle redirection
  goBtn.addEventListener("click", () => {
    const selectedSubject = subjectDropdown.value;
    if (selectedSubject && subjectLinks[selectedSubject]) {
      window.location.href = subjectLinks[selectedSubject];
    } else {
      alert("Please select a subject.");
    }
  });
});

