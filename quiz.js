const questions = [
  {
    type: "mc",
    question: "Was ist eine PWA?",
    options: ["Native App", "Web-App mit nativen Funktionen", "Ein Webserver"],
    correct: "Web-App mit nativen Funktionen",
  },
  {
    type: "gap",
    question: "Eine ___ lädt nur eine Seite und ersetzt Inhalte dynamisch.",
    correct: "Single Page Application",
  },
  {
    type: "mc",
    question: "Welcher Sensor erkennt die Lage eines Smartphones?",
    options: ["Gyroskop", "Magnetfeldsensor", "Beschleunigungssensor"],
    correct: "Gyroskop",
  },
  {
    type: "gap",
    question: "Eine Cross-Platform App wird für ___ Systeme entwickelt.",
    correct: "mehrere",
  },
  // Neue Fragen:
  {
    type: "mc",
    question:
      "Welche Programmiersprache wird hauptsächlich für iOS-Entwicklung genutzt?",
    options: ["Java", "Swift", "Kotlin"],
    correct: "Swift",
  },
  {
    type: "gap",
    question: "Ein ___ misst Drehbewegungen des Geräts.",
    correct: "Gyroskop",
  },
  {
    type: "mc",
    question: "Welche IDE wird oft für iOS genutzt?",
    options: ["Android Studio", "Xcode", "Visual Studio"],
    correct: "Xcode",
  },
  {
    type: "gap",
    question: "Eine ___-App verwendet Webtechnologien in einer nativen Hülle.",
    correct: "Hybrid",
  },
  {
    type: "mc",
    question: "Welche Aussage trifft auf eine Native App zu?",
    options: [
      "Sie läuft nur im Browser",
      "Sie nutzt Gerätefunktionen optimal",
      "Sie ist immer Cross-Platform",
    ],
    correct: "Sie nutzt Gerätefunktionen optimal",
  },
  {
    type: "gap",
    question: "___ Tests prüfen das Zusammenspiel verschiedener Module.",
    correct: "Integration",
  },
  {
    type: "mc",
    question: "Welcher App-Typ benötigt keine Installation?",
    options: ["Web App", "Native App", "Hybrid App"],
    correct: "Web App",
  },
  {
    type: "gap",
    question:
      "Eine ___ App wird mit einem Code für mehrere Plattformen geschrieben.",
    correct: "Cross-Platform",
  },

  // Neue Fragen ab Nr. 13
  {
    type: "mc",
    question: "Was beschreibt eine Single Page Application (SPA)?",
    options: [
      "Eine App mit mehreren Seiten",
      "Eine Web-App, die ohne Neuladen Inhalte austauscht",
      "Eine Mobile App für iOS und Android",
    ],
    correct: "Eine Web-App, die ohne Neuladen Inhalte austauscht",
  },
  {
    type: "gap",
    question:
      "Eine Progressive Web Application (PWA) kann auch ohne ___ funktionieren.",
    correct: "Internet",
  },
  {
    type: "mc",
    question: "Was ist der Hauptvorteil einer Cross-Platform Application?",
    options: [
      "Sie läuft nur auf Android",
      "Eine Codebasis für mehrere Plattformen",
      "Sie benötigt keinen Code",
    ],
    correct: "Eine Codebasis für mehrere Plattformen",
  },
  {
    type: "gap",
    question:
      "Eine Native Applikation ist speziell für ein bestimmtes ___ entwickelt.",
    correct: "Betriebssystem",
  },
  {
    type: "mc",
    question: "Was bedeutet Fragmentierung in der mobilen Entwicklung?",
    options: [
      "Viele unterschiedliche Geräte und Bildschirmgrößen",
      "Apps werden automatisch fragmentiert",
      "Nur eine Plattform wird unterstützt",
    ],
    correct: "Viele unterschiedliche Geräte und Bildschirmgrößen",
  },
  {
    type: "gap",
    question:
      "Ein ___ wandelt elektrische Signale in mechanische Bewegungen um.",
    correct: "Aktuator",
  },
  {
    type: "mc",
    question: "Welche Funktion hat die Eichung eines Sensors?",
    options: [
      "Sensorwerte anpassen und korrigieren",
      "Sensoren neu starten",
      "Ein Sensor deaktivieren",
    ],
    correct: "Sensorwerte anpassen und korrigieren",
  },
  {
    type: "gap",
    question: "Ein Beschleunigungssensor misst die ___ eines Geräts.",
    correct: "Bewegung",
  },
  {
    type: "mc",
    question: "Wofür wird ein Lagesensor verwendet?",
    options: [
      "Er erkennt die Position des Geräts",
      "Er erkennt das Gewicht des Geräts",
      "Er misst die Temperatur",
    ],
    correct: "Er erkennt die Position des Geräts",
  },
  {
    type: "gap",
    question: "Ein ___ erkennt die geografische Position eines Smartphones.",
    correct: "Positionssensor",
  },
  {
    type: "mc",
    question: "Welcher Sensor wird für eine Kompass-App benötigt?",
    options: ["Gyroskop", "Magnetfeldsensor", "Näherungssensor"],
    correct: "Magnetfeldsensor",
  },
  {
    type: "gap",
    question: "Ein ___ misst die Entfernung eines Objekts zum Bildschirm.",
    correct: "Näherungssensor",
  },
  {
    type: "mc",
    question: "Wie kann ein Smartphone seine Temperatur messen?",
    options: [
      "Mit einem Temperatursensor",
      "Mit einem Beschleunigungssensor",
      "Mit einem Lagesensor",
    ],
    correct: "Mit einem Temperatursensor",
  },
  {
    type: "gap",
    question: "Ein ___ hilft, Drehbewegungen eines Geräts zu erfassen.",
    correct: "Gyroskop",
  },
  {
    type: "mc",
    question: "Was bedeutet 'Responsive Design'?",
    options: [
      "Die App reagiert auf Tasten-Eingaben",
      "Die App passt sich verschiedenen Bildschirmgrößen an",
      "Die App verwendet viele Animationen",
    ],
    correct: "Die App passt sich verschiedenen Bildschirmgrößen an",
  },
  {
    type: "gap",
    question: "Ein ___ ist eine visuelle Skizze der App-Oberfläche.",
    correct: "Mockup",
  },
  {
    type: "mc",
    question:
      "Welcher Begriff beschreibt eine einfache Struktur für das Layout einer App?",
    options: ["Storyboard", "Wireframe", "Mockup"],
    correct: "Wireframe",
  },
  {
    type: "gap",
    question: "Ein ___ beschreibt den Ablauf einer App mit mehreren Ansichten.",
    correct: "Storyboard",
  },
];

const flashcards = [
  "SPA = Single Page Application, eine Web-App ohne Neuladen",
  "PWA = Progressive Web Application, Web-App mit Offline-Funktion",
  "Cross-Platform Apps laufen auf mehreren Systemen mit einer Codebasis",
  "Native Apps nutzen die Hardware optimal",
  "Hybrid-Apps verwenden Webtechnologien in einer nativen Hülle",
];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let currentFlashcard = 0;

// 1. QUIZ-START
function startQuiz() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "flex";
  renderQuestionNav();
  loadQuestion();
  updateProgress();
}

// 2. FRAGEN-NAVIGATION (Seitenleiste)
function renderQuestionNav() {
  const nav = document.getElementById("question-nav");
  nav.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    let li = document.createElement("li");
    li.textContent = i + 1;
    li.onclick = () => {
      saveAnswer();
      currentQuestion = i;
      loadQuestion();
      updateProgress();
    };
    nav.appendChild(li);
  }
}

// 3. FRAGE LADEN
function loadQuestion() {
  const container = document.getElementById("quiz-content");
  container.innerHTML = `<h3>${questions[currentQuestion].question}</h3>`;

  if (questions[currentQuestion].type === "mc") {
    questions[currentQuestion].options.forEach((opt) => {
      container.innerHTML += `
        <label>
          <input type="radio" name="q" value="${opt}" ${
        userAnswers[currentQuestion] === opt ? "checked" : ""
      }>
          ${opt}
        </label><br>
      `;
    });
  } else if (questions[currentQuestion].type === "gap") {
    container.innerHTML += `
      <input type="text" id="gap-input" value="${
        userAnswers[currentQuestion] || ""
      }" placeholder="Deine Antwort hier">
    `;
  }
  updateButtons();
  updateProgress();
}

// 4. NAVI-BUTTONS (Weiter, Zurück, Auswerten)
function updateButtons() {
  document.getElementById("prev-btn").style.display =
    currentQuestion > 0 ? "inline-block" : "none";
  document.getElementById("next-btn").style.display =
    currentQuestion < questions.length - 1 ? "inline-block" : "none";
  document.getElementById("submit-btn").style.display =
    currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

// 5. ANTWORT SPEICHERN
function saveAnswer() {
  const question = questions[currentQuestion];
  if (question.type === "mc") {
    const selected = document.querySelector(`input[name="q"]:checked`);
    userAnswers[currentQuestion] = selected ? selected.value : null;
  } else if (question.type === "gap") {
    const input = document.getElementById("gap-input");
    userAnswers[currentQuestion] = input ? input.value.trim() : null;
  }
}

// 6. FORTSCHRITTSBALKEN
function updateProgress() {
  const progressText = document.getElementById("progress-text");
  progressText.textContent = `Frage ${currentQuestion + 1} von ${
    questions.length
  }`;

  const progressFill = document.getElementById("progress-fill");
  let percent = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = percent + "%";
}

// 7. AUSWERTUNG
function gradeQuiz() {
  saveAnswer();
  let score = 0;
  let resultHTML = "<h2>📊 Ergebnis:</h2>";

  questions.forEach((q, i) => {
    if (userAnswers[i] === q.correct) {
      score++;
    } else {
      resultHTML += `
        <p>
          <strong>Frage ${i + 1}:</strong> ${q.question}<br>
          <em>Richtige Antwort:</em> ${q.correct}<br>
          <em>Deine Antwort:</em> ${
            userAnswers[i]
              ? userAnswers[i]
              : "<span style='color: gray;'>keine Antwort</span>"
          }
        </p>
      `;
    }
  });

  resultHTML += `<h3>Score: ${score} von ${questions.length}</h3>`;
  // 👉 Hier fügen wir einen Neustart-Button hinzu
  resultHTML += `<button onclick="restartQuiz()">🔄 Neustarten</button>`;

  document.getElementById("result-container").innerHTML = resultHTML;
  document.getElementById("result-container").style.display = "block";
  document.getElementById("quiz-container").style.display = "none";
}

// 👉 Funktion, um das Quiz neu zu starten (ohne Seite zu reloaden)
function restartQuiz() {
  // Antworten zurücksetzen
  userAnswers = new Array(questions.length).fill(null);
  currentQuestion = 0;

  // Ergebnis ausblenden und Quiz wieder anzeigen
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "flex";

  // Erneut laden
  renderQuestionNav();
  loadQuestion();
  updateProgress();
}

// 8. LERNCARD-MODUS
function startLearning() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("flashcards-container").style.display = "block";
  showFlashcard();
}

function showFlashcard() {
  document.getElementById("flashcard").innerText = flashcards[currentFlashcard];
}

function nextFlashcard() {
  currentFlashcard = (currentFlashcard + 1) % flashcards.length;
  showFlashcard();
}

function prevFlashcard() {
  currentFlashcard =
    (currentFlashcard - 1 + flashcards.length) % flashcards.length;
  showFlashcard();
}

// 9. ZUM MENÜ ZURÜCK
function returnToMenu() {
  location.reload();
}
