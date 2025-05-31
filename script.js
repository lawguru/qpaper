document.addEventListener("DOMContentLoaded", () => {
  const subjectDropdown = document.getElementById("subjectDropdown");
  const searchBtn = document.getElementById("searchBtn");
  const papersList = document.getElementById("papersList");

  let papersData = [];

  function renderDropdownOptions(papers) {
    const subjects = [...new Set(papers.map(p => p.subject))];
    subjects.sort();

    subjects.forEach(subject => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      subjectDropdown.appendChild(option);
    });
  }

  function renderPapers(filter = "") {
    papersList.innerHTML = "";
    const filtered = papersData.filter(paper =>
      paper.subject === filter || filter === ""
    );

    if (filtered.length === 0) {
      papersList.innerHTML = "<p>No papers found.</p>";
      return;
    }

    filtered.forEach(paper => {
      const div = document.createElement("div");
      div.className = "paper";
      div.innerHTML = `
        <h3>${paper.subject} - Sem ${paper.semester} (${paper.year})</h3>
        <a href="${paper.link}" target="_blank">Download PDF</a>
      `;
      papersList.appendChild(div);
    });
  }

  fetch("data/papers.json")
    .then(res => res.json())
    .then(data => {
      papersData = data;
      renderDropdownOptions(data);
      renderPapers(); // Load all by default
    });

  searchBtn.addEventListener("click", () => {
    const selectedSubject = subjectDropdown.value;
    renderPapers(selectedSubject);
  });
});

