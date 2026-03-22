/* ========================================
   MOON JOURNAL - JAVASCRIPT
   ========================================
   
   Structure:
   1. Observation Data (easy to edit)
   2. DOM References
   3. Calendar Rendering
   4. Gallery Rendering
   5. Data Table Rendering
   6. Missed Observations Rendering
   7. Modal Logic
   8. Geometry Interactivity
   9. Navigation & Scroll Effects
   10. Initialization
   
======================================== */

// ========================================
// 1. OBSERVATION DATA
// ========================================
// Edit this array to add/modify your observations
// Each observation object contains all details for one day

const observationData = [
  // ===== SUCCESSFUL OBSERVATIONS =====
  // February observations
  {
    date: '2026-02-08',
    day: 8,
    monthNumber: 2,
    weekday: 'Sunday',
    status: 'observed',
    phaseName: 'Waning Gibbous',
    time: '8:29 AM',
    location: 'Baalbek, Lebanon',
    angularDistance: '100°',
    handEstimate: '~10 fists',
    weather: 'Clear skies, excellent visibility',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-11',
    day: 11,
    monthNumber: 2,
    weekday: 'Wednesday',
    status: 'observed',
    phaseName: 'Waning Crescent',
    time: '8:17 AM',
    location: 'Beirut, Lebanon',
    angularDistance: '60°',
    handEstimate: '~6 fists',
    weather: 'Partly cloudy, good visibility',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-12',
    day: 12,
    monthNumber: 2,
    weekday: 'Thursday',
    status: 'observed',
    phaseName: 'Waning Crescent',
    time: '6:45 AM',
    location: 'Beirut, Lebanon',
    angularDistance: '50°',
    handEstimate: '~5 fists',
    weather: 'Crystal clear, no clouds',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-13',
    day: 13,
    monthNumber: 2,
    weekday: 'Friday',
    status: 'observed',
    phaseName: 'Waning Crescent',
    time: '6:30 AM',
    location: 'Beirut, Lebanon',
    angularDistance: '35°',
    handEstimate: '~3 fists and 3 fingers',
    weather: 'Clear and calm',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-27',
    day: 27,
    monthNumber: 2,
    weekday: 'Friday',
    status: 'observed',
    phaseName: 'Waxing Gibbous',
    time: '3:08 PM',
    location: 'Baalbek, Lebanon',
    angularDistance: '140°',
    handEstimate: '~14 fists',
    weather: 'Clear evening sky',
    notes: 'We can be sure that the illuminated face always points towards the sun',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  // March observations
  {
    date: '2026-03-10',
    day: 10,
    monthNumber: 3,
    weekday: 'Tuesday',
    status: 'observed',
    phaseName: 'Between third quarter and waning gibbous',
    time: '6:29 AM',
    location: 'Beirut, Lebanon',
    angularDistance: '95°',
    handEstimate: '~9 fists and 3 fingers',
    weather: 'Clear skies',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-03-12',
    day: 12,
    monthNumber: 3,
    weekday: 'Thursday',
    status: 'observed',
    phaseName: 'Waning Crescent',
    time: '6:42 AM',
    location: 'Baalkbek, Lebanon',
    angularDistance: '75°',
    handEstimate: '~7 fists and 3 fingers',
    weather: 'Clear and calm',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-03-13',
    day: 13,
    monthNumber: 3,
    weekday: 'Friday',
    status: 'observed',
    phaseName: 'Waning Crescent',
    time: '6:32 AM',
    location: 'Baalbek, Lebanon',
    angularDistance: '60°',
    handEstimate: '~6 fists',
    weather: 'Crystal clear, excellent seeing',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-03-15',
    day: 15,
    monthNumber: 3,
    weekday: 'Sunday',
    status: 'observed',
    phaseName: 'Waning Crescent',
    time: '6:57 AM',
    location: 'Baalbek, Lebanon',
    angularDistance: '45°',
    handEstimate: '~4 fists and 3 fingers',
    weather: 'Clear night sky',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },

  // ===== ATTEMPTED BUT UNSUCCESSFUL OBSERVATIONS =====
  {
    date: '2026-02-07',
    day: 7,
    monthNumber: 2,
    weekday: 'Saturday',
    status: 'attempted',
    phaseName: 'N/A',
    time: '3:56 PM',
    location: 'Baalbek, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Overcast with thick cloud cover',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null,
  },
  {
    date: '2026-02-10',
    day: 10,
    monthNumber: 2,
    weekday: 'Tuesday',
    status: 'weather',
    phaseName: 'N/A',
    time: '4:00 PM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Heavy fog',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-14',
    day: 14,
    monthNumber: 2,
    weekday: 'Saturday',
    status: 'weather',
    phaseName: 'N/A',
    time: '8:20 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Cloudy',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-16',
    day: 16,
    monthNumber: 2,
    weekday: 'Monday',
    status: 'attempted',
    phaseName: 'N/A',
    time: '7:57 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Clear',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-18',
    day: 18,
    monthNumber: 2,
    weekday: 'Wednesday',
    status: 'attempted',
    phaseName: 'N/A',
    time: '6:57 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Clear',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-19',
    day: 19,
    monthNumber: 2,
    weekday: 'Thursday',
    status: 'weather',
    phaseName: 'N/A',
    time: '7:03 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Cloudy',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-21',
    day: 21,
    monthNumber: 2,
    weekday: 'Saturday',
    status: 'attempted',
    phaseName: 'N/A',
    time: '9:37 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Clear',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-23',
    day: 23,
    monthNumber: 2,
    weekday: 'Monday',
    status: 'attempted',
    phaseName: 'N/A',
    time: '7:17 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Clear',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-24',
    day: 24,
    monthNumber: 2,
    weekday: 'Tuesday',
    status: 'attempted',
    phaseName: 'N/A',
    time: '6:42 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Clear',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  },
  {
    date: '2026-02-25',
    day: 25,
    monthNumber: 2,
    weekday: 'Wednesday',
    status: 'attempted',
    phaseName: 'N/A',
    time: '6:36 AM',
    location: 'Beirut, Lebanon',
    angularDistance: 'N/A',
    handEstimate: 'N/A',
    weather: 'Partly cloudy',
    sketchPlaceholder: true,
    sketchImage: null,
    photoPlaceholder: true,
    photoImage: null
  }
];

// Images in images/ are wired by filename: {mon}-{day}-weather.* → photoImage, {mon}-{day}-sketch.* → sketchImage.
// Add new filenames here when you add files (browsers cannot list folders without a server).
const IMAGES_FOLDER_FILENAMES = [
  'feb-7-weather.jpeg',
  'feb-8-weather.jpeg',
  'feb-8-sketch.jpeg',
  'feb-10-weather.jpeg',
  'feb-11-weather.jpeg',
  'feb-11-sketch.jpeg',
  'feb-12-weather.jpeg',
  'feb-12-sketch.jpeg',
  'feb-13-weather.jpeg',
  'feb-13-sketch.jpeg',
  'feb-14-weather.jpeg',
  'feb-16-weather.jpeg',
  'feb-18-weather.jpeg',
  'feb-19-weather.jpeg',
  'feb-21-weather.jpeg',
  'feb-23-weather.jpeg',
  'feb-24-weather.jpeg',
  'feb-25-weather.jpeg',
  'feb-27-weather.jpeg',
  'feb-27-sketch.jpeg',
  'march-10-weather.jpeg',
  'march-10-sketch.jpeg',
  'march-12-weather.jpeg',
  'march-12-sketch.jpeg',
  'march-13-weather.jpeg',
  'march-13-sketch.jpeg',
  'march-15-weather.jpeg',
  'march-15-sketch.jpeg'
];

const IMAGES_BASE_PATH = 'images/';
const MONTH_PREFIX_TO_NUMBER = {
  jan: 1, january: 1,
  feb: 2, february: 2,
  mar: 3, march: 3,
  apr: 4, april: 4,
  may: 5,
  jun: 6, june: 6,
  jul: 7, july: 7,
  aug: 8, august: 8,
  sep: 9, sept: 9, september: 9,
  oct: 10, october: 10,
  nov: 11, november: 11,
  dec: 12, december: 12
};

function applyImagesFromFolder() {
  const re = /^([a-z]+)-(\d{1,2})-(weather|sketch)\.([a-z0-9]+)$/i;
  for (const name of IMAGES_FOLDER_FILENAMES) {
    const m = name.match(re);
    if (!m) continue;
    const prefix = m[1].toLowerCase();
    const monthNum =
      MONTH_PREFIX_TO_NUMBER[prefix] ?? MONTH_PREFIX_TO_NUMBER[prefix.slice(0, 3)];
    if (!monthNum) continue;
    const day = parseInt(m[2], 10);
    const kind = m[3].toLowerCase();
    const date = `2026-${String(monthNum).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const obs = observationData.find(o => o.date === date);
    if (!obs) continue;
    const url = IMAGES_BASE_PATH + name;
    if (kind === 'weather') {
      obs.photoImage = url;
      obs.photoPlaceholder = false;
    } else {
      obs.sketchImage = url;
      obs.sketchPlaceholder = false;
    }
  }
}

// Calendar configuration for both months
const calendarMonths = [
  {
    year: 2026,
    month: 'February',
    monthNumber: 2,
    daysInMonth: 28, // 2026 is not a leap year
    startDay: 0 // February 2026 starts on Sunday
  },
  {
    year: 2026,
    month: 'March',
    monthNumber: 3,
    daysInMonth: 31,
    startDay: 0 // March 2026 starts on Sunday
  }
];

// Current calendar page index (0 = February, 1 = March)
let currentCalendarPage = 0;


// ========================================
// 2. DOM REFERENCES
// ========================================

const DOM = {
  // Navigation
  navbar: document.getElementById('navbar'),
  navToggle: document.getElementById('navToggle'),
  navLinks: document.getElementById('navLinks'),
  navItems: document.querySelectorAll('.nav-link'),
  
  // Calendar
  calendarGrid: document.getElementById('calendarGrid'),
  calendarMonth: document.getElementById('calendarMonth'),
  calendarPrev: document.getElementById('calendarPrev'),
  calendarNext: document.getElementById('calendarNext'),
  
  // Gallery
  galleryGrid: document.getElementById('galleryGrid'),
  
  // Data Table
  dataTableBody: document.getElementById('dataTableBody'),
  
  // Missed Observations
  missedGrid: document.getElementById('missedGrid'),
  
  // Modal
  modalOverlay: document.getElementById('modalOverlay'),
  modal: document.getElementById('modal'),
  modalClose: document.getElementById('modalClose'),
  modalContent: document.getElementById('modalContent'),
  
  // Geometry
  phaseSlider: document.getElementById('phaseSlider'),
  moonMarker: document.getElementById('moonMarker'),
  moonLight: document.getElementById('moonLight'),
  phaseName: document.getElementById('phaseName'),
  angleValue: document.getElementById('angleValue'),
  geometryExplanation: document.getElementById('geometryExplanation'),
  
  // Stats
  successCount: document.getElementById('successCount'),
  attemptCount: document.getElementById('attemptCount'),
  
  // Chatbot
  chatbotContainer: document.getElementById('chatbotContainer'),
  chatbotToggle: document.getElementById('chatbotToggle'),
  chatbotWindow: document.getElementById('chatbotWindow'),
  chatbotMessages: document.getElementById('chatbotMessages'),
  chatbotForm: document.getElementById('chatbotForm'),
  chatbotInput: document.getElementById('chatbotInput'),
  chatbotSend: document.getElementById('chatbotSend')
};


// ========================================
// 3. CALENDAR RENDERING
// ========================================

function renderCalendar() {
  const config = calendarMonths[currentCalendarPage];
  const { daysInMonth, startDay, month, year, monthNumber } = config;
  
  // Update month title
  DOM.calendarMonth.textContent = `${month} ${year}`;
  
  // Update navigation button states
  DOM.calendarPrev.disabled = currentCalendarPage === 0;
  DOM.calendarNext.disabled = currentCalendarPage === calendarMonths.length - 1;
  
  let html = '';
  
  // Add empty cells for days before the month starts
  for (let i = 0; i < startDay; i++) {
    html += '<div class="calendar-day empty"></div>';
  }
  
  // Add day cells
  for (let day = 1; day <= daysInMonth; day++) {
    // Find observation for this specific month and day
    const observation = observationData.find(obs => 
      obs.day === day && obs.monthNumber === monthNumber
    );
    const hasObservation = observation ? 'has-observation' : '';
    const statusClass = observation ? observation.status : 'none';
    
    html += `
      <div class="calendar-day ${hasObservation}" data-day="${day}" data-month="${monthNumber}">
        <span class="day-number">${day}</span>
        <span class="day-status status-${statusClass}"></span>
      </div>
    `;
  }
  
  DOM.calendarGrid.innerHTML = html;
  
  // Add click handlers
  document.querySelectorAll('.calendar-day:not(.empty)').forEach(dayEl => {
    dayEl.addEventListener('click', () => {
      const day = parseInt(dayEl.dataset.day);
      const monthNum = parseInt(dayEl.dataset.month);
      const observation = observationData.find(obs => 
        obs.day === day && obs.monthNumber === monthNum
      );
      if (observation) {
        openModal(observation);
      }
    });
  });
}

function initCalendarNavigation() {
  DOM.calendarPrev.addEventListener('click', () => {
    if (currentCalendarPage > 0) {
      currentCalendarPage--;
      renderCalendar();
    }
  });
  
  DOM.calendarNext.addEventListener('click', () => {
    if (currentCalendarPage < calendarMonths.length - 1) {
      currentCalendarPage++;
      renderCalendar();
    }
  });
}


// ========================================
// 4. GALLERY RENDERING
// ========================================

function renderGallery() {
  const successfulObs = observationData.filter(obs => obs.status === 'observed');
  
  let html = '';
  successfulObs.forEach(obs => {
    const hasSketch = !!obs.sketchImage;
    const showPhotoSlot = !!obs.photoImage || obs.photoPlaceholder;
    const twoSlots = hasSketch && showPhotoSlot;

    const sketchCol = hasSketch
      ? `<div class="gallery-sketch"><img src="${obs.sketchImage}" alt="Moon sketch from ${obs.date}"></div>`
      : '';

    const photoContent =
      obs.photoPlaceholder && !obs.photoImage
        ? '<span class="placeholder-label">[Photo]</span>'
        : `<img src="${obs.photoImage}" alt="Moon photo from ${obs.date}">`;

    const photoCol = showPhotoSlot ? `<div class="gallery-photo">${photoContent}</div>` : '';

    const galleryImagesClass = twoSlots ? 'gallery-images' : 'gallery-images gallery-images--single';

    html += `
      <div class="gallery-card" data-day="${obs.day}">
        <div class="${galleryImagesClass}">
          ${sketchCol}
          ${photoCol}
        </div>
        <div class="gallery-info">
          <div class="gallery-date">${formatDate(obs.date)}</div>
          <div class="gallery-phase">${obs.phaseName}</div>
          <div class="gallery-time">${obs.time}</div>
        </div>
      </div>
    `;
  });
  
  DOM.galleryGrid.innerHTML = html;
  
  // Add click handlers
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const day = parseInt(card.dataset.day);
      const observation = observationData.find(obs => obs.day === day);
      if (observation) {
        openModal(observation);
      }
    });
  });
}


// ========================================
// 5. DATA TABLE RENDERING
// ========================================

function renderDataTable() {
  let html = '';
  
  // Sort by date
  const sortedData = [...observationData].sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  );
  
  sortedData.forEach(obs => {
    const visibleClass = obs.status === 'observed' ? 'visibility-yes' : 'visibility-no';
    const visibleText = obs.status === 'observed' ? 'Yes' : 'No';
    
    html += `
      <tr>
        <td>${formatDate(obs.date)}</td>
        <td>${obs.time}</td>
        <td>${obs.location}</td>
        <td class="${visibleClass}">${visibleText}</td>
        <td>${obs.phaseName}</td>
        <td>${obs.angularDistance}</td>
        <td>${obs.handEstimate ?? 'N/A'}</td>
      </tr>
    `;
  });
  
  DOM.dataTableBody.innerHTML = html;
}


// ========================================
// 6. MISSED OBSERVATIONS RENDERING
// ========================================

function renderMissedObservations() {
  const missedObs = observationData.filter(
    obs => obs.status === 'attempted' || obs.status === 'weather'
  );
  
  let html = '';
  missedObs.forEach(obs => {
    const cardClass = obs.status === 'attempted' ? 'attempted' : '';
    const reasonText = obs.status === 'weather' 
      ? 'Weather Interference' 
      : 'Moon Not Visible';
    const notesBlock = obs.notes
      ? `<div class="missed-notes">${obs.notes}</div>`
      : '';

    html += `
      <div class="missed-card ${cardClass}">
        <div class="missed-date">${formatDate(obs.date)}</div>
        <div class="missed-time">Attempted: ${obs.time}</div>
        <div class="missed-reason">${reasonText}</div>
        ${notesBlock}
      </div>
    `;
  });
  
  DOM.missedGrid.innerHTML = html;
}


// ========================================
// 7. MODAL LOGIC
// ========================================

function openModal(observation) {
  const statusClass = observation.status;
  const statusText = {
    observed: 'Successful Observation',
    attempted: 'Attempted – Moon Not Visible',
    weather: 'Weather Interference'
  }[statusClass];
  
  const hasSketchImage = !!observation.sketchImage;
  const showPhotoSlot = !!observation.photoImage || observation.photoPlaceholder;
  const twoSlots = hasSketchImage && showPhotoSlot;

  const sketchBox = hasSketchImage
    ? `<div class="modal-image-box"><img src="${observation.sketchImage}" alt="Moon sketch"></div>`
    : '';

  const photoInner =
    observation.photoPlaceholder && !observation.photoImage
      ? '<span class="placeholder-label">[Moon Photo Placeholder]<br>Replace with your photo</span>'
      : `<img src="${observation.photoImage}" alt="Moon photo">`;

  const photoBox = showPhotoSlot ? `<div class="modal-image-box">${photoInner}</div>` : '';

  const showImages = hasSketchImage || showPhotoSlot;

  const imageLabel = observation.status === 'observed'
    ? 'Observation Images'
    : 'Attempt Documentation';

  const modalImagesClass = twoSlots ? 'modal-images' : 'modal-images modal-images--single';

  const imagesSection = showImages
    ? `
    <div class="modal-images-section">
      <h4 class="modal-images-title">${imageLabel}</h4>
      <div class="${modalImagesClass}">
        ${sketchBox}
        ${photoBox}
      </div>
    </div>
  `
    : '';

  const notesSection = observation.notes
    ? `
    <div class="modal-notes">
      <h4>Observation Notes</h4>
      <p>${observation.notes}</p>
    </div>
  `
    : '';
  
  DOM.modalContent.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-date">${formatDate(observation.date)} – ${observation.weekday}</h2>
      <span class="modal-status ${statusClass}">${statusText}</span>
    </div>
    
    <div class="modal-details">
      <div class="modal-detail">
        <span class="detail-label">Phase</span>
        <span class="detail-value">${observation.phaseName}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">Time</span>
        <span class="detail-value">${observation.time}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">Location</span>
        <span class="detail-value">${observation.location}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">Weather</span>
        <span class="detail-value">${observation.weather}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">Angular Distance from Sun</span>
        <span class="detail-value">${observation.angularDistance}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">Hand Estimate</span>
        <span class="detail-value">${observation.handEstimate}</span>
      </div>
    </div>
    
    ${imagesSection}
    
    ${notesSection}
  `;
  
  DOM.modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus trap - focus the close button
  DOM.modalClose.focus();
}

function closeModal() {
  DOM.modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Modal event listeners
DOM.modalClose.addEventListener('click', closeModal);
DOM.modalOverlay.addEventListener('click', (e) => {
  if (e.target === DOM.modalOverlay) {
    closeModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && DOM.modalOverlay.classList.contains('active')) {
    closeModal();
  }
});


// ========================================
// 8. GEOMETRY INTERACTIVITY
// ========================================

function updateGeometryDiagram(angle) {
  // Position moon on orbit
  const orbitRadius = 100; // pixels from center
  const radians = (angle - 90) * (Math.PI / 180); // Offset so 0° is at top
  
  const x = Math.cos(radians) * orbitRadius;
  const y = Math.sin(radians) * orbitRadius;
  
  DOM.moonMarker.style.transform = `translate(${x}px, ${y}px)`;
  
  // Update moon illumination
  // The illuminated side should always face the sun (right side of diagram)
  updateMoonIllumination(angle);
  
  // Update phase name and explanation
  const phaseInfo = getPhaseInfo(angle);
  DOM.phaseName.textContent = phaseInfo.name;
  DOM.angleValue.textContent = `${angle}°`;
  DOM.geometryExplanation.textContent = phaseInfo.explanation;
}

function updateMoonIllumination(angle) {
  // Normalize angle to 0-360
  angle = ((angle % 360) + 360) % 360;
  
  // Calculate how the moon appears from Earth based on orbital position
  // At 0°: New Moon (dark)
  // At 90°: First Quarter (right half lit)
  // At 180°: Full Moon (fully lit)
  // At 270°: Last Quarter (left half lit)
  
  const moonBody = DOM.moonMarker.querySelector('.moon-body');
  const moonLight = DOM.moonLight;
  
  if (angle >= 0 && angle < 180) {
    // Waxing phases - right side illuminated
    const illumination = angle / 180; // 0 to 1
    moonLight.style.right = '0';
    moonLight.style.left = 'auto';
    moonLight.style.width = `${illumination * 100}%`;
    moonLight.style.borderRadius = `0 15px 15px 0`;
  } else {
    // Waning phases - left side illuminated
    const illumination = (360 - angle) / 180; // 1 to 0
    moonLight.style.left = '0';
    moonLight.style.right = 'auto';
    moonLight.style.width = `${illumination * 100}%`;
    moonLight.style.borderRadius = `15px 0 0 15px`;
  }
}

function getPhaseInfo(angle) {
  // Normalize angle
  angle = ((angle % 360) + 360) % 360;
  
  if (angle < 22.5 || angle >= 337.5) {
    return {
      name: 'New Moon',
      explanation: 'The Moon is positioned between Earth and Sun. The illuminated hemisphere faces away from Earth, making the Moon nearly invisible in the sky.'
    };
  } else if (angle < 67.5) {
    return {
      name: 'Waxing Crescent',
      explanation: 'A small sliver of the Moon\'s illuminated side is visible from Earth. The crescent appears on the right side, pointing toward the Sun\'s position.'
    };
  } else if (angle < 112.5) {
    return {
      name: 'First Quarter',
      explanation: 'The Moon is at a 90° angle from the Sun as seen from Earth. Exactly half of the visible disk is illuminated—the right half.'
    };
  } else if (angle < 157.5) {
    return {
      name: 'Waxing Gibbous',
      explanation: 'More than half but not all of the Moon\'s visible disk is illuminated. The Moon continues moving toward opposition with the Sun.'
    };
  } else if (angle < 202.5) {
    return {
      name: 'Full Moon',
      explanation: 'The Moon is opposite the Sun in the sky. Earth is between the Moon and Sun, so the entire Earth-facing hemisphere is illuminated.'
    };
  } else if (angle < 247.5) {
    return {
      name: 'Waning Gibbous',
      explanation: 'The Moon has passed full phase and the illuminated portion is decreasing. More than half remains lit, but the left side is now bright.'
    };
  } else if (angle < 292.5) {
    return {
      name: 'Last Quarter',
      explanation: 'The Moon is again at 90° from the Sun, but on the opposite side from First Quarter. The left half of the visible disk is illuminated.'
    };
  } else {
    return {
      name: 'Waning Crescent',
      explanation: 'Only a small crescent remains visible on the left side of the Moon. The cycle is nearly complete, approaching New Moon again.'
    };
  }
}

// Slider event listener
DOM.phaseSlider.addEventListener('input', (e) => {
  updateGeometryDiagram(parseInt(e.target.value));
});


// ========================================
// 9. NAVIGATION & SCROLL EFFECTS
// ========================================

// Mobile nav toggle
DOM.navToggle.addEventListener('click', () => {
  DOM.navLinks.classList.toggle('active');
});

// Close mobile nav on link click
DOM.navItems.forEach(link => {
  link.addEventListener('click', () => {
    DOM.navLinks.classList.remove('active');
  });
});

// Active nav link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollPos >= top && scrollPos < top + height) {
      DOM.navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Scroll event listeners
window.addEventListener('scroll', () => {
  updateActiveNavLink();
});

// Reveal on scroll animation
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}


// ========================================
// 10. UTILITY FUNCTIONS
// ========================================

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function updateStats() {
  const successful = observationData.filter(obs => obs.status === 'observed').length;
  const total = observationData.length;
  
  DOM.successCount.textContent = successful;
  DOM.attemptCount.textContent = total;
}


// ========================================
// 11. INITIALIZATION
// ========================================

function init() {
  applyImagesFromFolder();
  // Render all sections
  initCalendarNavigation();
  renderCalendar();
  renderGallery();
  renderDataTable();
  renderMissedObservations();
  
  // Update stats
  updateStats();
  
  // Initialize geometry diagram
  updateGeometryDiagram(45);
  
  // Initialize scroll effects
  initRevealAnimations();
  updateActiveNavLink();
  
  // Initialize chatbot
  initChatbot();
  
  console.log('Moon Journal initialized successfully!');
}

// ========================================
// 12. CHATBOT FUNCTIONALITY
// ========================================

// OpenRouter API configuration
const OPENROUTER_API_KEY =
  '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';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
/** OpenRouter expects a real HTTP(S) referer; file:// breaks CORS / validation for many setups */
function openRouterReferer() {
  try {
    if (window.location.protocol === 'file:') {
      return 'http://localhost';
    }
    return window.location.href || 'http://localhost';
  } catch {
    return 'http://localhost';
  }
}

// Build context about the website content
function buildWebsiteContext() {
  // Compile all observation data into readable format
  const observationsText = observationData.map(obs => {
    return `
Date: ${obs.date} (${obs.weekday})
Status: ${obs.status}
Phase: ${obs.phaseName}
Time: ${obs.time}
Location: ${obs.location}
Angular Distance from Sun: ${obs.angularDistance}
Hand estimate: ${obs.handEstimate ?? 'N/A'}
Weather: ${obs.weather}
    `.trim();
  }).join('\n\n');

  return `You are the Moon Journal Assistant, a helpful guide for a lunar observation project website. 
You ONLY answer questions based on the information contained in this website. If someone asks about something 
not related to this project, politely redirect them to ask about moon phases, observations, or the project content.

WEBSITE CONTENT:

=== PROJECT OVERVIEW ===
This is a Moon Journal - an observational study of lunar phases and Sun-Moon geometry.
The project documents systematic observations of the Moon over several weeks in March 2026.
It studies lunar phases, the Moon's illuminated shape, its geometric relation to the Sun, 
and what these observations reveal about reflected sunlight and celestial distances.

Observation Period: March 1 - March 28, 2026
Total Observations Attempted: ${observationData.length}
Successful Observations: ${observationData.filter(o => o.status === 'observed').length}
Failed due to weather: ${observationData.filter(o => o.status === 'weather').length}
Failed due to Moon not visible: ${observationData.filter(o => o.status === 'attempted').length}

=== OBSERVATION STATUS LEGEND ===
- Observed (green): Successful observation completed
- Attempted (orange): Moon was not visible at that time
- Weather (red): Weather prevented observation

=== ALL OBSERVATION RECORDS ===
${observationsText}

=== SCIENTIFIC ANALYSIS TOPICS ===

A. Why Observations Can Be Made from Different Locations:
The Moon's visibility from various locations is explained by its distance (~384,400 km). 
The parallax angle is small, so observers across wide areas see the Moon in nearly the same position.
Local geographic differences have negligible effect on the Moon's apparent phase.

B. Relationship Between Moon's Illuminated Shape and Sun's Position:
- Thin crescent = close to Sun (within 45° angular separation)
- First quarter = 90° from Sun
- Full moon = 180° from Sun (opposite side of sky)
- The illuminated side ALWAYS faces toward the Sun's position
- Waxing phases (evening): right/western limb illuminated
- Waning phases (morning): left/eastern limb illuminated

C. Evidence That Moon Shines by Reflected Sunlight:
1. Illuminated portion always faces the Sun
2. The terminator (day/night boundary) appears as a smooth curve consistent with a sphere lit by a distant source
3. Color temperature matches sunlight

D. Evidence That Sun Is Farther Than Moon:
- At quarter phases, exactly half is illuminated, requiring a 90° Sun-Moon-Earth angle
- The complete phase cycle proves the Moon orbits Earth while both orbit a more distant Sun
- Nearly parallel sunlight rays explain why all Earth observers see the same phase

=== GEOMETRY DIAGRAM ===
The interactive diagram shows a top-down view of the Earth-Moon-Sun system (not to scale).
- New Moon (0°): Moon between Earth and Sun, dark side faces Earth
- First Quarter (90°): Right half illuminated
- Full Moon (180°): Earth between Moon and Sun, fully illuminated  
- Last Quarter (270°): Left half illuminated

=== KEY FINDINGS ===
1. The lunar phase cycle is ~29.5 days
2. The illuminated portion always faces the Sun (moonlight is reflected sunlight)
3. Angular separation from Sun correlates with phase
4. The geometry confirms the Sun is much farther than the Moon

Be helpful, concise, and educational. If asked about specific dates, refer to the observation records.
If asked about moon phases, explain the geometry. Always stay focused on this project's content.`;
}

function initChatbot() {
  const {
    chatbotToggle,
    chatbotForm,
    chatbotContainer,
    chatbotInput,
    chatbotSend,
    chatbotMessages
  } = DOM;
  if (
    !chatbotToggle ||
    !chatbotForm ||
    !chatbotContainer ||
    !chatbotInput ||
    !chatbotSend ||
    !chatbotMessages
  ) {
    console.warn('Chatbot: missing DOM elements, skipping init.');
    return;
  }

  // Toggle chatbot window
  chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('open');
    if (chatbotContainer.classList.contains('open')) {
      chatbotInput.focus();
    }
  });

  // Handle form submission
  chatbotForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    chatbotInput.value = '';
    chatbotSend.disabled = true;

    // Show typing indicator
    const typingEl = addTypingIndicator();

    try {
      const response = await sendToOpenRouter(message);
      typingEl.remove();
      addChatMessage(response, 'bot');
    } catch (error) {
      typingEl.remove();
      const detail =
        error instanceof Error && error.message
          ? ` ${error.message}`
          : '';
      addChatMessage(
        `Sorry, something went wrong.${detail} If you opened this page as a local file, try serving the folder with a simple local server (e.g. Live Server) so the API request is allowed.`,
        'bot',
        true
      );
      console.error('Chatbot error:', error);
    }

    chatbotSend.disabled = false;
  });

  // Close chatbot on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatbotContainer.classList.contains('open')) {
      chatbotContainer.classList.remove('open');
    }
  });
}

function addChatMessage(content, sender, isError = false) {
  const messageEl = document.createElement('div');
  messageEl.className = `chat-message ${sender}${isError ? ' error' : ''}`;
  messageEl.innerHTML = `<div class="message-content">${escapeHtml(content)}</div>`;
  DOM.chatbotMessages.appendChild(messageEl);
  DOM.chatbotMessages.scrollTop = DOM.chatbotMessages.scrollHeight;
}

function addTypingIndicator() {
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-message bot typing';
  typingEl.innerHTML = `
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  DOM.chatbotMessages.appendChild(typingEl);
  DOM.chatbotMessages.scrollTop = DOM.chatbotMessages.scrollHeight;
  return typingEl;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function sendToOpenRouter(userMessage) {
  const systemPrompt = buildWebsiteContext();

  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': openRouterReferer(),
      'X-Title': 'Moon Journal Assistant'
    },
    body: JSON.stringify({
      model: 'openai/gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      max_tokens: 500,
      temperature: 0.7
    })
  });

  const rawText = await response.text();
  let data;
  try {
    data = rawText ? JSON.parse(rawText) : {};
  } catch {
    throw new Error(
      response.ok
        ? 'Invalid response from assistant.'
        : `Request failed (${response.status}). ${rawText.slice(0, 200)}`
    );
  }

  if (!response.ok) {
    const msg =
      data.error?.message ||
      data.message ||
      (typeof data.error === 'string' ? data.error : null) ||
      `HTTP ${response.status}`;
    throw new Error(msg);
  }

  const content = data.choices?.[0]?.message?.content;
  if (content == null || content === '') {
    throw new Error('Empty reply from assistant.');
  }
  return content;
}


// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);
