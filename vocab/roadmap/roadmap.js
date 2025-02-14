const sections = [
    { name: "Saludos", emoji: "👋", xp: 0 },
    { name: "Familia", emoji: "👨‍👩‍👧", xp: 100 },
    { name: "Números", emoji: "🔢", xp: 200 },
    { name: "Profesiones", emoji: "💼", xp: 300 }
];

const subSections = [
    { name: "Flashcards", folder: "flashcards" },
    { name: "Quiz", folder: "quiz" },
    { name: "Emparejar", folder: "emparejar" }
];

const container = document.getElementById("sectionsContainer");

sections.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";
    sectionDiv.innerHTML = `
        <div class="toggle-section">
            <h1>${section.emoji}</h1>
            <h2>${section.name}</h2>
            <p class="xp-required">${section.xp} XP para desbloquear</p>
        </div>
        <div class="sub-section hidden">
            ${subSections.map(sub => `
                <div onclick="openSubSection('${section.name}', '${sub.folder}')">
                    <h1>❓</h1>
                    <p>${sub.name}</p>
                </div>
            `).join("")}
        </div>
    `;
    container.appendChild(sectionDiv);
});

// 🔽 Evento para mostrar/ocultar subsecciones
document.querySelectorAll(".toggle-section").forEach(header => {
    header.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("hidden");
    });
});

function openSubSection(sectionName, folder) {
    localStorage.setItem("selectedSection", sectionName);
    window.location.href = `${folder}/${folder}.html`;
}