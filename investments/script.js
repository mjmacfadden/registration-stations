const baseQuizData = [
    {
        id: 1,
        event: "The 2020 COVID-19 Pandemic lockdowns begin worldwide in March 2020.",
        company: "Zoom Video Communications (ZM)",
        correctChoice: "BUY",
        explanation: "Zoom became essential for remote work, education, and social connection during lockdowns. Its stock price surged from around $100 in early 2020 to over $500 by late 2020.",
        context: "Global lockdowns forced millions to work and study from home practically overnight."
    },
    {
        id: 2,
        event: "The U.S. passes the 18th Amendment (Prohibition) in 1919, banning alcohol manufacturing and sales.",
        company: "Anheuser-Busch",
        correctChoice: "BUY",
        explanation: "Despite the ban on beer, Anheuser-Busch adapted rapidly by pivoting to ice cream, soft drinks, yeast, and Bevo (a non-alcoholic cereal beverage), allowing the company to survive Prohibition while competitors went bankrupt.",
        context: "Prohibition destroyed thousands of breweries, but top-tier management and product diversification saved the industry leader."
    },
    {
        id: 3,
        event: "Apple launches the original iPhone in June 2007.",
        company: "BlackBerry (Research In Motion / RIM)",
        correctChoice: "SELL",
        explanation: "BlackBerry management underestimated the touch-screen smartphone trend and software ecosystem model. Over the next decade, RIM lost its market-leading position and its stock collapsed.",
        context: "The iPhone fundamentally disrupted the mobile phone market, leaving physical-keyboard enterprise phones behind."
    },
    {
        id: 4,
        event: "The OPEC Oil Embargo of 1973 causes oil prices to quadruple.",
        company: "General Motors (GM)",
        correctChoice: "SELL",
        explanation: "American automakers relied heavily on large, fuel-inefficient V8 gas-guzzlers. Consumers shifted rapidly to smaller, fuel-efficient Japanese cars (Toyota, Honda), causing GM's market share and profitability to slump.",
        context: "Gas shortages and soaring prices created an immediate consumer pivot away from heavy domestic automobiles."
    },
    {
        id: 5,
        event: "World War II outbreak and U.S. entry in December 1941.",
        company: "Ford Motor Company",
        correctChoice: "BUY",
        explanation: "Civilian automobile production stopped, but Ford pivoted entirely to wartime manufacturing—producing B-24 Liberator bombers, tanks, and jeeps under lucrative government cost-plus contracts.",
        context: "U.S. defense spending surged enormously, transforming industrial giants into key defense producers."
    },
    {
        id: 6,
        event: "Netflix transitions away from DVD mailers toward digital streaming in 2011 (including the Qrikey/price hike misstep).",
        company: "Blockbuster Video",
        correctChoice: "SELL",
        explanation: "Blockbuster failed to capitalize on streaming and digital delivery, burdened by retail leases and late fees. By 2010, Blockbuster filed for bankruptcy, while streaming took over the entertainment landscape.",
        context: "High-speed internet adoption created a permanent shift from physical video rental stores to on-demand streaming."
    },
    {
        id: 7,
        event: "The launch of Sputnik by the Soviet Union in 1957 kicks off the Space Race.",
        company: "Boeing",
        correctChoice: "BUY",
        explanation: "The Space Race triggered massive NASA and Defense spending. Aerospace companies like Boeing received huge federal contracts for missiles, rockets, and NASA lunar missions.",
        context: "Cold War national security priorities drove unprecedented government research and aerospace funding."
    },
    {
        id: 8,
        event: "The 2011 Fukushima Daiichi nuclear disaster following a massive earthquake and tsunami in Japan.",
        company: "Cameco Corporation (Global Uranium Producer)",
        correctChoice: "SELL",
        explanation: "Japan shut down its entire fleet of nuclear reactors, and countries like Germany accelerated nuclear phase-outs. Uranium spot prices plummeted, causing uranium miners' stocks to drop sharply for years.",
        context: "Global sentiment and government policy abruptly turned against nuclear energy generation."
    },
    {
        id: 9,
        event: "The passage of the U.S. Interstate Highway Act of 1956.",
        company: "Holiday Inn",
        correctChoice: "BUY",
        explanation: "The massive expansion of high-speed highway networks revolutionized American road trips and logistics, fueling rapid growth for motel chains, gas stations, and roadside diners situated near interstate exits.",
        context: "Over 40,000 miles of highway were built, creating a boom in automobile tourism and commercial travel."
    },
    {
        id: 10,
        event: "The Rise of E-commerce and Amazon's dominant growth during the 2010s.",
        company: "Sears Holdings",
        correctChoice: "SELL",
        explanation: "Sears failed to modernize its legendary catalog heritage for the digital age, underinvested in stores, and suffered as shoppers moved online or to big-box retailers. Sears eventually declared bankruptcy in 2018.",
        context: "Foot traffic at suburban malls declined as online shopping and fast shipping became the industry standard."
    },
    {
        id: 11,
        event: "The Dot-Com Crash begins in March 2000 as tech valuations collapse.",
        company: "Cisco Systems",
        correctChoice: "SELL",
        explanation: "Cisco was the darling of the internet backbone boom, briefly becoming the most valuable company in the world. When telecom capital spending dried up, Cisco stock dropped nearly 90%.",
        context: "Overinvestment in networking hardware caused telecom demand to freeze overnight."
    },
    {
        id: 12,
        event: "The launch of commercial digital photography in the early 2000s.",
        company: "Eastman Kodak",
        correctChoice: "SELL",
        explanation: "Despite inventing the digital camera in 1975, Kodak delayed commercializing it to protect its high-margin photographic film business, eventually filing for bankruptcy in 2012.",
        context: "Digital sensors rendered consumer film rolls obsolete in less than a decade."
    },
    {
        id: 13,
        event: "The 2008 U.S. Housing Market Collapse and Subprime Mortgage Crisis.",
        company: "Lehman Brothers",
        correctChoice: "SELL",
        explanation: "Heavily leveraged in mortgage-backed securities, Lehman Brothers suffered catastrophic write-downs and filed for the largest bankruptcy in U.S. history in September 2008.",
        context: "Wall Street investment banks faced unprecedented liquidity freezes from toxic mortgage assets."
    },
    {
        id: 14,
        event: "The FDA approves Penicillin for mass production during World War II in 1944.",
        company: "Pfizer",
        correctChoice: "BUY",
        explanation: "Pfizer mastered deep-tank fermentation technology to mass-produce penicillin, supplying Allied troops and transforming the company into an international pharmaceutical giant.",
        context: "Mass production techniques for lifesaving antibiotics revolutionized medical treatment."
    },
    {
        id: 15,
        event: "The Commercial Aviation Deregulation Act passes in the U.S. in 1978.",
        company: "Southwest Airlines",
        correctChoice: "BUY",
        explanation: "Deregulation allowed Southwest to expand its point-to-point, low-cost carrier model nationwide, undercutting legacy carriers hampered by expensive hub-and-spoke networks.",
        context: "Removing government price controls allowed nimble discount airlines to capture market share."
    },
    {
        id: 16,
        event: "The U.S. ban on cigarette advertising on television and radio takes effect in 1971.",
        company: "Altria / Philip Morris",
        correctChoice: "BUY",
        explanation: "Surprisingly, the ad ban saved tobacco companies millions in marketing costs and locked in dominant brand market shares, enabling sky-high cash flows and market outperformance for decades.",
        context: "Banning ads prevented new entrants from building market share, protecting established tobacco monopolies."
    },
    {
        id: 17,
        event: "The UK votes to leave the European Union (Brexit referendum) in June 2016.",
        company: "British Pound Sterling (GBP)",
        correctChoice: "SELL",
        explanation: "Uncertainty surrounding trade barriers, financial access, and political instability triggered a sharp sell-off, pushing the British Pound to multi-decade lows against the US dollar.",
        context: "Leaving the EU single market threatened trade disruptions and foreign investment in the UK."
    },
    {
        id: 18,
        event: "The 2021 global semiconductor chip shortage impacts global manufacturing.",
        company: "Taiwan Semiconductor Manufacturing Co. (TSMC)",
        correctChoice: "BUY",
        explanation: "As the world's primary foundry for advanced microchips, TSMC commanded immense pricing power and saw record demand from automotive, electronics, and cloud computing sectors.",
        context: "Extreme demand coupled with supply chain bottlenecks highlighted global reliance on leading chip foundries."
    },
    {
        id: 19,
        event: "The California Gold Rush of 1849.",
        company: "Levi Strauss & Co.",
        correctChoice: "BUY",
        explanation: "Levi Strauss moved to San Francisco during the Gold Rush and created durable denim pants reinforced with copper rivets for miners—a lucrative 'pick and shovel' business model.",
        context: "Supplying essential goods and clothing to prospectors yielded far more consistent wealth than mining itself."
    },
    {
        id: 20,
        event: "The 2022 surge in generative AI models following the public release of ChatGPT.",
        company: "NVIDIA (NVDA)",
        correctChoice: "BUY",
        explanation: "NVIDIA's specialized graphics processors (GPUs) became the indispensable infrastructure powering large language models, sparking unprecedented datacenter revenue growth.",
        context: "Training advanced AI models required thousands of high-performance GPUs."
    }
];

let activeQuizData = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;
let hintUsedCurrentQuestion = false;

// DOM Elements
const questionCountEl = document.getElementById('question-count');
const progressFillEl = document.getElementById('progress-fill');
const eventTextEl = document.getElementById('event-text');
const companyNameEl = document.getElementById('company-name');
const companyContextEl = document.getElementById('company-context');
const hintBtnEl = document.getElementById('hint-btn');
const scoreDisplayEl = document.getElementById('score-display');

const buyBtn = document.getElementById('buy-btn');
const sellBtn = document.getElementById('sell-btn');

const feedbackCard = document.getElementById('feedback-card');
const feedbackHeader = document.getElementById('feedback-header');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextBtn = document.getElementById('next-btn');

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
    scoreDisplayEl.innerHTML = `0 <span class="text-sm font-semibold text-slate-500">/ ${activeQuizData.length}</span>`;
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    hintUsedCurrentQuestion = false;
    const q = activeQuizData[currentIndex];

    // UI Updates
    questionCountEl.textContent = `Question ${currentIndex + 1} of ${activeQuizData.length}`;
    progressFillEl.style.width = `${((currentIndex + 1) / activeQuizData.length) * 100}%`;
    
    eventTextEl.textContent = q.event;
    companyNameEl.textContent = q.company;
    
    // Reset Hint
    companyContextEl.textContent = q.context;
    companyContextEl.classList.add('hidden');
    hintBtnEl.classList.remove('hidden');

    // Reset Buttons & Feedback
    buyBtn.disabled = false;
    sellBtn.disabled = false;

    feedbackCard.className = 'hidden rounded-xl p-5 border';
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

    buyBtn.disabled = true;
    sellBtn.disabled = true;

    if (isCorrect) {
        const pointsEarned = hintUsedCurrentQuestion ? 0.5 : 1.0;
        score += pointsEarned;
        scoreDisplayEl.innerHTML = `${score} <span class="text-sm font-semibold text-slate-500">/ ${activeQuizData.length}</span>`;

        feedbackCard.className = 'rounded-xl p-5 border bg-emerald-500/10 border-emerald-500/40 text-emerald-200';
        feedbackIcon.textContent = '✓';
        feedbackTitle.textContent = hintUsedCurrentQuestion 
            ? 'Correct Decision! (+0.5 pts with Hint)' 
            : 'Correct Decision! (+1.0 pt)';
    } else {
        feedbackCard.className = 'rounded-xl p-5 border bg-rose-500/10 border-rose-500/40 text-rose-200';
        feedbackIcon.textContent = '✕';
        feedbackTitle.textContent = 'Incorrect Choice (+0 pts)';
    }

    feedbackExplanation.textContent = q.explanation;
    feedbackCard.classList.remove('hidden');

    if (currentIndex === activeQuizData.length - 1) {
        nextBtn.textContent = 'View Final Results';
    } else {
        nextBtn.textContent = 'Next Question →';
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
    if (score >= 18) {
        rating = "🚀 Wall Street Legend!";
    } else if (score >= 14) {
        rating = "📊 Expert Market Analyst";
    } else if (score >= 10) {
        rating = "📈 Average Investor";
    } else {
        rating = "📉 Back to Financial History Class";
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
                alert("7 minutes are up! Wrap up your current question and review your score.");
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
    startTimer();
    initQuiz();
};
