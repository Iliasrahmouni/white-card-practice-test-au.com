// Australian White Card Practice Test - Main Logic
// Programmatic SEO & Quiz Game Logic

// State Regulator Dictionary
const stateRegulators = {
    'nsw': 'SafeWork NSW',
    'vic': 'WorkSafe Victoria',
    'qld': 'WorkSafe Queensland',
    'wa': 'WorkSafe WA',
    'sa': 'SafeWork SA',
    'act': 'WorkSafe ACT',
    'default': 'Safe Work Australia'
};

// State Display Names
const stateNames = {
    'nsw': 'NSW',
    'vic': 'VIC',
    'qld': 'QLD',
    'wa': 'WA',
    'sa': 'SA',
    'act': 'ACT',
    'default': 'Australia'
};

// Parse URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get current state from URL
function getCurrentState() {
    const state = getURLParameter('state');
    return state && stateRegulators[state.toLowerCase()] ? state.toLowerCase() : 'default';
}

// Apply Programmatic SEO
function applySEO() {
    const state = getCurrentState();
    const stateName = stateNames[state];
    const regulator = stateRegulators[state];

    // Update document title (keep keyword-rich)
    document.title = `FREE White Card Practice Test ${stateName} 2025 | Official CPCCWHS1001 Questions`;

    // Update meta description (expanded to 150-160 chars)
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', `Pass your ${stateName} White Card test with our free practice test. 240 official questions based on ${regulator} standards. Prepare for CPCCWHS1001 certification.`);
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', `FREE White Card Practice Test ${stateName} 2025`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', `Pass your ${stateName} White Card test. 240 official questions based on ${regulator} standards.`);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && state !== 'default') {
        canonical.setAttribute('href', `${window.location.origin}${window.location.pathname}?state=${state}`);
    }
    
    // Update hreflang tags for state variations
    const hreflangTags = [
        { state: 'nsw', code: 'en-au' },
        { state: 'vic', code: 'en-au' },
        { state: 'qld', code: 'en-au' },
        { state: 'wa', code: 'en-au' },
        { state: 'sa', code: 'en-au' },
        { state: 'act', code: 'en-au' }
    ];
    
    // Remove existing hreflang tags
    document.querySelectorAll('link[hreflang]').forEach(tag => {
        if (tag.getAttribute('hreflang') !== 'en-au' && tag.getAttribute('hreflang') !== 'x-default') {
            tag.remove();
        }
    });
    
    // Add state-specific hreflang tags
    hreflangTags.forEach(({ state: s, code }) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', code);
        link.setAttribute('href', `${window.location.origin}${window.location.pathname}?state=${s}`);
        document.head.appendChild(link);
    });

    // Update H1
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = `White Card Practice Test ${stateName}`;
    }

    // Update SEO text block
    const seoText = document.getElementById('seo-text');
    if (seoText) {
        seoText.querySelector('p').textContent = `This practice test helps you prepare for the CPCCWHS1001 unit in ${stateName}, regulated by ${regulator}.`;
    }
}

// Quiz State Management
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let isAnswered = false;

// Initialize Quiz
function initQuiz() {
    // Select 40 random questions from the pool
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    currentQuestions = shuffled.slice(0, 40);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    isAnswered = false;

    showScreen('quiz-screen');
    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    isAnswered = false;

    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentQuestions.length;

    // Display question
    document.getElementById('question-text').textContent = question.text;

    // Clear and populate options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.dataset.index = index;
        optionBtn.addEventListener('click', () => handleAnswer(index, question));
        optionsContainer.appendChild(optionBtn);
    });

    // Hide explanation and next button
    document.getElementById('explanation').textContent = '';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

// Handle Answer Selection
function handleAnswer(selectedIndex, question) {
    if (isAnswered) return;

    isAnswered = true;
    const optionButtons = document.querySelectorAll('.option-btn');
    const explanationDiv = document.getElementById('explanation');
    const nextBtn = document.getElementById('next-btn');

    // Store user answer
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: selectedIndex === question.correct
    });

    // Check if correct
    if (selectedIndex === question.correct) {
        // Correct answer
        optionButtons[selectedIndex].classList.add('correct');
        score++;
    } else {
        // Wrong answer
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[question.correct].classList.add('correct');
    }

    // Disable all buttons
    optionButtons.forEach(btn => {
        btn.disabled = true;
    });

    // Show explanation
    explanationDiv.textContent = question.explanation;
    explanationDiv.style.display = 'block';

    // Show next button
    nextBtn.style.display = 'block';
}

// Move to Next Question
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Show Results
function showResults() {
    showScreen('result-screen');

    const percentage = Math.round((score / currentQuestions.length) * 100);
    const scorePercentage = document.getElementById('score-percentage');
    const scoreText = document.getElementById('score-text');
    const passFailMessage = document.getElementById('pass-fail-message');

    scorePercentage.textContent = percentage + '%';
    scoreText.textContent = `You got ${score} out of ${currentQuestions.length} questions correct.`;

    // Update score circle color
    const scoreCircle = document.querySelector('.score-circle');
    if (percentage === 100) {
        scoreCircle.style.borderColor = '#28a745';
        scoreCircle.style.color = '#28a745';
        passFailMessage.textContent = '🎉 Perfect Score! You are ready for your White Card test!';
        passFailMessage.className = 'pass-fail-message pass';
    } else if (percentage >= 80) {
        scoreCircle.style.borderColor = '#FFC107';
        scoreCircle.style.color = '#FFC107';
        passFailMessage.textContent = '👍 Good effort! Review the incorrect answers and try again.';
        passFailMessage.className = 'pass-fail-message warning';
    } else {
        scoreCircle.style.borderColor = '#dc3545';
        scoreCircle.style.color = '#dc3545';
        passFailMessage.textContent = '📚 Keep studying! Review all questions and try again.';
        passFailMessage.className = 'pass-fail-message fail';
    }
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}


// Google Consent Mode update helper
function onUserAcceptsCookies() {
    if (typeof gtag === "function") {
        gtag("consent", "update", {
            "ad_storage": "granted",
            "ad_user_data": "granted",
            "ad_personalization": "granted",
            "analytics_storage": "granted"
        });
    }
    if (window.dataLayer) {
        window.dataLayer.push({ event: "consent_update" });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Apply SEO on load
    applySEO();

    // Start button
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', initQuiz);
    }

    // Next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    // Restart button
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            showScreen('start-screen');
        });
    }

    // Cookie banner
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const COOKIE_KEY = 'wc_cookie_accepted_v1';

    if (cookieBanner && cookieAccept && window.localStorage) {
        const hasConsent = localStorage.getItem(COOKIE_KEY) === 'true';
        if (hasConsent) {
            cookieBanner.style.display = 'none';
        } else {
            cookieBanner.style.display = 'block';
        }

        cookieAccept.addEventListener('click', () => {
            try {
                localStorage.setItem(COOKIE_KEY, 'true');
            } catch (e) {}
            try {
                onUserAcceptsCookies();
            } catch (e) {}
            cookieBanner.style.display = 'none';
        });
    }

    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((dt) => {
        const answer = dt.nextElementSibling;
        const toggle = dt.querySelector('.faq-toggle');

        const toggleFAQ = () => {
            const isExpanded = dt.getAttribute('aria-expanded') === 'true';
            dt.setAttribute('aria-expanded', String(!isExpanded));
            if (answer) {
                answer.hidden = isExpanded;
            }
            if (toggle) {
                toggle.textContent = isExpanded ? '+' : '−';
            }
        };

        dt.addEventListener('click', toggleFAQ);
        dt.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ();
            }
        });
    });
});

