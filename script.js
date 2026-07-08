/* ===== UNIT 1 DATA ===== */
const u1 = {};

u1.fillBlanks = [
  "I ___ a student.",
  "She ___ my sister.",
  "They ___ from the United States.",
  "It ___ a nice morning.",
  "You ___ my friend.",
  "He ___ a doctor.",
  "We ___ happy to meet you.",
  "I ___ ready for class.",
  "It ___ a good book.",
  "They ___ here.",
];

u1.pronounReplacements = [
  "(David) ___ is a teacher.",
  "(Anna and Sarah) ___ are friends.",
  "(The apple) ___ is red.",
  "(Mr. Smith) ___ is very nice.",
  "(My brother and I) ___ are at home.",
  "(Mrs. Davis) ___ is in the classroom.",
  "(The books) ___ are on the desk.",
  "(The dog) ___ is happy.",
  "(The students) ___ are ready to learn.",
  "(My name) ___ is John.",
];

u1.dialogue = [
  { speaker: "David", line: "Hello, Sarah! Good morning." },
  { speaker: "Sarah", line: "Hello, David. What's up?" },
  { speaker: "David", line: "I am good, thank you. Please, sit down." },
  { speaker: "Sarah", line: "Yes, thank you. It is a nice morning." },
  { speaker: "David", line: "Sarah, meet my friend. He is John." },
  { speaker: "Sarah", line: "Hello, John. My name is Sarah. Nice to meet you." },
  { speaker: "John", line: "Nice to meet you, Sarah. You are in my English class!" },
  { speaker: "David", line: "Oh, no! We are late for class!" },
  { speaker: "Sarah", line: "Goodbye, John!" },
  { speaker: "John", line: "Goodbye!" },
];

u1.trueFalse = [
  "It is a nice morning.",
  'David says, "Please, sit down."',
  "John is Sarah's friend.",
  "They are late for class.",
];

u1.mcReading = [
  { q: 'Who says the idiom "What\'s up"?', options: ["David", "Sarah", "John"] },
  { q: "John is...", options: ["a teacher.", "David's friend.", "Sarah's brother."] },
  { q: "David, Sarah, and John are...", options: ["at home.", "in a class.", "going to class."] },
];

u1.readingFill = [
  '"{____}, thank you."',
  '"My {____} is Sarah."',
  '"We {____} late for class!"',
];

u1.listeningExercises = [
  {
    dialogueNum: 1,
    title: "Emma and Chris greet each other.",
    lines: [
      { speaker: "Emma", line: "Hello! My name is Emma. What is your name?" },
      { speaker: "Chris", line: "Hi, Emma. I am Chris. Nice to meet you!" },
      { speaker: "Emma", line: "Nice to meet you too, Chris. How are you?" },
      { speaker: "Chris", line: "I am good, and you?" },
      { speaker: "Emma", line: "I am good too. What's up?" },
    ],
    questions: [
      { q: "What is the woman's name?", options: ["Sarah", "Emma", "Chris"] },
      { q: 'Who uses the expression "What\'s up?"', options: ["Emma", "Chris", "The teacher"] },
      { q: 'Fill in the blank: "I am good, ______ you."', options: ["and", "with", "for"] },
    ],
  },
  {
    dialogueNum: 2,
    title: "A student arrives late to Mr. Smith's class.",
    lines: [
      { speaker: "Alex", line: "Good morning, Mr. Smith. I am sorry I am late." },
      { speaker: "Mr. Smith", line: "Good morning, Alex. Please sit down." },
      { speaker: "Alex", line: "Yes, thank you." },
      { speaker: "Mr. Smith", line: "No problem. We are happy you are here." },
      { speaker: "Alex", line: "Thank you, Mr. Smith." },
    ],
    questions: [
      { q: "Who is Mr. Smith?", options: ["A student", "A friend", "The teacher"] },
      { q: "What does Mr. Smith tell Alex to do?", options: ["Say hello", "Sit down", "Stand up"] },
      { q: 'True or False: Alex says "No, thank you."', isTF: true },
    ],
  },
  {
    dialogueNum: 3,
    title: "Paul introduces his friend Maria to Lisa.",
    lines: [
      { speaker: "Paul", line: "Hello, Lisa. I want you to meet my friend." },
      { speaker: "Lisa", line: "Sure! Who is it?" },
      { speaker: "Paul", line: "This is Maria. She is my classmate." },
      { speaker: "Maria", line: "Hi, Lisa. Nice to meet you!" },
      { speaker: "Lisa", line: "Nice to meet you too, Maria!" },
      { speaker: "Paul", line: "Well, goodbye for now!" },
      { speaker: "Maria & Lisa", line: "Goodbye!" },
    ],
    questions: [
      { q: "Who is Paul's friend?", options: ["Lisa", "Maria", "Emma"] },
      { q: "Which subject pronoun does Paul use to introduce Maria?", options: ["He", "She", "It"] },
      { q: "What do they say at the end of the conversation?", options: ["Good morning", "What's up", "Goodbye"] },
    ],
  },
];

/* ===== UNIT 2 DATA ===== */
const u2 = {};

u2.fillBlanks = [
  "___ is your name?",
  "___ are you from?",
  "___ old are you?",
  "___ is your birthday?",
  "___ is your teacher?",
  "___ do you spell your name?",
  "___ is your phone number?",
  "___ are you happy today?",
  "___ is your email address?",
  "___ do you live?",
];

u2.pronounReplacements = [
  "(I) This is ___ book.",
  "(you) What is ___ name?",
  "(he) ___ phone is new.",
  "(she) ___ email is here.",
  "(we) ___ class is fun.",
  "(they) ___ address is 5th Street.",
  "(I) ___ bag is blue.",
  "(he) ___ name is Tom.",
  "(she) ___ sister is a doctor.",
  "(we) ___ teacher is nice.",
];

u2.dialogue = [
  { speaker: "Receptionist", line: "Good morning! Welcome to the school. What is your name?" },
  { speaker: "Student", line: "Good morning. My name is Alex Chen." },
  { speaker: "Receptionist", line: "Nice to meet you, Alex. How do you spell your last name?" },
  { speaker: "Student", line: "It is C-H-E-N. What is my classroom number?" },
  { speaker: "Receptionist", line: "Your room is 204. Where are you from, Alex?" },
  { speaker: "Student", line: "I am from China. My city is Shanghai." },
  { speaker: "Receptionist", line: "That is wonderful! How old are you?" },
  { speaker: "Student", line: "I am 22 years old. What is the teacher's name?" },
  { speaker: "Receptionist", line: "Her name is Ms. Johnson. Here is your student card." },
  { speaker: "Student", line: "Thank you. When does the class start?" },
  { speaker: "Receptionist", line: "It starts at 9 AM. Good luck, Alex!" },
  { speaker: "Student", line: "Thank you! Goodbye." },
];

u2.trueFalse = [
  "The student's name is Alex Chen.",
  "Alex is from Japan.",
  "Alex is 22 years old.",
  'The teacher\'s name is Ms. Johnson.',
  "Alex's classroom number is 204.",
];

u2.mcReading = [
  { q: 'How does Alex spell his last name?', options: ["C-H-E-N", "C-H-A-N", "C-H-U-N"] },
  { q: "Which city is Alex from?", options: ["Beijing", "Shanghai", "Hong Kong"] },
  { q: 'What time does the class start?', options: ["8 AM", "9 AM", "10 AM"] },
];

u2.readingFill = [
  '"I am from China. My {____} is Shanghai."',
  '"How {____} are you?"',
  '"What is your {____} address?"',
  '"How do you spell your {____} name?"',
];

u2.listeningExercises = [
  {
    dialogueNum: 1,
    title: "A student fills out a registration form.",
    lines: [
      { speaker: "Clerk", line: "Hello! Welcome. What is your first name?" },
      { speaker: "Student", line: "My name is Mark." },
      { speaker: "Clerk", line: "And which country are you from?" },
      { speaker: "Student", line: "I am from Canada." },
      { speaker: "Clerk", line: "Great. And what is your phone number?" },
      { speaker: "Student", line: "It is 555-1234." },
      { speaker: "Clerk", line: "Thank you. Here is your student card." },
      { speaker: "Student", line: "Thank you!" },
    ],
    questions: [
      { q: "What is the student's first name?", options: ["Mike", "Mark", "Matt"] },
      { q: "Which country is he from?", options: ["Canada", "Mexico", "Brazil"] },
      { q: 'True or False: His phone number is 555-1234.', isTF: true },
    ],
  },
  {
    dialogueNum: 2,
    title: "Two classmates exchange email addresses.",
    lines: [
      { speaker: "Anna", line: "Hi! My name is Anna. What is your name?" },
      { speaker: "Ben", line: "I am Ben. Nice to meet you!" },
      { speaker: "Anna", line: "Nice to meet you too. What is your email address?" },
      { speaker: "Ben", line: "It is ben@mail.com. And yours?" },
      { speaker: "Anna", line: "Mine is anna@school.edu." },
      { speaker: "Ben", line: "Can you spell that, please?" },
      { speaker: "Anna", line: "Sure. A-N-N-A at school dot E-D-U." },
      { speaker: "Ben", line: "Thank you! I will send you a message." },
    ],
    questions: [
      { q: "What is the girl's name?", options: ["Anna", "Emma", "Olivia"] },
      { q: 'What does she say her email is?', options: ["anna@mail.com", "anna@school.edu", "anna@web.org"] },
      { q: 'Fill in the blank: "Can you ______ that, please?"', options: ["spell", "read", "repeat"] },
    ],
  },
  {
    dialogueNum: 3,
    title: "A secretary helps a new student with personal info.",
    lines: [
      { speaker: "Secretary", line: "Welcome to the school. I need some information, please." },
      { speaker: "Student", line: "Okay. I am ready." },
      { speaker: "Secretary", line: "How old are you?" },
      { speaker: "Student", line: "I am 19 years old." },
      { speaker: "Secretary", line: "And what is your address?" },
      { speaker: "Student", line: "I live on Oak Street." },
      { speaker: "Secretary", line: "Perfect. Here is your class schedule." },
      { speaker: "Student", line: "Thank you very much!" },
    ],
    questions: [
      { q: "The secretary asks for the student's...", options: ["age and address.", "hobbies and interests.", "favorite subjects."] },
      { q: 'What is the student\'s age?', options: ["18", "19", "20"] },
      { q: 'The student lives on...', options: ["Oak Street.", "Elm Street.", "Park Avenue."] },
    ],
  },
];

/* ===== FLASHCARD DATA ===== */
u1.vocabCards = [
  "Hello", "Goodbye", "Morning", "Name", "Nice",
  "Meet", "Yes", "No", "Please", "Thank you"
];
u1.idiomCards = [
  "Sit down", "What's up?"
];
u2.vocabCards = [
  "Age", "Country", "City", "Address", "Phone",
  "Email", "Single", "Married", "Spell"
];
u2.idiomCards = [
  "Fill out", "Nice to meet you"
];

/* ===== UNIT 3 DATA ===== */
const u3 = {};

u3.fillBlanks = [
  "___ is my book. (near)",
  "___ are your keys. (near)",
  "___ is your bag in the corner. (far)",
  "___ are my classmates next to me. (near)",
  "Look at ___ bird in the tree! (far)",
  "I like ___ flowers on this table. (near)",
  "___ are my parents in this photo. (near)",
  "Who is ___ person over there? (far)",
  "___ is a good song. (near)",
  "Can you see ___ house on the hill? (far)",
];

u3.pronounReplacements = [
  "(I) ___ mother is kind.",
  "(you) ___ brother is tall.",
  "(he) ___ sister is a doctor.",
  "(she) ___ father is a teacher.",
  "(we) ___ parents are happy.",
  "(they) ___ son is a student.",
  "(I) ___ family is big.",
  "(he) ___ name is Tom.",
  "(she) ___ daughter is five years old.",
  "(they) ___ daughter is very smart.",
];

u3.dialogue = [
  { speaker: "Anna", line: "Hello, Tom! Who is this in the photo?" },
  { speaker: "Tom", line: "This is my mother. Her name is Lisa." },
  { speaker: "Anna", line: "Nice! And who is that?" },
  { speaker: "Tom", line: "That is my father. His name is Mark." },
  { speaker: "Anna", line: "Do you have any brothers or sisters?" },
  { speaker: "Tom", line: "Yes. I have one brother and one sister." },
  { speaker: "Anna", line: "What are their names?" },
  { speaker: "Tom", line: "My brother is Jake and my sister is Emma." },
  { speaker: "Anna", line: "You have a nice family!" },
  { speaker: "Tom", line: "Thank you. These are my parents." },
];

u3.trueFalse = [
  "Tom's mother is named Lisa.",
  "Tom's father is named Mark.",
  "Tom has two brothers.",
  "Tom has one sister.",
  "Tom's parents are in the photo.",
];

u3.mcReading = [
  { q: "What is Tom's mother's name?", options: ["Lisa", "Emma", "Anna"] },
  { q: "How many brothers does Tom have?", options: ["One", "Two", "Three"] },
  { q: "What is Tom's sister's name?", options: ["Jake", "Emma", "Lisa"] },
];

u3.readingFill = [
  '"This is my {____}. Her name is Lisa."',
  '"That is my father. {____} name is Mark."',
  '"I have one brother and one {____}."',
  '"{____} are my parents."',
];

u3.listeningExercises = [
  {
    dialogueNum: 1,
    title: "A student shows a family photo.",
    lines: [
      { speaker: "Teacher", line: "Good morning! What is that in your hand?" },
      { speaker: "Student", line: "Good morning. This is a photo of my family." },
      { speaker: "Teacher", line: "Oh, nice! Who is this?" },
      { speaker: "Student", line: "This is my mother and this is my father." },
      { speaker: "Teacher", line: "And who is that?" },
      { speaker: "Student", line: "That is my brother. His name is Sam." },
      { speaker: "Teacher", line: "Do you have any sisters?" },
      { speaker: "Student", line: "No, I don't. I have one brother." },
    ],
    questions: [
      { q: "What is in the student's hand?", options: ["A book", "A photo", "A phone"] },
      { q: "What is the brother's name?", options: ["Sam", "The teacher", "The father"] },
      { q: "How many sisters does the student have?", options: ["One", "Two", "None"] },
    ],
  },
  {
    dialogueNum: 2,
    title: "Two friends talk about siblings.",
    lines: [
      { speaker: "Emma", line: "Do you have any brothers or sisters?" },
      { speaker: "Liam", line: "Yes, I have two sisters." },
      { speaker: "Emma", line: "Wow! What are their names?" },
      { speaker: "Liam", line: "Their names are Mia and Sophie." },
      { speaker: "Emma", line: "That is nice. I have one brother." },
      { speaker: "Liam", line: "What is his name?" },
      { speaker: "Emma", line: "His name is Ethan." },
      { speaker: "Liam", line: "Are these your sisters in the photo?" },
      { speaker: "Emma", line: "No, those are my cousins." },
    ],
    questions: [
      { q: "How many sisters does Liam have?", options: ["One", "Two", "Three"] },
      { q: "What is Emma's brother's name?", options: ["Mia", "Ethan", "Liam"] },
      { q: "Who are the people in Emma's photo?", options: ["Her sisters", "Her cousins", "Her parents"] },
    ],
  },
  {
    dialogueNum: 3,
    title: "A husband and wife talk about their son.",
    lines: [
      { speaker: "Sarah", line: "Look at this photo! Our son is so big now!" },
      { speaker: "Mike", line: "Yes, he is growing up so fast." },
      { speaker: "Sarah", line: "This is him at school with his friends." },
      { speaker: "Mike", line: "And who is that?" },
      { speaker: "Sarah", line: "That is his teacher, Mrs. Jones." },
      { speaker: "Mike", line: "Is this his classroom?" },
      { speaker: "Sarah", line: "Yes, these are his classmates." },
      { speaker: "Mike", line: "He looks happy. Like father, like son!" },
    ],
    questions: [
      { q: "Who is in the photo?", options: ["Sarah's husband", "Sarah's son", "Sarah's father"] },
      { q: "Who is Mrs. Jones?", options: ["The son's teacher", "The son's mother", "The son's friend"] },
      { q: "What does Mike say at the end?", options: ["Grow up", "Like father, like son", "Nice to meet you"] },
    ],
  },
];

u3.vocabCards = [
  "Mother", "Father", "Brother", "Sister", "Son",
  "Daughter", "Husband", "Wife", "Parents"
];
u3.idiomCards = [
  "Grow up", "Like father, like son"
];

function toFilename(word) {
  return word.toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderFlashcards(p) {
  var prefix = p === 'u1' ? 'u1' : p === 'u2' ? 'u2' : 'u3';
  var dir = p === 'u1' ? 'unit-1' : p === 'u2' ? 'unit-2' : 'unit-3';
  var data = p === 'u1' ? u1 : p === 'u2' ? u2 : u3;

  function renderGrid(id, cards, folder) {
    var grid = document.getElementById(prefix + '-' + id);
    if (!grid) return;
    cards.forEach(function (word) {
      var imgSrc = 'images/' + dir + '/' + prefix + '-' + folder + '-' + toFilename(word) + '.png';
      var item = document.createElement('div');
      item.className = 'flashcard-item';
      item.innerHTML = '<img src="' + imgSrc + '" alt="' + word + '" loading="lazy" /><div class="flashcard-label">' + word + '</div>';
      grid.appendChild(item);
    });
  }

  renderGrid('vocab-grid', data.vocabCards, 'vocab');
  renderGrid('idiom-grid', data.idiomCards, 'idiom');
}

/* ===== RENDER ENGINE ===== */
function blankHTML() {
  return '<span class="blank"></span>';
}

function renderUnit(p) {
  const data = p === 'u1' ? u1 : p === 'u2' ? u2 : u3;

  // Fill in the Blanks
  const fb = document.getElementById(p + '-fill-blanks');
  if (fb) {
    data.fillBlanks.forEach((item) => {
      const li = document.createElement('li');
      const parts = item.split('___');
      li.innerHTML = parts[0] + blankHTML() + (parts[1] || '');
      fb.appendChild(li);
    });
  }

  // Pronoun / Possessive replacements
  const pr = document.getElementById(p + '-pronoun-replacements');
  if (pr) {
    data.pronounReplacements.forEach((item) => {
      const li = document.createElement('li');
      const parts = item.split('___');
      li.innerHTML = parts[0] + blankHTML() + (parts[1] || '');
      pr.appendChild(li);
    });
  }

  // Reading dialogue
  const rd = document.getElementById(p + '-reading-dialogue');
  if (rd) {
    data.dialogue.forEach((d) => {
      const div = document.createElement('div');
      div.className = 'dialogue-line';
      div.innerHTML = '<div class="dialogue-speaker">' + d.speaker + '</div><div class="dialogue-text">' + d.line + '</div>';
      rd.appendChild(div);
    });
  }

  // True / False
  const tf = document.getElementById(p + '-true-false');
  if (tf) {
    data.trueFalse.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = '<span>' + item + '</span><span class="tf-tag">( True / False )</span>';
      tf.appendChild(li);
    });
  }

  // Multiple Choice Reading
  const mc = document.getElementById(p + '-mc-reading');
  if (mc) {
    data.mcReading.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'mc-block';
      let oh = '<ul class="mc-options">';
      item.options.forEach((opt, j) => {
        oh += '<li><span class="mc-letter">' + String.fromCharCode(97 + j) + '</span><span>' + opt + '</span></li>';
      });
      oh += '</ul>';
      div.innerHTML = '<div class="mc-question"><span class="q-num">' + (i + 5) + '.</span>' + item.q + '</div>' + oh;
      mc.appendChild(div);
    });
  }

  // Reading Fill
  const rf = document.getElementById(p + '-reading-fill');
  if (rf) {
    data.readingFill.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = item.replace('{____}', blankHTML());
      rf.appendChild(li);
    });
  }

  // Listening helper
  function renderLD(ex, container) {
    const card = document.createElement('div');
    card.className = 'listening-card';
    let h = '<div class="lh-header"><span class="lh-bar"></span>Dialogue ' + ex.dialogueNum + '</div>';
    h += '<div class="exercise-card"><p class="exercise-instr">' + ex.title + '</p>';
    ex.questions.forEach((q, idx) => {
      const n = idx + 1;
      if (q.isFill) {
        h += '<div class="mc-block"><div class="mc-question"><span class="q-num">' + n + '.</span>' + q.q + '</div></div>';
      } else if (q.isTF) {
        h += '<div class="mc-block"><div class="mc-question"><span class="q-num">' + n + '.</span>' + q.q + '</div><span class="tf-tag" style="margin-left:2rem;">( True / False )</span></div>';
      } else {
        h += '<div class="mc-block"><div class="mc-question"><span class="q-num">' + n + '.</span>' + q.q + '</div><ul class="mc-options">';
        q.options.forEach((opt, j) => {
          h += '<li><span class="mc-letter">' + String.fromCharCode(97 + j) + '</span><span>' + opt + '</span></li>';
        });
        h += '</ul></div>';
      }
    });
    h += '</div>';
    card.innerHTML = h;
    container.appendChild(card);
  }

  // Listening exercises — Dialogues 1 & 2 (Page 6)
  const lc1 = document.getElementById(p + '-listening-exercises');
  if (lc1) {
    data.listeningExercises.slice(0, 2).forEach(function (ex) { renderLD(ex, lc1); });
  }

  // Listening exercise — Dialogue 3 (Page 7)
  const lc2 = document.getElementById(p + '-listening-dialogue-3');
  if (lc2) {
    data.listeningExercises.slice(2).forEach(function (ex) { renderLD(ex, lc2); });
  }
}

/* ===== UNIT TOGGLE ===== */
function switchUnit(n) {
  document.querySelectorAll('.unit').forEach(function (u) { u.classList.remove('active'); });
  document.getElementById('unit-' + n).classList.add('active');
  document.querySelectorAll('.unit-btn').forEach(function (b) { b.classList.remove('active'); });
  document.querySelector('.unit-btn[data-unit="' + n + '"]').classList.add('active');
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function () {
  renderFlashcards('u1');
  renderUnit('u1');
  renderFlashcards('u2');
  renderUnit('u2');
  renderFlashcards('u3');
  renderUnit('u3');
});
