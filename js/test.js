const questions = [
  {
    q: "Routerning asosiy vazifasi nima?",
    o: [
      "Tarmoqlar orasida paketlarni yo'naltirish",
      "Faqat matn yozish",
      "Monitor rangini sozlash",
      "Elektr toki ishlab chiqarish"
    ],
    a: 0
  },
  {
    q: "Switch qaysi tarmoqda ko'proq ishlatiladi?",
    o: [
      "Lokal tarmoqda",
      "Faqat printer ichida",
      "Faqat elektr stansiyada",
      "Faqat klaviaturada"
    ],
    a: 0
  },
  {
    q: "Server nimani taqdim etadi?",
    o: [
      "Tarmoq xizmatlari va resurslarini",
      "Faqat ekran yorqinligini",
      "Faqat telefon quvvatini",
      "Faqat audio faylni"
    ],
    a: 0
  },
  {
    q: "OSI modeli nechta qatlamdan iborat?",
    o: [
      "7 qatlamdan",
      "2 qatlamdan",
      "12 qatlamdan",
      "Faqat bitta qatlamdan"
    ],
    a: 0
  },
  {
    q: "AR texnologiyasi ta'limda nimani kuchaytiradi?",
    o: [
      "Ko'rgazmalilik va interaktivlikni",
      "Faqat qog'oz sarfini",
      "Faqat daftar hajmini",
      "Faqat matn uzunligini"
    ],
    a: 0
  },
  {
    q: "WebAR ishlashi uchun brauzerda ko'pincha nima kerak?",
    o: [
      "HTTPS va kamera ruxsati",
      "Faqat Excel fayli",
      "Faqat printer",
      "Faqat kabelsiz sichqoncha"
    ],
    a: 0
  }
];

let index = 0;
const answers = Array(questions.length).fill(null);
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const barEl = document.getElementById('bar');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

function render() {
  const item = questions[index];
  questionEl.textContent = `${index + 1}. ${item.q}`;
  barEl.style.width = `${(index / questions.length) * 100}%`;
  optionsEl.innerHTML = '';

  item.o.forEach((answer, optionIndex) => {
    const button = document.createElement('button');
    button.className = `option${answers[index] === optionIndex ? ' selected' : ''}`;
    button.type = 'button';
    button.textContent = answer;
    button.onclick = () => {
      answers[index] = optionIndex;
      render();
    };
    optionsEl.appendChild(button);
  });

  prevEl.style.visibility = index ? 'visible' : 'hidden';
  nextEl.textContent = index === questions.length - 1 ? "Natijani ko'rish" : 'Keyingi';
}

prevEl.onclick = () => {
  if (index > 0) {
    index -= 1;
    render();
  }
};

nextEl.onclick = () => {
  if (index < questions.length - 1) {
    index += 1;
    render();
    return;
  }

  const correct = answers.reduce((sum, answer, questionIndex) => {
    return sum + (answer === questions[questionIndex].a ? 1 : 0);
  }, 0);
  const score = Math.round((correct / questions.length) * 100);
  localStorage.setItem('arTestScore', score);
  location.href = 'result.html';
};

render();
