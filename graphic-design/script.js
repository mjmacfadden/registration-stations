const baseQuizData = [
    {
        id: 1,
        event: "A juice brand replaces its iconic 'straw stuck in an orange' packaging with a minimalist photo of just a glass of juice, removing nearly all of its recognizable visual cues.",
        company: "Tropicana (2009 Packaging Redesign)",
        logoBefore: "logos/tropicana-2009-before.png",
        logoAfter: "logos/tropicana-2009-after.webp",
        correctChoice: "REVERT",
        explanation: "Shoppers could no longer spot Tropicana at a glance on crowded shelves. Sales dropped over 20% in the two months after launch, and Tropicana reverted to its original packaging within weeks.",
        context: "Losing shelf recognizability is especially risky for a product bought quickly out of habit."
    },
    {
        id: 2,
        event: "An apparel retailer swaps its classic navy box with white serif lettering for a generic sans-serif wordmark with a tiny blue gradient square, with no advance warning to customers.",
        company: "Gap Inc. (2010 Logo Redesign)",
        logoBefore: "logos/gap-2010-before.svg",
        logoAfter: "logos/gap-2010-after.svg",
        correctChoice: "REVERT",
        explanation: "The new logo sparked immediate, intense public mockery online, with critics calling it generic and forgettable. Facing overwhelming backlash, Gap reverted to its classic logo within about a week.",
        context: "Sudden changes to a decades-old, beloved logo with zero customer input tend to trigger fast backlash."
    },
    {
        id: 3,
        event: "A public university system scraps its historic seal in favor of a single abstract monogram shape meant to represent the whole system, intended to unify branding across all its campuses.",
        company: "University of California (2012 Monogram Logo)",
        logoBefore: "logos/uc-2012-before.svg",
        logoAfter: "logos/uc-2012-after.jpg",
        correctChoice: "REVERT",
        explanation: "Students, faculty, and alumni launched petitions calling the new mark ugly and generic; it was widely mocked online. The university dropped the new logo for general use within days of the backlash.",
        context: "Institutions with deep heritage and emotionally invested communities face amplified backlash to abrupt identity changes."
    },
    {
        id: 4,
        event: "A department store chain discontinues its iconic coupon-driven pricing identity in favor of a stripped-down 'everyday low price' branding and visual overhaul, with no coupons at all.",
        company: "JCPenney (\"Fair and Square\" 2012 Rebrand)",
        logoBefore: "logos/jcpenney-2012-before.svg",
        logoAfter: "logos/jcpenney-2012-after.svg",
        correctChoice: "REVERT",
        explanation: "Loyal customers who loved hunting for deals felt alienated; sales collapsed roughly 25% that year. JCPenney reversed the new pricing and branding strategy, and the CEO was fired within 17 months.",
        context: "A rebrand that removes a core part of customers' shopping ritual can backfire even if the new look is more 'modern.'"
    },
    {
        id: 5,
        event: "A soft drink company spends over $1 million developing a new globe-shaped logo with a stylized 'smile,' subtly tied to geometric design theory, drawing public mockery for the cost.",
        company: "Pepsi (2008 Logo Redesign)",
        logoBefore: "logos/pepsi-2008-before.svg",
        logoAfter: "logos/pepsi-2008-after.svg",
        correctChoice: "KEEP",
        explanation: "Despite ridicule over the price tag and a leaked 27-page brand strategy document, Pepsi kept the new globe logo and built over a decade of marketing and packaging around it.",
        context: "Initial media mockery of cost or concept doesn't always predict whether a company sticks with a redesign."
    },
    {
        id: 6,
        event: "A photo-sharing app replaces its detailed, skeuomorphic retro camera icon with a flat, simplified gradient camera icon overnight, with no warning to its hundreds of millions of users.",
        company: "Instagram (2016 App Icon Redesign)",
        logoBefore: "logos/instagram-2016-before.svg",
        logoAfter: "logos/instagram-2016-after.svg",
        correctChoice: "KEEP",
        explanation: "The new icon triggered an avalanche of memes and complaints calling it a downgrade. Instagram kept the flat redesign anyway, and it has since become one of the most recognized app icons in the world.",
        context: "Flat, simplified design language was a broader industry trend at the time, which can outlast initial user resistance."
    },
    {
        id: 7,
        event: "A home-sharing startup launches an abstract new logo symbol meant to represent belonging, which internet commenters immediately begin comparing to various body parts.",
        company: "Airbnb (\"Bélo\" Symbol, 2014)",
        logoBefore: "logos/airbnb-2014-before.svg",
        logoAfter: "logos/airbnb-2014-after.svg",
        correctChoice: "KEEP",
        explanation: "Despite the initial mockery and memes, Airbnb kept the Bélo symbol as a core part of its identity, and it has since become a globally recognized mark central to the brand.",
        context: "Abstract symbolic logos often face a rocky adjustment period before audiences internalize their meaning."
    },
    {
        id: 8,
        event: "A social media company's new owner abruptly replaces its widely-recognized bird logo and name with a single black-and-white letter, discarding over a decade of brand equity.",
        company: "Twitter → \"X\" (2023 Rebrand)",
        logoBefore: "logos/twitter-x-2023-before.svg",
        logoAfter: "logos/twitter-x-2023-after.svg",
        correctChoice: "KEEP",
        explanation: "The rebrand was hugely polarizing and widely criticized by branding experts for discarding strong brand equity, but ownership kept the new identity rather than reverting it.",
        context: "Ownership conviction can keep a controversial rebrand in place even amid strong public and expert criticism."
    },
    {
        id: 9,
        event: "A snack food company redesigns its animal-shaped cracker box art to show the animals roaming in open fields, after years of pressure from animal welfare groups over the previous 'circus train cage' imagery.",
        company: "Nabisco / Mondelez (\"Animal Crackers,\" 2018)",
        logoBefore: "logos/animal-crackers-2018-before.svg",
        logoAfter: "logos/animal-crackers-2018-after.png",
        correctChoice: "KEEP",
        explanation: "The redesign was praised by advocacy groups like PETA and was welcomed by the public as a positive, values-aligned update. The new box art was kept permanently.",
        context: "Redesigns that respond to genuine social concerns and are well-received by advocacy groups tend to stick."
    },
    {
        id: 10,
        event: "A search engine giant replaces its distinctive serif wordmark with a custom flat, geometric sans-serif logo, aiming for a cleaner look optimized for small mobile screens.",
        company: "Google (2015 Logo Redesign)",
        logoBefore: "logos/google-2015-before.svg",
        logoAfter: "logos/google-2015-after.svg",
        correctChoice: "KEEP",
        explanation: "While some longtime users noted the change, the reaction was mild compared to other redesigns, and the flat wordmark was kept and rolled out consistently across all of Google's products.",
        context: "Redesigns driven by clear functional reasoning (like mobile legibility) tend to face less backlash."
    },
    {
        id: 11,
        event: "An oil company rebrands with a green-and-yellow sunburst logo and a new slogan emphasizing clean energy, years before a major oil spill makes critics call the imagery deceptive 'greenwashing.'",
        company: "BP (\"Helios\" Sunburst Rebrand, 2000)",
        logoBefore: "logos/bp-2000-before.svg",
        logoAfter: "logos/bp-2000-after.svg",
        correctChoice: "KEEP",
        explanation: "Despite intense criticism of the imagery as misleading after the 2010 Deepwater Horizon spill, BP kept the Helios sunburst logo rather than reverting to its older shield design.",
        context: "Companies sometimes keep a brand identity even amid major reputational controversy if reverting would draw even more attention to the issue."
    },
    {
        id: 12,
        event: "A technology conglomerate renames its parent holding company to a single new name built around a 3D infinity-loop-style logo, while leaving its most popular consumer app's name and logo completely unchanged.",
        company: "Facebook → \"Meta\" (2021 Corporate Rebrand)",
        logoBefore: "logos/meta-2021-before.svg",
        logoAfter: "logos/meta-2021-after.svg",
        correctChoice: "KEEP",
        explanation: "Despite widespread jokes and skepticism about the strategic shift, the company kept the Meta corporate name and logo going forward, while the Facebook app itself kept its separate, unchanged branding.",
        context: "A parent-company rebrand doesn't have to affect the branding of its individual consumer-facing products."
    }
];

let activeQuizData = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;
let hintUsedCurrentQuestion = false;
let answers = []; // answers[i] = { choice, hint } once a question is answered

// DOM Elements
const questionCountEl = document.getElementById('question-count');
const progressFillEl = document.getElementById('progress-fill');
const eventTextEl = document.getElementById('event-text');
const companyNameEl = document.getElementById('company-name');
const companyContextEl = document.getElementById('company-context');
const hintBtnEl = document.getElementById('hint-btn');
const scoreDisplayEl = document.getElementById('score-display');

const keepBtn = document.getElementById('keep-btn');
const scrapBtn = document.getElementById('scrap-btn');

const feedbackCard = document.getElementById('feedback-card');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const quizCard = document.getElementById('quiz-card');
const resultsCard = document.getElementById('results-card');
const finalScoreEl = document.getElementById('final-score');
const scoreRatingEl = document.getElementById('score-rating');

// Fisher-Yates Shuffle Function
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initQuiz() {
    activeQuizData = shuffleArray(baseQuizData);
    currentIndex = 0;
    score = 0;
    answers = [];
    scoreDisplayEl.innerHTML = `0 <span class="text-sm font-semibold text-slate-500">/ ${activeQuizData.length}</span>`;
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    hintUsedCurrentQuestion = false;
    const q = activeQuizData[currentIndex];

    questionCountEl.textContent = `Question ${currentIndex + 1} of ${activeQuizData.length}`;
    progressFillEl.style.width = `${((currentIndex + 1) / activeQuizData.length) * 100}%`;

    eventTextEl.textContent = q.event;
    companyNameEl.textContent = q.company;

    setLogo('logo-before', q.logoBefore, q.company + ' logo before the redesign');
    setLogo('logo-after', q.logoAfter, q.company + ' logo after the redesign');

    companyContextEl.textContent = q.context;
    companyContextEl.classList.add('hidden');
    hintBtnEl.classList.remove('hidden');

    keepBtn.disabled = false;
    scrapBtn.disabled = false;

    feedbackCard.className = 'hidden rounded-xl p-5 border';

    if (prevBtn) prevBtn.classList.toggle('invisible', currentIndex === 0);
    nextBtn.classList.add('invisible'); // answer required to advance

    // Revisiting an answered question: show it locked with its feedback.
    const prior = answers[currentIndex];
    if (prior) {
        hasAnswered = true;
        hintUsedCurrentQuestion = prior.hint;
        if (prior.hint) { hintBtnEl.classList.add('hidden'); companyContextEl.classList.remove('hidden'); }
        keepBtn.disabled = true;
        scrapBtn.disabled = true;
        showFeedback(q, prior.choice === q.correctChoice, prior.hint);
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function revealHint() {
    if (hintUsedCurrentQuestion) return;
    hintUsedCurrentQuestion = true;

    hintBtnEl.classList.add('hidden');
    companyContextEl.classList.remove('hidden');
}

function makeChoice(choice) {
    if (hasAnswered) return;
    hasAnswered = true;

    const q = activeQuizData[currentIndex];
    const isCorrect = choice === q.correctChoice;

    keepBtn.disabled = true;
    scrapBtn.disabled = true;

    answers[currentIndex] = { choice: choice, hint: hintUsedCurrentQuestion };

    if (isCorrect) {
        score += hintUsedCurrentQuestion ? 0.5 : 1.0;
        scoreDisplayEl.innerHTML = `${score} <span class="text-sm font-semibold text-slate-500">/ ${activeQuizData.length}</span>`;
    }
    showFeedback(q, isCorrect, hintUsedCurrentQuestion);
}

function showFeedback(q, isCorrect, usedHint) {
    if (isCorrect) {
        feedbackCard.className = 'rounded-xl p-5 border bg-emerald-500/10 border-emerald-500/40 text-emerald-200';
        feedbackIcon.textContent = '✓';
        feedbackTitle.textContent = usedHint
            ? 'Correct Prediction! (+0.5 pts with Hint)'
            : 'Correct Prediction! (+1.0 pt)';
    } else {
        feedbackCard.className = 'rounded-xl p-5 border bg-rose-500/10 border-rose-500/40 text-rose-200';
        feedbackIcon.textContent = '✕';
        feedbackTitle.textContent = 'Missed Prediction (+0 pts)';
    }

    feedbackExplanation.textContent = q.explanation;
    feedbackCard.classList.remove('hidden');
    nextBtn.classList.remove('invisible');

    if (currentIndex === activeQuizData.length - 1) {
        nextBtn.textContent = 'View Final Results';
    } else {
        nextBtn.textContent = 'Next Logo →';
    }
}

function nextQuestion() {
    if (currentIndex < activeQuizData.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizCard.classList.add('hidden');
    resultsCard.classList.remove('hidden');

    finalScoreEl.textContent = `${score} / ${activeQuizData.length}`;

    let rating = "";
    if (score >= 10) {
        rating = "🎨 Creative Director!";
    } else if (score >= 7) {
        rating = "🖌️ Senior Brand Designer";
    } else if (score >= 5) {
        rating = "✏️ Junior Designer";
    } else {
        rating = "📉 Back to Design 101";
    }

    scoreRatingEl.textContent = rating;
}

function restartQuiz() {
    resultsCard.classList.add('hidden');
    quizCard.classList.remove('hidden');

    initQuiz();
}

// Timer Logic (shared pattern with the other Titan School of Business stations)
let timerSeconds = 420; // 7 Minutes
let timerInterval = null;
let timerRunning = false;

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        document.getElementById('timer-play-icon').setAttribute('data-lucide', 'pause');
        lucide.createIcons();
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                pauseTimer();
                alert("7 minutes are up! Wrap up your current scenario and review your score.");
            }
        }, 1000);
    }
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('timer-play-icon').setAttribute('data-lucide', 'play');
    lucide.createIcons();
}

function toggleTimer() {
    if (timerRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 420;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    document.getElementById('timer-display').innerText =
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Initial Start
window.onload = function () {
    lucide.createIcons();
    // Timer waits for the student to press Play (see station directions).
    initQuiz();
};

// Show a before/after logo, or a placeholder when no "before" image is available.
function setLogo(id, src, alt) {
    const img = document.getElementById(id);
    const missing = document.getElementById(id + '-missing');
    if (!img) return;
    if (src) { img.src = src; img.alt = alt; img.classList.remove('hidden'); if (missing) missing.classList.add('hidden'); }
    else { img.removeAttribute('src'); img.alt = ''; img.classList.add('hidden'); if (missing) missing.classList.remove('hidden'); }
}
