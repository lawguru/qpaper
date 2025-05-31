document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const papersList = document.getElementById("papersList");

  fetch("data/papers.json")
    .then(res => res.json())
    .then(data => {
      function renderPapers(filter = "") {
        papersList.innerHTML = "";
        const filtered = data.filter(paper =>
          paper.subject.toLowerCase().includes(filter.toLowerCase())
        );

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

      renderPapers();

      searchInput.addEventListener("input", () => {
        renderPapers(searchInput.value);
      });
    });
});
