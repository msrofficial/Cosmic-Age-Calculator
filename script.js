// DOM Elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calculateBtn = document.getElementById('calculateBtn');
const calculateBtnBn = document.getElementById('calculateBtnBn');
const backBtn = document.getElementById('backBtn');
const backBtnBn = document.getElementById('backBtnBn');
const shareBtn = document.getElementById('shareBtn');
const shareBtnBn = document.getElementById('shareBtnBn');
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const resultSection = document.querySelector('.result-section');
const inputSection = document.querySelector('.input-section');
const funFactsSection = document.querySelector('.fun-facts-section');

// Result Elements
const resultElements = {
  exactAge: document.getElementById('exactAge'),
  birthDay: document.getElementById('birthDay'),
  banglaDate: document.getElementById('banglaDate'),
  nextBirthday: document.getElementById('nextBirthday'),
  monthsOld: document.getElementById('monthsOld'),
  weeksOld: document.getElementById('weeksOld'),
  daysOld: document.getElementById('daysOld'),
  hoursOld: document.getElementById('hoursOld'),
  minutesOld: document.getElementById('minutesOld'),
  secondsOld: document.getElementById('secondsOld'),
  zodiacSign: document.getElementById('zodiacSign'),
  chineseZodiac: document.getElementById('chineseZodiac'),
  birthstone: document.getElementById('birthstone'),
  birthFlower: document.getElementById('birthFlower'),
  leapYears: document.getElementById('leapYears'),
  heartbeats: document.getElementById('heartbeats'),
  fullMoons: document.getElementById('fullMoons'),
  lifeProgress: document.getElementById('lifeProgress'),
  lifePercentage: document.getElementById('lifePercentage'),
  mercuryAge: document.getElementById('mercuryAge'),
  venusAge: document.getElementById('venusAge'),
  earthAge: document.getElementById('earthAge'),
  marsAge: document.getElementById('marsAge'),
  jupiterAge: document.getElementById('jupiterAge'),
  saturnAge: document.getElementById('saturnAge'),
  famousPeople: document.getElementById('famousPeople'),
  famousPeopleBn: document.getElementById('famousPeopleBn'),
  historicalEvents: document.getElementById('historicalEvents'),
  historicalEventsBn: document.getElementById('historicalEventsBn'),
  popularCulture: document.getElementById('popularCulture'),
  popularCultureBn: document.getElementById('popularCultureBn'),
  technologyTimeline: document.getElementById('technologyTimeline'),
  technologyTimelineBn: document.getElementById('technologyTimelineBn'),
  ageYears: document.getElementById('ageYears'),
  yearsProgress: document.getElementById('yearsProgress'),
  monthsBar: document.getElementById('monthsBar'),
  monthsValue: document.getElementById('monthsValue'),
  daysBar: document.getElementById('daysBar'),
  daysValue: document.getElementById('daysValue')
};

// Global variables
let currentLanguage = 'en'; // 'en' or 'bn'
let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#4361ee"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#4361ee",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Bangla number mapping
const banglaNumbers = {
  '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
  '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
};

// English number mapping
const englishNumbers = {
  '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
  '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
};

// Zodiac signs
const zodiacSigns = [
  { name: { en: 'Capricorn', bn: 'মকর' }, start: [1, 1], end: [1, 19] },
  { name: { en: 'Aquarius', bn: 'কুম্ভ' }, start: [1, 20], end: [2, 18] },
  { name: { en: 'Pisces', bn: 'মীন' }, start: [2, 19], end: [3, 20] },
  { name: { en: 'Aries', bn: 'মেষ' }, start: [3, 21], end: [4, 19] },
  { name: { en: 'Taurus', bn: 'বৃষ' }, start: [4, 20], end: [5, 20] },
  { name: { en: 'Gemini', bn: 'মিথুন' }, start: [5, 21], end: [6, 20] },
  { name: { en: 'Cancer', bn: 'কর্কট' }, start: [6, 21], end: [7, 22] },
  { name: { en: 'Leo', bn: 'সিংহ' }, start: [7, 23], end: [8, 22] },
  { name: { en: 'Virgo', bn: 'কন্যা' }, start: [8, 23], end: [9, 22] },
  { name: { en: 'Libra', bn: 'তুলা' }, start: [9, 23], end: [10, 22] },
  { name: { en: 'Scorpio', bn: 'বৃশ্চিক' }, start: [10, 23], end: [11, 21] },
  { name: { en: 'Sagittarius', bn: 'ধনু' }, start: [11, 22], end: [12, 21] },
  { name: { en: 'Capricorn', bn: 'মকর' }, start: [12, 22], end: [12, 31] }
];

// Chinese zodiac animals
const chineseZodiacs = [
  { en: 'Rat', bn: 'ইঁদুর' },     // 2008, 1996, 1984...
  { en: 'Ox', bn: 'ষাঁড়' },      // 2009, 1997, 1985...
  { en: 'Tiger', bn: 'বাঘ' },     // 2010, 1998, 1986...
  { en: 'Rabbit', bn: 'খরগোশ' },  // 2011, 1999, 1987...
  { en: 'Dragon', bn: 'ড্রাগন' }, // 2012, 2000, 1988...
  { en: 'Snake', bn: 'সাপ' },     // 2013, 2001, 1989...
  { en: 'Horse', bn: 'ঘোড়া' },   // 2014, 2002, 1990...
  { en: 'Goat', bn: 'ছাগল' },     // 2015, 2003, 1991...
  { en: 'Monkey', bn: 'বানর' },   // 2016, 2004, 1992...
  { en: 'Rooster', bn: 'মোরগ' },  // 2017, 2005, 1993...
  { en: 'Dog', bn: 'কুকুর' },     // 2018, 2006, 1994...
  { en: 'Pig', bn: 'শূকর' }       // 2019, 2007, 1995...
];

// Birthstones
const birthstones = [
  { en: 'Garnet', bn: 'গার্নেট' },       // January
  { en: 'Amethyst', bn: 'অ্যামেথিস্ট' },  // February
  { en: 'Aquamarine', bn: 'অ্যাকুয়ামেরিন' }, // March
  { en: 'Diamond', bn: 'হীরা' },         // April
  { en: 'Emerald', bn: 'পান্না' },       // May
  { en: 'Pearl', bn: 'মুক্তা' },         // June
  { en: 'Ruby', bn: 'রুবি' },            // July
  { en: 'Peridot', bn: 'পেরিডট' },       // August
  { en: 'Sapphire', bn: 'নীলকান্তমণি' }, // September
  { en: 'Opal', bn: 'ওপাল' },            // October
  { en: 'Topaz', bn: 'টোপাজ' },          // November
  { en: 'Turquoise', bn: 'ফিরোজা' }      // December
];

// Birth flowers
const birthFlowers = [
  { en: 'Carnation/Snowdrop', bn: 'কার্নেশন/স্নোড্রপ' }, // January
  { en: 'Violet/Primrose', bn: 'ভায়োলেট/প্রিমরোজ' },    // February
  { en: 'Daffodil', bn: 'ড্যাফোডিল' },                  // March
  { en: 'Sweet Pea/Daisy', bn: 'সুইট পি/ডেইজি' },        // April
  { en: 'Lily of the Valley', bn: 'লিলি অফ দ্য ভ্যালি' }, // May
  { en: 'Rose/Honeysuckle', bn: 'গোলাপ/হানিসাকল' },      // June
  { en: 'Larkspur/Water Lily', bn: 'লার্কস্পার/ওয়াটার লিলি' }, // July
  { en: 'Gladiolus/Poppy', bn: 'গ্লাডিওলাস/পপি' },       // August
  { en: 'Aster/Morning Glory', bn: 'অ্যাস্টার/মর্নিং গ্লোরি' }, // September
  { en: 'Marigold/Cosmos', bn: 'মেরিগোল্ড/কসমস' },       // October
  { en: 'Chrysanthemum', bn: 'ক্রিসান্থেমাম' },          // November
  { en: 'Narcissus/Holly', bn: 'নার্সিসাস/হোলি' }        // December
];

// Famous people by month-day (simplified)
const famousPeopleByDate = {
  '1-1': { en: "Paul Revere (1735), J. Edgar Hoover (1895), Grandmaster Flash (1958)", bn: "পল রিভিয়ার (১৭৩৫), জে. এডগার হুভার (১৮৯৫), গ্র্যান্ডমাস্টার ফ্ল্যাশ (১৯৫৮)" },
  '1-15': { en: "Martin Luther King Jr. (1929), Pitbull (1981)", bn: "মার্টিন লুথার কিং জুনিয়র (১৯২৯), পিটবুল (১৯৮১)" },
  '2-11': { en: "Thomas Edison (1847), Jennifer Aniston (1969)", bn: "টমাস এডিসন (১৮৪৭), জেনিফার অ্যানিস্টন (১৯৬৯)" },
  '3-14': { en: "Albert Einstein (1879), Stephen Curry (1988)", bn: "আলবার্ট আইনস্টাইন (১৮৭৯), স্টিফেন কারি (১৯৮৮)" },
  '4-15': { en: "Leonardo da Vinci (1452), Emma Watson (1990)", bn: "লিওনার্দো দা ভিঞ্চি (১৪৫২), এমা ওয়াটসন (১৯৯০)" },
  '5-4': { en: "Audrey Hepburn (1929), Lance Bass (1979)", bn: "অড্রে হেপবার্ন (১৯২৯), ল্যান্স ব্যাস (১৯৭৯)" },
  '6-28': { en: "Elon Musk (1971), Mel Brooks (1926)", bn: "এলন মাস্ক (১৯৭১), মেল ব্রুকস (১৯২৬)" },
  '7-4': { en: "Calvin Coolidge (1872), Malia Obama (1998)", bn: "ক্যালভিন কুলিজ (১৮৭২), মালিয়া ওবামা (১৯৯৮)" },
  '8-9': { en: "Whitney Houston (1963), Anna Kendrick (1985)", bn: "হুইটনি হিউস্টন (১৯৬৩), আনা কেন্ড্রিক (১৯৮৫)" },
  '9-21': { en: "Stephen King (1947), Bill Murray (1950)", bn: "স্টিফেন কিং (১৯৪৭), বিল মারি (১৯৫০)" },
  '10-28': { en: "Bill Gates (1955), Julia Roberts (1967)", bn: "বিল গেটস (১৯৫৫), জুলিয়া রবার্টস (১৯৬৭)" },
  '11-30': { en: "Winston Churchill (1874), Ben Stiller (1965)", bn: "উইনস্টন চার্চিল (১৮৭৪), বেন স্টিলার (১৯৬৫)" },
  '12-25': { en: "Isaac Newton (1642), Jimmy Buffett (1946)", bn: "আইজাক নিউটন (১৬৪২), জিমি বাফেট (১৯৪৬)" }
};

// Historical events by month-day (simplified)
const historicalEventsByDate = {
  '1-1': { en: "1863 - Emancipation Proclamation takes effect in the US", bn: "১৮৬৩ - মার্কিন যুক্তরাষ্ট্রে মুক্তির ঘোষণা কার্যকর হয়" },
  '2-14': { en: "1929 - St. Valentine's Day Massacre in Chicago", bn: "১৯২৯ - শিকাগোতে সেন্ট ভ্যালেন্টাইন'স ডে গণহত্যা" },
  '3-17': { en: "461 - Saint Patrick dies", bn: "৪৬১ - সেন্ট প্যাট্রিক মারা যান" },
  '4-12': { en: "1961 - Yuri Gagarin becomes first human in space", bn: "১৯৬১ - ইউরি গ্যাগারিন মহাকাশে প্রথম মানুষ হন" },
  '5-8': { en: "1945 - V-E Day, Germany surrenders in WWII", bn: "১৯৪৫ - ভি-ই ডে, দ্বিতীয় বিশ্বযুদ্ধে জার্মানি আত্মসমর্পণ করে" },
  '6-6': { en: "1944 - D-Day in WWII", bn: "১৯৪৪ - দ্বিতীয় বিশ্বযুদ্ধে ডি-ডে" },
  '7-20': { en: "1969 - Apollo 11 lands on the moon", bn: "১৯৬৯ - অ্যাপোলো ১১ চাঁদে অবতরণ করে" },
  '8-6': { en: "1945 - Atomic bomb dropped on Hiroshima", bn: "১৯৪৫ - হিরোশিমায় পারমাণবিক বোমা ফেলা হয়" },
  '9-11': { en: "2001 - 9/11 terrorist attacks in the US", bn: "২০০১ - মার্কিন যুক্তরাষ্ট্রে ৯/১১ সন্ত্রাসী হামলা" },
  '10-12': { en: "1492 - Columbus reaches the Americas", bn: "১৪৯২ - কলম্বাস আমেরিকায় পৌঁছান" },
  '11-9': { en: "1989 - Berlin Wall falls", bn: "১৯৮৯ - বার্লিন প্রাচীর পতন" },
  '12-7': { en: "1941 - Pearl Harbor attack", bn: "১৯৪১ - পার্ল হারবার আক্রমণ" }
};

// Technology timeline
const techTimeline = {
  '1990': { en: "The World Wide Web is invented by Tim Berners-Lee", bn: "টিম বার্নার্স-লি দ্বারা ওয়ার্ল্ড ওয়াইড ওয়েব উদ্ভাবিত হয়" },
  '1995': { en: "Amazon and eBay launch, JavaScript created", bn: "অ্যামাজন এবং ইবে চালু হয়, জাভাস্ক্রিপ্ট তৈরি করা হয়" },
  '1998': { en: "Google founded", bn: "গুগল প্রতিষ্ঠিত" },
  '2001': { en: "Wikipedia launched, iPod introduced", bn: "উইকিপিডিয়া চালু হয়, আইপড চালু হয়" },
  '2004': { en: "Facebook launched", bn: "ফেসবুক চালু হয়" },
  '2007': { en: "First iPhone released", bn: "প্রথম আইফোন প্রকাশিত" },
  '2009': { en: "Bitcoin created", bn: "বিটকয়েন তৈরি" },
  '2010': { en: "Instagram and iPad launched", bn: "ইনস্টাগ্রাম এবং আইপ্যাড চালু" },
  '2016': { en: "Pokémon Go becomes global phenomenon", bn: "পোকেমন গো বিশ্বব্যাপী ঘটনা হয়ে ওঠে" }
};

// Initialize the app
function init() {
  // Set up event listeners
  calculateBtn.addEventListener('click', calculateAge);
  calculateBtnBn.addEventListener('click', calculateAge);
  backBtn.addEventListener('click', goBack);
  backBtnBn.addEventListener('click', goBack);
  shareBtn.addEventListener('click', shareResults);
  shareBtnBn.addEventListener('click', shareResults);
  themeBtn.addEventListener('click', toggleTheme);
  langBtn.addEventListener('click', toggleLanguage);
  
  // Input validation
  dayInput.addEventListener('input', validateDay);
  monthInput.addEventListener('input', validateMonth);
  yearInput.addEventListener('input', validateYear);
  
  // Auto-detect language
  autoDetectLanguage();
  
  // Auto-switch theme based on time
  autoThemeSwitch();
  
  // Set initial theme icon
  updateThemeIcon();
  
  // Apply initial theme
  applyTheme();
}

// Auto-detect language from browser
function autoDetectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith('bn')) {
    currentLanguage = 'bn';
    updateLanguageUI();
  }
}

// Auto-switch to dark mode at night
function autoThemeSwitch() {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) { // 6PM to 6AM
    isDarkMode = true;
    applyTheme();
  }
}

// Toggle between light and dark theme
function toggleTheme() {
  isDarkMode = !isDarkMode;
  applyTheme();
  updateThemeIcon();
}

// Apply the current theme
function applyTheme() {
  const root = document.documentElement;
  
  if (isDarkMode) {
    root.style.setProperty('--primary', 'var(--dark-primary)');
    root.style.setProperty('--primary-light', 'var(--dark-primary-light)');
    root.style.setProperty('--secondary', 'var(--dark-secondary)');
    root.style.setProperty('--accent', 'var(--dark-accent)');
    root.style.setProperty('--dark', 'var(--dark-dark)');
    root.style.setProperty('--light', 'var(--dark-light)');
    root.style.setProperty('--success', 'var(--dark-success)');
    root.style.setProperty('--warning', 'var(--dark-warning)');
    root.style.setProperty('--danger', 'var(--dark-danger)');
    
    root.style.setProperty('--text-primary', 'var(--dark-text-primary)');
    root.style.setProperty('--text-secondary', 'var(--dark-text-secondary)');
    
    root.style.setProperty('--bg-color', 'var(--dark-bg-color)');
    root.style.setProperty('--card-bg', 'var(--dark-card-bg)');
    root.style.setProperty('--card-shadow', 'var(--dark-card-shadow)');
    root.style.setProperty('--border-color', 'var(--dark-border-color)');
  } else {
    root.style.setProperty('--primary', '#4361ee');
    root.style.setProperty('--primary-light', '#4895ef');
    root.style.setProperty('--secondary', '#3f37c9');
    root.style.setProperty('--accent', '#f72585');
    root.style.setProperty('--dark', '#1a1a2e');
    root.style.setProperty('--light', '#f8f9fa');
    root.style.setProperty('--success', '#4cc9f0');
    root.style.setProperty('--warning', '#f8961e');
    root.style.setProperty('--danger', '#ef233c');
    
    root.style.setProperty('--text-primary', '#1a1a2e');
    root.style.setProperty('--text-secondary', '#4a4a68');
    
    root.style.setProperty('--bg-color', '#f8f9fa');
    root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.85)');
    root.style.setProperty('--card-shadow', '0 8px 32px rgba(31, 38, 135, 0.1)');
    root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.3)');
  }
}

// Update the theme icon
function updateThemeIcon() {
  const icon = themeBtn.querySelector('i');
  if (isDarkMode) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Toggle between English and Bangla
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
  updateLanguageUI();
  
  // Update the button text
  langBtn.textContent = currentLanguage === 'en' ? 'বাংলা' : 'English';
  langBtn.classList.toggle('lang-en', currentLanguage === 'en');
  langBtn.classList.toggle('lang-bn', currentLanguage === 'bn');
  
  // If results are showing, update them with new language
  if (resultSection.style.display !== 'none') {
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;
    calculateAgeFromInputs(day, month, year);
  }
}

// Update all UI elements to current language
function updateLanguageUI() {
  // Toggle visibility of all language-specific elements
  document.querySelectorAll('.en').forEach(el => {
    el.style.display = currentLanguage === 'en' ? 'block' : 'none';
  });
  document.querySelectorAll('.bn').forEach(el => {
    el.style.display = currentLanguage === 'bn' ? 'block' : 'none';
  });
  
  // Update placeholders
  dayInput.placeholder = currentLanguage === 'en' ? 'DD' : 'দিন';
  monthInput.placeholder = currentLanguage === 'en' ? 'MM' : 'মাস';
  yearInput.placeholder = currentLanguage === 'en' ? 'YYYY' : 'বছর';
}

// Validate day input
function validateDay() {
  let value = dayInput.value;
  
  // Convert Bangla numbers to English if needed
  if (currentLanguage === 'bn') {
    value = convertNumbers(value, true);
  }
  
  // Only allow numbers
  value = value.replace(/[^0-9]/g, '');
  
  // Limit to valid days (1-31)
  if (value.length > 0) {
    const num = parseInt(value, 10);
    if (num < 1) value = '1';
    if (num > 31) value = '31';
  }
  
  // Convert back to Bangla if needed
  if (currentLanguage === 'bn') {
    value = convertNumbers(value, false);
  }
  
  dayInput.value = value;
}

// Validate month input
function validateMonth() {
  let value = monthInput.value;
  
  // Convert Bangla numbers to English if needed
  if (currentLanguage === 'bn') {
    value = convertNumbers(value, true);
  }
  
  // Only allow numbers
  value = value.replace(/[^0-9]/g, '');
  
  // Limit to valid months (1-12)
  if (value.length > 0) {
    const num = parseInt(value, 10);
    if (num < 1) value = '1';
    if (num > 12) value = '12';
  }
  
  // Convert back to Bangla if needed
  if (currentLanguage === 'bn') {
    value = convertNumbers(value, false);
  }
  
  monthInput.value = value;
}

// Validate year input
function validateYear() {
  let value = yearInput.value;
  
  // Convert Bangla numbers to English if needed
  if (currentLanguage === 'bn') {
    value = convertNumbers(value, true);
  }
  
  // Only allow numbers
  value = value.replace(/[^0-9]/g, '');
  
  // Limit to 4 digits
  if (value.length > 4) {
    value = value.substring(0, 4);
  }
  
  // Convert back to Bangla if needed
  if (currentLanguage === 'bn') {
    value = convertNumbers(value, false);
  }
  
  yearInput.value = value;
}

// Convert between English and Bangla numbers
function convertNumbers(str, toEnglish) {
  const mapping = toEnglish ? englishNumbers : banglaNumbers;
  return str.split('').map(char => mapping[char] || char).join('');
}

// Calculate age when button is clicked
function calculateAge() {
  let day = dayInput.value;
  let month = monthInput.value;
  let year = yearInput.value;
  
  // Convert Bangla numbers to English for calculation
  if (currentLanguage === 'bn') {
    day = convertNumbers(day, true);
    month = convertNumbers(month, true);
    year = convertNumbers(year, true);
  }
  
  calculateAgeFromInputs(day, month, year);
}

// Main age calculation function
function calculateAgeFromInputs(day, month, year) {
  // Validate inputs
  if (!day || !month || !year) {
    alert(currentLanguage === 'en' ? 'Please enter a valid date' : 'একটি বৈধ তারিখ লিখুন');
    return;
  }
  
  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);
  
  // Check for valid date
  const birthDate = new Date(yearNum, monthNum - 1, dayNum);
  if (birthDate.getDate() !== dayNum || birthDate.getMonth() !== monthNum - 1 || birthDate.getFullYear() !== yearNum) {
    alert(currentLanguage === 'en' ? 'Please enter a valid date' : 'একটি বৈধ তারিখ লিখুন');
    return;
  }
  
  // Calculate age
  const today = new Date();
  const age = calculateAgeDetails(birthDate, today);
  
  // Display results
  displayResults(birthDate, age);
  
  // Show result section
  inputSection.style.display = 'none';
  resultSection.style.display = 'block';
  funFactsSection.style.display = 'block';
}

// Calculate all age details
function calculateAgeDetails(birthDate, today) {
  const diff = today - birthDate;
  
  // Basic time units
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  
  // Calculate years, months, days
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();
  
  if (ageDays < 0) {
    const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += daysInLastMonth;
    ageMonths--;
  }
  
  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }
  
  // Calculate next birthday
  const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  
  // Calculate leap years
  let leapYearsCount = 0;
  for (let y = birthDate.getFullYear(); y <= today.getFullYear(); y++) {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      leapYearsCount++;
    }
  }
  
  // Calculate heartbeats (average 72 bpm)
  const heartbeatsCount = Math.floor(minutes * 72);
  
  // Calculate full moons (average 29.53 days between full moons)
  const fullMoonsCount = Math.floor(days / 29.53);
  
  // Calculate life progress (assuming 80 year lifespan)
  const lifePercentage = (ageYears / 80) * 100;
  
  // Calculate planetary ages
  const mercuryAgeVal = (ageYears / 0.2408467).toFixed(2);
  const venusAgeVal = (ageYears / 0.61519726).toFixed(2);
  const earthAgeVal = ageYears;
  const marsAgeVal = (ageYears / 1.8808158).toFixed(2);
  const jupiterAgeVal = (ageYears / 11.862615).toFixed(2);
  const saturnAgeVal = (ageYears / 29.447498).toFixed(2);
  
  // Get zodiac sign
  const monthDay = [birthDate.getMonth() + 1, birthDate.getDate()];
  let zodiac = zodiacSigns.find(sign => {
    if (monthDay[0] === sign.start[0] && monthDay[1] >= sign.start[1]) return true;
    if (monthDay[0] === sign.end[0] && monthDay[1] <= sign.end[1]) return true;
    return false;
  }) || zodiacSigns[0];
  
  // Get Chinese zodiac
  const chineseZodiacIndex = (birthDate.getFullYear() - 4) % 12;
  const chineseZodiacAnimal = chineseZodiacs[chineseZodiacIndex >= 0 ? chineseZodiacIndex : chineseZodiacIndex + 12];
  
  // Get birthstone and flower
  const stone = birthstones[birthDate.getMonth()];
  const flower = birthFlowers[birthDate.getMonth()];
  
  // Get day of week
  const daysOfWeek = [
    { en: 'Sunday', bn: 'রবিবার' },
    { en: 'Monday', bn: 'সোমবার' },
    { en: 'Tuesday', bn: 'মঙ্গলবার' },
    { en: 'Wednesday', bn: 'বুধবার' },
    { en: 'Thursday', bn: 'বৃহস্পতিবার' },
    { en: 'Friday', bn: 'শুক্রবার' },
    { en: 'Saturday', bn: 'শনিবার' }
  ];
  const dayOfWeek = daysOfWeek[birthDate.getDay()];
  
  // Get Bangla date (simplified)
  const banglaMonths = [
    'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
    'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
  ];
  let banglaDay = birthDate.getDate();
  let banglaMonthIndex = (birthDate.getMonth() + 7) % 12; // Approximate shift
  let banglaYear = birthDate.getFullYear() - 593;
  if (birthDate.getMonth() < 3) banglaYear--; // Bengali year starts in April
  const banglaDateStr = `${banglaDay} ${banglaMonths[banglaMonthIndex]}, ${banglaYear}`;
  
  // Get famous people and historical events
  const monthDayKey = `${birthDate.getMonth() + 1}-${birthDate.getDate()}`;
  const famousPeopleText = famousPeopleByDate[monthDayKey] || 
    { en: "No famous birthdays recorded for this date", bn: "এই তারিখে কোন বিখ্যাত জন্মদিন রেকর্ড করা হয়নি" };
  const historicalEventsText = historicalEventsByDate[monthDayKey] || 
    { en: "No major historical events recorded for this date", bn: "এই তারিখে কোন বড় ঐতিহাসিক ঘটনা রেকর্ড করা হয়নি" };
  
  // Get popular culture from birth year
  let popularCultureHTML = '';
  if (techTimeline[birthDate.getFullYear()]) {
    popularCultureHTML = `
      <p><strong>${currentLanguage === 'en' ? 'Technology in your birth year:' : 'আপনার জন্ম বছরে প্রযুক্তি:'}</strong> 
      ${techTimeline[birthDate.getFullYear()][currentLanguage]}</p>
    `;
  } else {
    popularCultureHTML = `<p>${currentLanguage === 'en' ? 'No specific tech milestones for your birth year' : 'আপনার জন্ম বছরের জন্য কোন নির্দিষ্ট প্রযুক্তি মাইলফলক নেই'}</p>`;
  }
  
  // Things that didn't exist when you were born
  const techNotExisting = [];
  const currentYearTech = new Date().getFullYear();
  
  if (birthDate.getFullYear() < 1990) techNotExisting.push(currentLanguage === 'en' ? "World Wide Web" : "ওয়ার্ল্ড ওয়াইড ওয়েব");
  if (birthDate.getFullYear() < 1995) techNotExisting.push(currentLanguage === 'en' ? "JavaScript" : "জাভাস্ক্রিপ্ট");
  if (birthDate.getFullYear() < 1998) techNotExisting.push(currentLanguage === 'en' ? "Google" : "গুগল");
  if (birthDate.getFullYear() < 2004) techNotExisting.push(currentLanguage === 'en' ? "Facebook" : "ফেসবুক");
  if (birthDate.getFullYear() < 2007) techNotExisting.push(currentLanguage === 'en' ? "iPhone" : "আইফোন");
  if (birthDate.getFullYear() < 2010) techNotExisting.push(currentLanguage === 'en' ? "Instagram" : "ইনস্টাগ্রাম");
  
  let techTimelineText = '';
  if (techNotExisting.length > 0) {
    techTimelineText = currentLanguage === 'en' 
      ? `These didn't exist when you were born: ${techNotExisting.join(', ')}`
      : `এগুলি আপনার জন্মের সময় অস্তিত্ব ছিল না: ${techNotExisting.join(', ')}`;
  } else {
    techTimelineText = currentLanguage === 'en'
      ? "You were born in the modern tech era!"
      : "আপনি আধুনিক প্রযুক্তি যুগে জন্মগ্রহণ করেছেন!";
  }
  
  return {
    ageYears,
    ageMonths,
    ageDays,
    totalMonths: ageYears * 12 + ageMonths,
    totalWeeks: weeks,
    totalDays: days,
    totalHours: hours,
    totalMinutes: minutes,
    totalSeconds: seconds,
    daysUntilNextBirthday,
    nextBirthdayYear: nextBirthday.getFullYear(),
    leapYearsCount,
    heartbeatsCount,
    fullMoonsCount,
    lifePercentage,
    mercuryAgeVal,
    venusAgeVal,
    earthAgeVal,
    marsAgeVal,
    jupiterAgeVal,
    saturnAgeVal,
    zodiac,
    chineseZodiacAnimal,
    stone,
    flower,
    dayOfWeek,
    banglaDateStr,
    famousPeopleText,
    historicalEventsText,
    popularCultureHTML,
    techTimelineText
  };
}

// [Previous code remains the same until the displayResults function]

function displayResults(birthDate, age) {
  // Update visualizations with animations
  setTimeout(() => {
    resultElements.yearsProgress.style.background = `conic-gradient(var(--primary) ${(age.ageYears / 100) * 360}deg, transparent 0deg)`;
    resultElements.monthsBar.style.width = `${(age.ageMonths / 12) * 100}%`;
    resultElements.daysBar.style.width = `${(age.ageDays / 30) * 100}%`;
    resultElements.lifeProgress.style.width = `${age.lifePercentage}%`;
  }, 100);
  
  // Format numbers based on language
  const formatNum = num => currentLanguage === 'bn' ? convertNumbers(num.toString(), false) : num;
  
  // Update all result elements
  resultElements.ageYears.textContent = formatNum(age.ageYears);
  resultElements.monthsValue.textContent = formatNum(age.ageMonths);
  resultElements.daysValue.textContent = formatNum(age.ageDays);
  
  resultElements.exactAge.textContent = currentLanguage === 'en' ?
    `${age.ageYears} years, ${age.ageMonths} months, ${age.ageDays} days` :
    `${formatNum(age.ageYears)} বছর, ${formatNum(age.ageMonths)} মাস, ${formatNum(age.ageDays)} দিন`;
  
  resultElements.birthDay.textContent = currentLanguage === 'en' ?
    `${age.dayOfWeek.en}, ${birthDate.getMonth() + 1}/${birthDate.getDate()}/${birthDate.getFullYear()}` :
    `${age.dayOfWeek.bn}, ${birthDate.getDate()}/${birthDate.getMonth() + 1}/${birthDate.getFullYear()}`;
  
  resultElements.banglaDate.textContent = age.banglaDateStr;
  
  resultElements.nextBirthday.textContent = currentLanguage === 'en' ?
    `${age.daysUntilNextBirthday} days (${age.nextBirthdayYear})` :
    `${formatNum(age.daysUntilNextBirthday)} দিন (${formatNum(age.nextBirthdayYear)})`;
  
  resultElements.monthsOld.textContent = formatNum(age.totalMonths);
  resultElements.weeksOld.textContent = formatNum(age.totalWeeks);
  resultElements.daysOld.textContent = formatNum(age.totalDays);
  resultElements.hoursOld.textContent = formatNum(age.totalHours);
  resultElements.minutesOld.textContent = formatNum(age.totalMinutes);
  resultElements.secondsOld.textContent = formatNum(age.totalSeconds);
  
  resultElements.zodiacSign.textContent = age.zodiac.name[currentLanguage];
  resultElements.chineseZodiac.textContent = age.chineseZodiacAnimal[currentLanguage];
  resultElements.birthstone.textContent = age.stone[currentLanguage];
  resultElements.birthFlower.textContent = age.flower[currentLanguage];
  
  resultElements.leapYears.textContent = formatNum(age.leapYearsCount);
  resultElements.heartbeats.textContent = formatNum(age.heartbeatsCount.toLocaleString());
  resultElements.fullMoons.textContent = formatNum(age.fullMoonsCount);
  
  resultElements.lifePercentage.textContent = `${age.lifePercentage.toFixed(1)}%`;
  
  resultElements.mercuryAge.textContent = formatNum(age.mercuryAgeVal);
  resultElements.venusAge.textContent = formatNum(age.venusAgeVal);
  resultElements.earthAge.textContent = formatNum(age.earthAgeVal);
  resultElements.marsAge.textContent = formatNum(age.marsAgeVal);
  resultElements.jupiterAge.textContent = formatNum(age.jupiterAgeVal);
  resultElements.saturnAge.textContent = formatNum(age.saturnAgeVal);
  
  resultElements.famousPeople.textContent = age.famousPeopleText.en;
  resultElements.famousPeopleBn.textContent = age.famousPeopleText.bn;
  resultElements.historicalEvents.textContent = age.historicalEventsText.en;
  resultElements.historicalEventsBn.textContent = age.historicalEventsText.bn;
  resultElements.popularCulture.innerHTML = age.popularCultureHTML;
  
  // Fixed the problematic line - safer access to techTimeline data
  if (techTimeline[birthDate.getFullYear()]) {
    resultElements.popularCultureBn.innerHTML = age.popularCultureHTML.replace(
      techTimeline[birthDate.getFullYear()].en,
      techTimeline[birthDate.getFullYear()].bn
    );
  } else {
    resultElements.popularCultureBn.innerHTML = age.popularCultureHTML;
  }
  
  resultElements.technologyTimeline.textContent = age.techTimelineText;
  resultElements.technologyTimelineBn.textContent = age.techTimelineText.replace(
    "These didn't exist when you were born:",
    "এগুলি আপনার জন্মের সময় অস্তিত্ব ছিল না:"
  );
  
  // Generate QR code
  generateQRCode(birthDate.getFullYear(), birthDate.getMonth() + 1, birthDate.getDate());
}

// [Rest of the code remains the same]

// Generate QR code for sharing
function generateQRCode(year, month, day) {
  const qrCodeElement = document.getElementById('qrCode');
  qrCodeElement.innerHTML = '';
  
  const url = `${window.location.href.split('?')[0]}?lang=${currentLanguage}&dob=${year}-${month}-${day}`;
  
  QRCode.toCanvas(qrCodeElement, url, { width: 120 }, (error) => {
    if (error) console.error(error);
  });
}

// Share results
function shareResults() {
  if (navigator.share) {
    navigator.share({
      title: currentLanguage === 'en' ? 'My Age Calculation Results' : 'আমার বয়স গণনার ফলাফল',
      text: currentLanguage === 'en' 
        ? 'Check out my exact age and interesting facts about my birth date!' 
        : 'আমার সঠিক বয়স এবং আমার জন্ম তারিখ সম্পর্কে আকর্ষণীয় তথ্য দেখুন!',
      url: window.location.href
    }).catch(err => {
      console.log('Error sharing:', err);
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    alert(currentLanguage === 'en' 
      ? 'Share this URL with others: ' + window.location.href 
      : 'অন্যদের সাথে এই URL শেয়ার করুন: ' + window.location.href);
  }
}

// Go back to input section
function goBack() {
  resultSection.style.display = 'none';
  funFactsSection.style.display = 'none';
  inputSection.style.display = 'block';
}

// Check URL for parameters on load
function checkURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const dobParam = urlParams.get('dob');
  
  if (langParam && (langParam === 'en' || langParam === 'bn')) {
    currentLanguage = langParam;
    updateLanguageUI();
    langBtn.textContent = currentLanguage === 'en' ? 'বাংলা' : 'English';
  }
  
  if (dobParam) {
    const [year, month, day] = dobParam.split('-');
    dayInput.value = currentLanguage === 'bn' ? convertNumbers(day, false) : day;
    monthInput.value = currentLanguage === 'bn' ? convertNumbers(month, false) : month;
    yearInput.value = currentLanguage === 'bn' ? convertNumbers(year, false) : year;
    calculateAgeFromInputs(day, month, year);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  init();
  checkURLParams();
});