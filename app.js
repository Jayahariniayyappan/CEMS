// Simple frontend-only SPA for College Event Management
// Uses in-memory dummy data and role-based views (Student, Department Admin, Super Admin)

const roles = {
  STUDENT: "student",
  DEPT_ADMIN: "dept_admin",
  SUPER_ADMIN: "super_admin",
};

const departments = [
  "CSE",
  "ECE",
  "MECH",
  "CIVIL",
  "IT",
  "EEE",
  "BME",
  "MBA",
  "MCA",
  "AI&DS",
];

function isValidDepartment(dept) {
  return departments.includes(dept);
}

function getDepartmentOptions(selectedDept = "") {
  return departments
    .map(
      (dept) =>
        `<option value="${dept}" ${dept === selectedDept ? "selected" : ""}>${dept}</option>`
    )
    .join("");
}

const students = [
  {
    id: "stu-001",
    role: roles.STUDENT,
    userId: "stu001",
    password: "student123",
    name: "Harini A",
    registerNumber: "CSE2023-001",
    department: "CSE",
    year: "III",
    email: "harini28.egspec@gmail.com",
    phone: "+91 98765 00011",
    classIncharge: "Ms.Kalaivani",
  },
  {
    id: "stu-002",
    role: roles.STUDENT,
    userId: "stu002",
    password: "student123",
    name: "Lakshana S",
    registerNumber: "ECE2023-014",
    department: "ECE",
    year: "II",
    email: "lakshana@gmail.com",
    phone: "+91 98765 00012",
    classIncharge: "Ms.Mohanapriya",
  },
  {
    id: "stu-003",
    role: roles.STUDENT,
    userId: "stu003",
    password: "student123",
    name: "Sahithyalakshmi S",
    registerNumber: "MECH2023-023",
    department: "MECH",
    year: "III",
    email: "sahithya@gmail.com",
    phone: "+91 98765 00013",
    classIncharge: "Ms.Ranjani",
  },
];

const departmentAdmins = [
  {
    id: "da-cse",
    role: roles.DEPT_ADMIN,
    userId: "cse-001",
    password: "cse-001",
    name: "Dr. Karthik R",
    facultyId: "CSE-F001",
    department: "CSE",
    email: "karthik.r@campus.edu",
    phone: "+91 98765 10001",
    permissionGranted: true,
  },
  {
    id: "da-ece",
    role: roles.DEPT_ADMIN,
    userId: "ece-002",
    password: "ece-002",
    name: "Prof. Meera I",
    facultyId: "ECE-F014",
    department: "ECE",
    email: "meera.i@campus.edu",
    phone: "+91 98765 10002",
    permissionGranted: true,
  },
  {
    id: "da-csbs",
    role: roles.DEPT_ADMIN,
    userId: "csbs-003",
    password: "csbs-003",
    name: "Dr. Bairavi S",
    facultyId: "CSBS-F012",
    department: "CSBS",
    email: "bairavi.s@campus.edu",
    phone: "+91 9567483321",
    permissionGranted: true,
  },
  {
    id: "da-civil",
    role: roles.DEPT_ADMIN,
    userId: "civil-004",
    password: "civil-004",
    name: "Dr. Lakshmi P",
    facultyId: "CIVIL-F022",
    department: "CIVIL",
    email: "lakshmi.p@campus.edu",
    phone: "+91 98765 10004",
    permissionGranted: true,
  },
  {
    id: "da-it",
    role: roles.DEPT_ADMIN,
    userId: "it-005",
    password: "it-005",
    name: "Prof. Sandeep M",
    facultyId: "IT-F018",
    department: "IT",
    email: "sandeep.m@campus.edu",
    phone: "+91 98765 10005",
    permissionGranted: true,
  },
  {
    id: "da-eee",
    role: roles.DEPT_ADMIN,
    userId: "eee-006",
    password: "eee-006",
    name: "Dr. Kavitha N",
    facultyId: "EEE-F007",
    department: "EEE",
    email: "kavitha.n@campus.edu",
    phone: "+91 98765 10006",
    permissionGranted: true,
  },
  {
    id: "da-bme",
    role: roles.DEPT_ADMIN,
    userId: "bme-007",
    password: "bme-007",
    name: "Dr. Priya A",
    facultyId: "BME-F011",
    department: "BME",
    email: "priya.a@campus.edu",
    phone: "+91 98765 10007",
    permissionGranted: true,
  },
  {
    id: "da-aids",
    role: roles.DEPT_ADMIN,
    userId: "aids-008",
    password: "aids-008",
    name: "Dr. Raghav T",
    facultyId: "AIDS-F003",
    department: "AI&DS",
    email: "raghav.t@campus.edu",
    phone: "+91 98765 10008",
    permissionGranted: true,
  },
  {
    id: "da-mba",
    role: roles.DEPT_ADMIN,
    userId: "mba-009",
    password: "mba-009",
    name: "Prof. Sneha K",
    facultyId: "MBA-F006",
    department: "MBA",
    email: "sneha.k@campus.edu",
    phone: "+91 98765 10009",
    permissionGranted: true,
  },
  {
    id: "da-mca",
    role: roles.DEPT_ADMIN,
    userId: "mca-010",
    password: "mca-010",
    name: "Prof. Vikram D",
    facultyId: "MCA-F002",
    department: "MCA",
    email: "vikram.d@campus.edu",
    phone: "+91 98765 10010",
    permissionGranted: true,
  },
  {
    id: "da-mech",
    role: roles.DEPT_ADMIN,
    userId: "mech-001",
    password: "mech-001",
    name: "Dr. Rajesh K",
    facultyId: "MECH-F001",
    department: "MECH",
    email: "rajesh.k@campus.edu",
    phone: "+91 98765 10001",
    permissionGranted: true,
  },
];

const superAdmin = {
  id: "sa-001",
  role: roles.SUPER_ADMIN,
  userId: "superadmin",
  password: "super123",
  name: "Dean Academic Affairs",
  facultyId: "DEAN-001",
  email: "dean@campus.edu",
  phone: "+91 98765 20001",
};

function saveRegistrationsToLocalStorage() {
  localStorage.setItem("registrations", JSON.stringify(registrations));
}

function loadRegistrationsFromLocalStorage() {
  const storedRegistrations = localStorage.getItem("registrations");
  if (storedRegistrations) {
    return JSON.parse(storedRegistrations);
  }
  // Return default registrations if no stored data
  return [
    {
      id: "reg-001",
      eventId: "ev-001",
      studentId: "stu-001",
      status: "approved",
      odApproved: true,
    },
    {
      id: "reg-002",
      eventId: "ev-002",
      studentId: "stu-002",
      status: "pending",
      odApproved: false,
    },
  ];
}

// OD Requests Management
function saveODRequestsToLocalStorage() {
  localStorage.setItem("odRequests", JSON.stringify(odRequests));
}

function loadODRequestsFromLocalStorage() {
  const storedODRequests = localStorage.getItem("odRequests");
  if (storedODRequests) {
    return JSON.parse(storedODRequests);
  }
  // Return default OD requests if no stored data
  return [
    {
      id: "od-001",
      studentId: "stu-001",
      eventId: "ev-001",
      department: "CSE",
      status: "approved",
      createdAt: "2026-04-08",
    },
  ];
}

function saveEventsToLocalStorage() {
  localStorage.setItem("events", JSON.stringify(events));
}

function loadEventsFromLocalStorage() {
  const storedEvents = localStorage.getItem("events");
  if (storedEvents) {
    try {
      const parsed = JSON.parse(storedEvents);
      if (Array.isArray(parsed)) return parsed;
    } catch (err) {
      console.warn("Invalid event data in localStorage, resetting to defaults.", err);
    }
  }

  return [
    {
      id: "ev-001",
      name: "AI & ML Workshop",
      department: "CSE",
      place: "Main Hall",
      eventDate: "2026-04-10",
      timing: "10:00 AM - 12:00 PM",
      poster: "",
      createdBy: "da-cse",
    },
    {
      id: "ev-002",
      name: "Circuit Design Competition",
      department: "ECE",
      place: "Lab 5",
      eventDate: "2026-04-12",
      timing: "2:00 PM - 4:00 PM",
      poster: "",
      createdBy: "da-ece",
    },
    {
      id: "ev-003",
      name: "Robotics Meetup",
      department: "MECH",
      place: "Workshop",
      eventDate: "2026-04-14",
      timing: "3:00 PM - 5:00 PM",
      poster: "",
      createdBy: "da-mech",
    },
  ];
}

let eventCounter = 4;
let events = loadEventsFromLocalStorage();

let registrations = loadRegistrationsFromLocalStorage();

let odRequests = loadODRequestsFromLocalStorage();

let currentUser = null;
let currentSection = null;

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon"></span><span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(6px)";
    setTimeout(() => toast.remove(), 180);
  }, 2500);
}

function getApprovedCountForEvent(eventId) {
  return registrations.filter(
    (r) => r.eventId === eventId && r.status === "approved"
  ).length;
}

// Modal functions for poster lightbox
let posterModal = null;

function initPosterModal() {
  if (posterModal) return;
  
  const modalHtml = `
    <div id="posterModal" class="poster-modal">
      <div class="poster-modal-content">
        <button class="poster-modal-close" id="posterModalClose">✕</button>
        <img id="posterModalImage" class="poster-modal-image" alt="Event Poster" />
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  posterModal = document.getElementById("posterModal");
  
  const closeBtn = document.getElementById("posterModalClose");
  const modalImage = document.getElementById("posterModalImage");
  
  // Close on button click
  closeBtn.addEventListener("click", closePosterModal);
  
  // Close on outside click
  posterModal.addEventListener("click", (e) => {
    if (e.target === posterModal) {
      closePosterModal();
    }
  });
  
  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && posterModal.classList.contains("show")) {
      closePosterModal();
    }
  });
}

function openPosterModal(imageSrc) {
  if (!posterModal) initPosterModal();
  const modalImage = document.getElementById("posterModalImage");
  modalImage.src = imageSrc;
  posterModal.classList.add("show");
}

function closePosterModal() {
  if (posterModal) {
    posterModal.classList.remove("show");
  }
}

function attachPosterClickHandlers() {
  document.querySelectorAll(".poster-image").forEach((img) => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      openPosterModal(img.src);
    });
  });
}

function createAppShell() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar" id="sidebar"></aside>
      <div class="main" id="main">
        <header class="mobile-topbar">
          <div class="mobile-title" id="mobileTitle">Dashboard</div>
          <button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle navigation">
            ☰
          </button>
        </header>
        <div id="mainInner"></div>
      </div>
    </div>
  `;

  const toggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  if (toggle) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}

function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar || !currentUser) return;

  let navItems = [];
  if (currentUser.role === roles.STUDENT) {
    navItems = [
      { key: "student_upcoming", label: "Upcoming Events", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`, badge: "Live" },
      { key: "student_registered", label: "Registered Events", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>`, badge: "OD" },
    ];
  } else if (currentUser.role === roles.DEPT_ADMIN) {
    navItems = [
      { key: "dept_events", label: "Events", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`, badge: "Dept" },
      { key: "dept_registered", label: "Registered Students", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`, badge: "Review" },
      { key: "dept_manage", label: "Add / Manage", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`, badge: "Manage" },
      { key: "dept_od", label: "OD Requests", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`, badge: "Manage" },
    ];
  } else if (currentUser.role === roles.SUPER_ADMIN) {
    navItems = [
      { key: "super_overall", label: "Overall Upcoming", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`, badge: "All" },
      { key: "super_dept_wise", label: "Department-wise", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`, badge: "Dept" },
      { key: "super_dept_admins", label: "Dept Admin Profiles", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`, badge: "Admins" },
      { key: "super_participation", label: "Participation Stats", icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`, badge: "Analytics" },
    ];
  }

  navItems.push({
    key: "profile_settings",
    label: "My Profile",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`,
    badge: "Edit"
  });

  const email = currentUser.email || "";
  const initials = (currentUser.name || "?")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  sidebar.innerHTML = `
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <div class="logo-orb"></div>
        <div>
          <div class="logo-text-main">CEMS</div>
          <div class="logo-text-sub">Campus Events Hub</div>
        </div>
      </div>
      <span class="sidebar-role-pill">${currentUser.role === roles.STUDENT
      ? "Student"
      : currentUser.role === roles.DEPT_ADMIN
        ? "Dept Admin"
        : "Super Admin"
    }</span>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Navigation</div>
      <ul class="nav-list">
        ${navItems
      .map(
        (item) => `
          <li class="nav-item">
            <button class="nav-link" data-section="${item.key}">
              <span class="nav-link-main">
                <span class="nav-icon">${item.icon}</span>
                <span class="nav-label">${item.label}</span>
              </span>
              <span class="nav-pill">${item.badge}</span>
            </button>
          </li>
        `
      )
      .join("")}
      </ul>
    </nav>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="avatar avatar-subtle">${initials}</div>
        <div class="sidebar-user-info">
          <span class="sidebar-user-name">${currentUser.name}</span>
          <span class="sidebar-user-email">${email}</span>
        </div>
      </div>
      <button class="btn-logout" id="logoutBtn"><svg width="10" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> Logout</button>
    </div>
  `;

  sidebar.querySelectorAll(".nav-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      setActiveSection(section);
      const mobileTitle = document.getElementById("mobileTitle");
      if (mobileTitle) {
        mobileTitle.textContent = btn.querySelector(".nav-label").textContent;
      }
      sidebar.classList.remove("open");
    });
  });

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      currentUser = null;
      currentSection = null;
      renderLogin();
    });
  }
}

function setActiveSection(sectionKey) {
  currentSection = sectionKey;
  const buttons = document.querySelectorAll(".nav-link");
  buttons.forEach((b) =>
    b.classList.toggle("active", b.getAttribute("data-section") === sectionKey)
  );
  renderMain();
}

function renderMain() {
  const mainInner = document.getElementById("mainInner");
  if (!mainInner || !currentUser) return;

  if (!currentSection) {
    if (currentUser.role === roles.STUDENT) currentSection = "student_upcoming";
    else if (currentUser.role === roles.DEPT_ADMIN) currentSection = "dept_events";
    else if (currentUser.role === roles.SUPER_ADMIN) currentSection = "super_overall";
  }

  if (currentUser.role === roles.STUDENT) {
    renderStudentDashboard(mainInner);
  } else if (currentUser.role === roles.DEPT_ADMIN) {
    renderDeptAdminDashboard(mainInner);
  } else if (currentUser.role === roles.SUPER_ADMIN) {
    renderSuperAdminDashboard(mainInner);
  }
}

function renderStudentDashboard(container) {
  const profile = currentUser;
  const registeredForStudent = registrations.filter(
    (r) => r.studentId === profile.id && r.status !== "cancelled"
  );
  const upcomingCount = events.length;
  const registeredCount = registeredForStudent.length;
  
  // Count OD requests that have been approved
  const approvedCount = odRequests.filter(
    (od) => od.studentId === profile.id && od.status === "approved"
  ).length;

  const profileHtml = `
    <section class="profile-card">
      <div class="avatar">${profile.name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()}</div>
      <div class="profile-meta">
        <div class="profile-name">${profile.name}</div>
        <div class="profile-role">Student • ${profile.department} • Year ${profile.year}</div>
        <div class="profile-inline">
          <span>Reg. No: <strong>${profile.registerNumber}</strong></span>
          <span>Class Incharge: ${profile.classIncharge}</span>
          <span>${profile.email}</span>
        </div>
      </div>
      <div class="profile-actions">
        <div class="chips-row">
          <span class="chip"><span class="badge-dot"></span> ${upcomingCount} Upcoming</span>
          <span class="chip chip-soft">${registeredCount} Registered</span>
          <span class="chip chip-soft">${approvedCount} OD Approved</span>
        </div>
      </div>
    </section>
  `;

  let contentHtml = "";
  if (currentSection === "profile_settings") {
    contentHtml = renderProfileSettingsSection(profile);
  } else if (currentSection === "student_upcoming") {
    contentHtml = renderStudentUpcomingSection(profile);
  } else {
    contentHtml = renderStudentRegisteredSection(profile);
  }

  container.innerHTML = `
    <div class="view-layout">
      ${profileHtml}
      ${contentHtml}
    </div>
  `;

  if (currentSection === "profile_settings") {
    attachProfileSettingsHandlers(profile);
  } else {
    attachStudentEventHandlers(profile);
  }
}

function renderStudentUpcomingSection(profile) {
  const sortedEvents = [...events].sort((a, b) => {
    const aOwn = a.department === profile.department ? -1 : 0;
    const bOwn = b.department === profile.department ? -1 : 0;
    if (aOwn !== bOwn) return aOwn - bOwn;
    return a.name.localeCompare(b.name);
  });

  const cards =
    sortedEvents.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No upcoming events yet.</div>
          <div>Once events are added by your departments, they will appear here automatically.</div>
        </div>`
      : `<div class="card-grid">
          ${sortedEvents
        .map((e) => {
          const reg = registrations.find(
            (r) =>
              r.eventId === e.id &&
              r.studentId === profile.id &&
              r.status !== "cancelled"
          );
          const isRegistered = !!reg && reg.status !== "rejected";
          const ownDept = e.department === profile.department;
          return `
                <article class="event-card" data-event-id="${e.id}">
                  ${e.poster ? `<div style="width:100%;height:160px;border-radius:8px;margin-bottom:10px;overflow:hidden;"><img class="poster-image" src="${e.poster}" alt="${e.name}" style="width:100%;height:100%;object-fit:cover;" /></div>` : ""}
                  <div class="event-header-row">
                    <div>
                      <div class="event-name">${e.name}</div>
                      <div class="event-meta">
                        <span class="event-meta-item">
                          <span>🏫</span><span>${e.department}</span>
                        </span>
                        <span class="event-meta-item">
                          <span>📍</span><span>${e.place}</span>
                        </span>
                      </div>
                    </div>
                    <div class="event-dept-pill">
                      ${ownDept ? "Your Dept" : "Other Dept"}
                    </div>
                  </div>
                  <div class="event-meta" style="margin-top:4px;">
                    <span class="event-meta-item">
                      <span>⏰</span>
                      <span>${e.timing}</span>
                    </span>
                  </div>
                  <div class="event-footer-row">
                    <button
                      class="btn btn-small btn-primary btn-register ${isRegistered ? "btn-disabled" : ""
            }"
                      data-event-id="${e.id}"
                    >
                      ${isRegistered ? "Registered" : "Register"}
                    </button>
                  </div>
                </article>
              `;
        })
        .join("")}
        </div>`;

  return `
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Upcoming Events</div>
            <div class="main-subtitle">
              Events from your department are prioritized to help you discover relevant opportunities.
            </div>
          </div>
          <div class="panel-actions">
            <span class="badge-outline-soft">Dept: ${profile.department}</span>
          </div>
        </div>
        <div class="panel-body">
          ${cards}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Registration Summary</div>
            <div class="main-subtitle">Track your OD approvals and upcoming schedule.</div>
          </div>
        </div>
        <div class="panel-body">
          <div class="stat-grid">
            <div class="stat-card">
              <div class="stat-label">Total Upcoming Events</div>
              <div class="stat-value">${events.length}</div>
              <div class="stat-caption">Across all departments</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Events You Registered</div>
              <div class="stat-value">${registrations.filter(
    (r) => r.studentId === profile.id && r.status !== "cancelled"
  ).length}</div>
              <div class="stat-caption">Tap "Registered Events" to manage</div>
            </div>
          </div>
          <div class="stack" style="margin-top:12px;">
            <div class="stack-row">
              <span class="stack-label">OD Approved</span>
              <span class="stack-value">${registrations.filter(
    (r) => r.studentId === profile.id && r.odApproved
  ).length}</span>
            </div>
            <div class="stack-bar"><div class="stack-bar-inner" style="width: ${registrations.filter((r) => r.studentId === profile.id).length === 0
      ? 0
      : (registrations.filter(
        (r) => r.studentId === profile.id && r.odApproved
      ).length /
        registrations.filter((r) => r.studentId === profile.id).length) *
      100
    }%;"></div></div>
            <div class="stack-row">
              <span class="stack-label">Pending OD</span>
              <span class="stack-value">${registrations.filter(
      (r) => r.studentId === profile.id && !r.odApproved && r.status === "pending"
    ).length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStudentRegisteredSection(profile) {
  const regs = registrations.filter(
    (r) => r.studentId === profile.id && r.status !== "cancelled"
  );
  const rows =
    regs.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">You haven't registered for any events yet.</div>
          <div>Explore upcoming events and secure your spot with a single click.</div>
        </div>`
      : `
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Department</th>
              <th>Place</th>
              <th>Timing</th>
              <th>OD Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${regs
        .map((r) => {
          const event = events.find((e) => e.id === r.eventId);
          if (!event) return "";
          
          // Get OD request status from odRequests table
          const odReq = odRequests.find((od) => od.registrationId === r.id);
          let statusClass = "status-pending";
          let statusLabel = "Pending";
          
          if (odReq) {
            if (odReq.status === "approved") {
              statusClass = "status-approved";
              statusLabel = "Approved";
            } else if (odReq.status === "rejected") {
              statusClass = "status-rejected";
              statusLabel = "Rejected";
            } else {
              statusClass = "status-pending";
              statusLabel = "Pending Review";
            }
          }
          
          return `
                  <tr>
                    <td>${event.name}</td>
                    <td>${event.department}</td>
                    <td>${event.place}</td>
                    <td>${event.timing}</td>
                    <td>
                      <span class="status-badge ${statusClass}">${statusLabel}</span>
                    </td>
                    <td>
                      <button
                        class="btn btn-small btn-danger btn-cancel-registration"
                        data-reg-id="${r.id}"
                      >
                        Cancel Registration
                      </button>
                    </td>
                  </tr>
                `;
        })
        .join("")}
          </tbody>
        </table>
      </div>`;

  return `
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Registered Events</div>
            <div class="main-subtitle">
              Review your registrations and OD approval status. You can cancel if you no longer wish to participate.
            </div>
          </div>
        </div>
        <div class="panel-body">
          ${rows}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">OD Guidelines</div>
            <div class="main-subtitle">Overview of institutional OD approval process.</div>
          </div>
        </div>
        <div class="panel-body">
          <div class="stack">
            <div class="stack-row">
              <span class="stack-label">Department Review</span>
              <span class="tag tag-accent"><span class="pill-dot pill-dot-success"></span> Required</span>
            </div>
            <div class="stack-row">
              <span class="stack-label">Super Admin Policy</span>
              <span class="tag"><span class="pill-dot pill-dot-success"></span> Enabled</span>
            </div>
          </div>
          <div class="empty-state" style="margin-top:10px;">
            <div class="empty-title">Tip for Students</div>
            <div>
              Register early for high-demand events and keep your email updated to receive OD approval notifications.
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function attachStudentEventHandlers(profile) {
  attachPosterClickHandlers();
  
  document.querySelectorAll(".btn-register").forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventId = btn.getAttribute("data-event-id");
      const event = events.find((e) => e.id === eventId);
      if (!event) return;
      const existing = registrations.find(
        (r) => r.eventId === eventId && r.studentId === profile.id
      );
      if (existing && existing.status !== "cancelled") {
        showToast("You are already registered for this event.");
        return;
      }
      
      // Create event registration (goes to event hosting department)
      const registrationId = `reg-${Date.now()}`;
      registrations.push({
        id: registrationId,
        eventId,
        studentId: profile.id,
        status: "approved",  // Automatically approved for event registration
        odApproved: false,
      });
      saveRegistrationsToLocalStorage();
      
      // Automatically create OD request (goes to student's own department)
      odRequests.push({
        id: `od-${Date.now()}`,
        studentId: profile.id,
        eventId,
        registrationId,
        department: profile.department,  // Student's own department
        status: "pending",
        createdAt: new Date().toISOString().split('T')[0],
      });
      saveODRequestsToLocalStorage();
      
      showToast("Event registered successfully. OD request sent to your department.");
      renderMain();
    });
  });

  document.querySelectorAll(".btn-cancel-registration").forEach((btn) => {
    btn.addEventListener("click", () => {
      const regId = btn.getAttribute("data-reg-id");
      const idx = registrations.findIndex((r) => r.id === regId);
      if (idx >= 0) {
        registrations.splice(idx, 1);
        saveRegistrationsToLocalStorage();
        showToast("Your registration has been cancelled.");
        renderMain();
      }
    });
  });
}

function renderDeptAdminDashboard(container) {
  const admin = currentUser;
  const deptEvents = events.filter((e) => e.department === admin.department);
  const deptRegistrations = registrations.filter((r) => {
    const ev = events.find((e) => e.id === r.eventId);
    return ev && ev.department === admin.department;
  });

  const profileHtml = `
    <section class="profile-card">
      <div class="avatar">${admin.name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()}</div>
      <div class="profile-meta">
        <div class="profile-name">${admin.name}</div>
        <div class="profile-role">Department Admin • ${admin.department}</div>
        <div class="profile-inline">
          <span>Faculty ID: <strong>${admin.facultyId}</strong></span>
          <span>${admin.email}</span>
          <span>${admin.phone}</span>
        </div>
      </div>
      <div class="profile-actions">
        <div class="chips-row">
          <span class="chip"><span class="pill-dot pill-dot-success"></span> ${deptEvents.length
    } Active Events</span>
          <span class="chip chip-soft">${deptRegistrations.length} Registrations</span>
        </div>
        <span class="badge-soft-blue">${admin.permissionGranted ? "Super Admin Permission: Granted" : "Permission: Pending"
    }</span>
      </div>
    </section>
  `;

  let contentHtml = "";
  if (currentSection === "profile_settings") {
    contentHtml = renderProfileSettingsSection(admin);
  } else if (currentSection === "dept_events") {
    contentHtml = renderDeptEventsSection(admin);
  } else if (currentSection === "dept_registered") {
    contentHtml = renderDeptRegisteredSection(admin);
  } else if (currentSection === "dept_manage") {
    contentHtml = renderDeptManageEventsSection(admin);
  } else if (currentSection === "dept_od") {
    contentHtml = renderDeptODSection(admin);
  }

  container.innerHTML = `
    <div class="view-layout">
      ${profileHtml}
      ${contentHtml}
    </div>
  `;

  if (currentSection === "profile_settings") {
    attachProfileSettingsHandlers(admin);
  } else {
    attachDeptAdminHandlers(admin);
  }
}

function renderDeptEventsSection(admin) {
  const deptEvents = events.filter((e) => e.department === admin.department);

  const cards =
    deptEvents.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No events created yet.</div>
          <div>Use "Add / Manage Events" to publish events for your department.</div>
        </div>`
      : `<div class="card-grid">
          ${deptEvents
        .map((e) => {
          return `
                <article class="event-card">
                  ${e.poster ? `<div style="width:100%;height:160px;border-radius:8px;margin-bottom:10px;overflow:hidden;"><img class="poster-image" src="${e.poster}" alt="${e.name}" style="width:100%;height:100%;object-fit:cover;" /></div>` : ""}
                  <div class="event-header-row">
                    <div>
                      <div class="event-name">${e.name}</div>
                      <div class="event-meta">
                        <span class="event-meta-item">
                          <span>📍</span><span>${e.place}</span>
                        </span>
                        <span class="event-meta-item">
                          <span>⏰</span><span>${e.timing}</span>
                        </span>
                      </div>
                    </div>
                    <div class="event-dept-pill">
                      ${e.department}
                    </div>
                  </div>
                  <div class="event-footer-row">
                    <span class="status-badge status-muted">ID: ${e.id}</span>
                  </div>
                </article>
              `;
        })
        .join("")}
        </div>`;

  return `
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Department Events</div>
            <div class="main-subtitle">
              Overview of events published by the ${admin.department} department.
            </div>
          </div>
          <div class="panel-actions">
            <span class="badge-outline-soft">${admin.department}</span>
          </div>
        </div>
        <div class="panel-body">
          ${cards}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Capacity Snapshot</div>
            <div class="main-subtitle">High-level view of registrations and approvals.</div>
          </div>
        </div>
        <div class="panel-body">
          <div class="stat-grid">
            <div class="stat-card">
              <div class="stat-label">Approved OD</div>
              <div class="stat-value">${registrations.filter((r) => {
    const ev = events.find((e) => e.id === r.eventId);
    return (
      ev && ev.department === admin.department && r.odApproved === true
    );
  }).length
    }</div>
              <div class="stat-caption">Students granted official duty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderDeptRegisteredSection(admin) {
  const deptRegs = registrations.filter((r) => {
    const ev = events.find((e) => e.id === r.eventId);
    return ev && ev.department === admin.department;
  });

  const rows =
    deptRegs.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No registrations yet.</div>
          <div>As students register for your events, they will appear here.</div>
        </div>`
      : `
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Reg. No</th>
              <th>Department</th>
              <th>Year</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            ${deptRegs
        .map((r) => {
          const event = events.find((e) => e.id === r.eventId);
          const stu = students.find((s) => s.id === r.studentId);
          if (!event || !stu) return "";
          return `
                  <tr>
                    <td>${stu.name}</td>
                    <td>${stu.registerNumber}</td>
                    <td>${stu.department}</td>
                    <td>${stu.year}</td>
                    <td>${event.name}</td>
                  </tr>
                `;
        })
        .join("")}
          </tbody>
        </table>
      </div>
    `;

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Event Participants</div>
          <div class="main-subtitle">
            View students registered for your department events. OD requests are managed separately by each student's department.
          </div>
        </div>
        <div class="panel-actions">
          <span class="badge-outline-soft">Total Registrations: ${deptRegs.length
    }</span>
        </div>
      </div>
      <div class="panel-body">
        ${rows}
      </div>
    </section>
  `;
}

function renderDeptManageEventsSection(admin) {
  const deptEvents = events.filter((e) => e.department === admin.department);

  const rows =
    deptEvents.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No events to manage.</div>
          <div>Add a new event using the form above. It will immediately appear for students.</div>
        </div>`
      : `
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Place</th>
              <th>Date</th>
              <th>Timing</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${deptEvents
        .map((e) => {
          return `
                  <tr>
                    <td>${e.name}</td>
                    <td>${e.place}</td>
                    <td>${e.eventDate || ""}</td>
                    <td>${e.timing}</td>
                    <td>
                      <button
                        class="btn btn-small btn-outline btn-edit-event"
                        data-event-id="${e.id}"
                      >
                        Edit
                      </button>
                      <button
                        class="btn btn-small btn-danger btn-delete-event"
                        data-event-id="${e.id}"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                `;
        })
        .join("")}
          </tbody>
        </table>
      </div>
    `;

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Add / Manage Events</div>
          <div class="main-subtitle">
            Create, edit, or delete events for your department. All changes are reflected instantly for students.
          </div>
        </div>
      </div>
      <div class="panel-body">
        <form id="eventForm" class="stack" autocomplete="off">
          <input type="hidden" id="eventId" />
          <div class="form-inline">
            <div class="form-group">
              <label class="form-label" for="eventName">Event Name</label>
              <input class="form-input" id="eventName" required placeholder="e.g. Cloud Computing Bootcamp" />
            </div>
            <div class="form-group">
              <label class="form-label" for="eventPlace">Place</label>
              <input class="form-input" id="eventPlace" required placeholder="e.g. Seminar Hall - 1" />
            </div>
          </div>
          <div class="form-inline">
            <div class="form-group">
              <label class="form-label" for="eventDate">Date</label>
              <input class="form-input" id="eventDate" type="date" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="eventTiming">Timing</label>
              <input class="form-input" id="eventTiming" required placeholder="e.g. 10:00 AM - 4:00 PM" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="eventPoster">Event Poster (Optional)</label>
            <input
              class="form-input"
              id="eventPoster"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
            />
            <div id="posterPreviewContainer" style="margin-top:10px;display:none;">
              <img id="posterPreview" style="max-width:200px;max-height:200px;border-radius:8px;object-fit:cover;" alt="Event Poster Preview" />
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
            <span class="badge-outline-soft">
              Department: ${admin.department}
            </span>
            <div style="display:flex;gap:8px;align-items:center;">
              <button type="button" class="btn btn-ghost btn-small" id="eventFormReset">Clear</button>
              <button type="submit" class="btn btn-primary btn-small">
                <span id="eventFormSubmitLabel">Add Event</span>
              </button>
            </div>
          </div>
        </form>
        <div style="margin-top:14px;">
          ${rows}
        </div>
      </div>
    </section>
  `;
}

function renderDeptODSection(admin) {
  // Get OD requests for the admin's department
  const deptODRequests = odRequests.filter((od) => od.department === admin.department);

  const rows =
    deptODRequests.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No OD requests yet.</div>
          <div>When students register for events, OD requests will appear here for review.</div>
        </div>`
      : `
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Reg. No</th>
              <th>Event</th>
              <th>Event Department</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${deptODRequests
        .map((od) => {
          const stu = students.find((s) => s.id === od.studentId);
          const ev = events.find((e) => e.id === od.eventId);
          if (!stu || !ev) return "";
          const statusClass = od.status === "approved" ? "status-approved" : od.status === "rejected" ? "status-rejected" : "status-pending";
          return `
                  <tr>
                    <td>${stu.name}</td>
                    <td>${stu.registerNumber}</td>
                    <td>${ev.name}</td>
                    <td>${ev.department}</td>
                    <td>${od.createdAt}</td>
                    <td><span class="status-badge ${statusClass}">${od.status.charAt(0).toUpperCase() + od.status.slice(1)}</span></td>
                    <td>
                      ${od.status === "pending" ? `
                        <div style="display:flex;gap:6px;">
                          <button class="btn btn-small btn-success btn-approve-od" data-od-id="${od.id}">Approve</button>
                          <button class="btn btn-small btn-danger btn-reject-od" data-od-id="${od.id}">Reject</button>
                        </div>
                      ` : `<span class="badge-soft">Processed</span>`}
                    </td>
                  </tr>
                `;
        })
        .join("")}
          </tbody>
        </table>
      </div>
    `;

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">OD Requests</div>
          <div class="main-subtitle">
            Review and manage OD requests from students in your department.
          </div>
        </div>
      </div>
      <div class="panel-body">
        ${rows}
      </div>
    </section>
  `;
}

function attachDeptAdminHandlers(admin) {
  attachPosterClickHandlers();
  
  // Handle OD Request Approvals
  document.querySelectorAll(".btn-approve-od").forEach((btn) => {
    btn.addEventListener("click", () => {
      const odId = btn.getAttribute("data-od-id");
      const od = odRequests.find((o) => o.id === odId);
      if (!od) return;
      
      // Verify the OD request belongs to this admin's department
      if (od.department !== admin.department) {
        showToast("You are not authorized to modify this OD request.");
        return;
      }
      
      od.status = "approved";
      saveODRequestsToLocalStorage();
      
      // Update the related registration to mark OD as approved
      const reg = registrations.find((r) => r.id === od.registrationId);
      if (reg) {
        reg.odApproved = true;
        saveRegistrationsToLocalStorage();
      }
      
      showToast("OD request approved.");
      renderMain();
    });
  });

  document.querySelectorAll(".btn-reject-od").forEach((btn) => {
    btn.addEventListener("click", () => {
      const odId = btn.getAttribute("data-od-id");
      const od = odRequests.find((o) => o.id === odId);
      if (!od) return;
      
      // Verify the OD request belongs to this admin's department
      if (od.department !== admin.department) {
        showToast("You are not authorized to modify this OD request.");
        return;
      }
      
      od.status = "rejected";
      saveODRequestsToLocalStorage();
      
      // Update the related registration to mark OD as rejected
      const reg = registrations.find((r) => r.id === od.registrationId);
      if (reg) {
        reg.odApproved = false;
        saveRegistrationsToLocalStorage();
      }
      
      showToast("OD request rejected.");
      renderMain();
    });
  });

  const form = document.getElementById("eventForm");
  const resetBtn = document.getElementById("eventFormReset");
  const eventIdInput = document.getElementById("eventId");
  const nameInput = document.getElementById("eventName");
  const placeInput = document.getElementById("eventPlace");
  const dateInput = document.getElementById("eventDate");
  const timingInput = document.getElementById("eventTiming");
  const posterInput = document.getElementById("eventPoster");
  const posterPreviewContainer = document.getElementById("posterPreviewContainer");
  const posterPreview = document.getElementById("posterPreview");
  const submitLabel = document.getElementById("eventFormSubmitLabel");
  let selectedPosterData = null;

  // Handle poster file selection and preview
  if (posterInput) {
    posterInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) {
        selectedPosterData = null;
        posterPreviewContainer.style.display = "none";
        return;
      }

      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        showToast("Only image files are allowed (JPG, JPEG, PNG)");
        posterInput.value = "";
        selectedPosterData = null;
        posterPreviewContainer.style.display = "none";
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        selectedPosterData = event.target.result;
        posterPreview.src = selectedPosterData;
        posterPreviewContainer.style.display = "block";
      };
      reader.readAsDataURL(file);
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = eventIdInput.value.trim();
      const name = nameInput.value.trim();
      const place = placeInput.value.trim();
      const eventDate = dateInput.value.trim();
      const timing = timingInput.value.trim();
      if (!name || !place || !eventDate || !timing) {
        showToast("Please fill out all event fields with valid values.");
        return;
      }

      if (id) {
        const existing = events.find((ev) => ev.id === id);
        if (existing) {
          existing.name = name;
          existing.place = place;
          existing.eventDate = eventDate;
          existing.timing = timing;
          if (selectedPosterData) {
            existing.poster = selectedPosterData;
          }
          showToast("Event updated.");
        }
      } else {
        const newId = `ev-${String(eventCounter++).padStart(3, "0")}`;
        events.push({
          id: newId,
          name,
          department: admin.department,
          place,
          eventDate,
          timing,
          createdByDeptId: admin.id,
          poster: selectedPosterData || "",
        });
        showToast("New event added for your department.");
      }

      saveEventsToLocalStorage();

      eventIdInput.value = "";
      nameInput.value = "";
      placeInput.value = "";
      dateInput.value = "";
      timingInput.value = "";
      posterInput.value = "";
      selectedPosterData = null;
      posterPreviewContainer.style.display = "none";
      submitLabel.textContent = "Add Event";
      renderMain();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      eventIdInput.value = "";
      nameInput.value = "";
      placeInput.value = "";
      dateInput.value = "";
      timingInput.value = "";
      posterInput.value = "";
      selectedPosterData = null;
      posterPreviewContainer.style.display = "none";
      submitLabel.textContent = "Add Event";
    });
  }

  document.querySelectorAll(".btn-edit-event").forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventId = btn.getAttribute("data-event-id");
      const ev = events.find((e) => e.id === eventId);
      if (!ev) return;
      eventIdInput.value = ev.id;
      nameInput.value = ev.name;
      placeInput.value = ev.place;
      dateInput.value = ev.eventDate || "";
      timingInput.value = ev.timing;
      submitLabel.textContent = "Update Event";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll(".btn-delete-event").forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventId = btn.getAttribute("data-event-id");
      const eventIndex = events.findIndex((e) => e.id === eventId);
      if (eventIndex < 0) return;
      events.splice(eventIndex, 1);
      for (let i = registrations.length - 1; i >= 0; i--) {
        if (registrations[i].eventId === eventId) {
          registrations.splice(i, 1);
        }
      }
      saveEventsToLocalStorage();
      saveRegistrationsToLocalStorage();
      showToast("Event deleted along with related registrations.");
      renderMain();
    });
  });
}

function renderSuperAdminDashboard(container) {
  const profile = currentUser;
  const totalEvents = events.length;
  const totalRegistrations = registrations.length;
  const totalApproved = registrations.filter((r) => r.odApproved).length;

  const profileHtml = `
    <section class="profile-card">
      <div class="avatar">${profile.name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()}</div>
      <div class="profile-meta">
        <div class="profile-name">${profile.name}</div>
        <div class="profile-role">Super Admin</div>
        <div class="profile-inline">
          <span>Faculty ID: <strong>${profile.facultyId}</strong></span>
          <span>${profile.email}</span>
          <span>${profile.phone}</span>
        </div>
      </div>
      <div class="profile-actions">
        <div class="chips-row">
          <span class="chip"><span class="badge-dot"></span> ${totalEvents} Events</span>
          <span class="chip chip-soft">${totalRegistrations} Registrations</span>
          <span class="chip chip-soft">${totalApproved} OD Approved</span>
        </div>
        <button class="btn btn-ghost btn-small">Export Analytics</button>
      </div>
    </section>
  `;

  let contentHtml = "";
  if (currentSection === "profile_settings") {
    contentHtml = renderProfileSettingsSection(profile);
  } else if (currentSection === "super_overall") {
    contentHtml = renderSuperOverallEventsSection();
  } else if (currentSection === "super_dept_wise") {
    contentHtml = renderSuperDeptWiseSection();
  } else if (currentSection === "super_dept_admins") {
    contentHtml = renderSuperDeptAdminProfilesSection();
  } else if (currentSection === "super_participation") {
    contentHtml = renderSuperParticipationSection();
  }

  container.innerHTML = `
    <div class="view-layout">
      ${profileHtml}
      ${contentHtml}
    </div>
  `;

  if (currentSection === "profile_settings") {
    attachProfileSettingsHandlers(profile);
  } else {
    attachSuperAdminHandlers();
  }
}

function renderSuperOverallEventsSection() {
  const cards =
    events.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No upcoming events.</div>
          <div>Department admins can start publishing events from their dashboards.</div>
        </div>`
      : `<div class="card-grid">
          ${events
        .map((e) => {
          const deptAdmin = departmentAdmins.find((d) => d.id === e.createdByDeptId);
          return `
                <article class="event-card">
                  ${e.poster ? `<div style="width:100%;height:160px;border-radius:8px;margin-bottom:10px;overflow:hidden;"><img class="poster-image" src="${e.poster}" alt="${e.name}" style="width:100%;height:100%;object-fit:cover;" /></div>` : ""}
                  <div class="event-header-row">
                    <div>
                      <div class="event-name">${e.name}</div>
                      <div class="event-meta">
                        <span class="event-meta-item">
                          <span>🏫</span><span>${e.department}</span>
                        </span>
                        <span class="event-meta-item">
                          <span>📍</span><span>${e.place}</span>
                        </span>
                      </div>
                    </div>
                    <div class="event-dept-pill">
                      ${e.department}
                    </div>
                  </div>
                  <div class="event-meta" style="margin-top:4px;">
                    <span class="event-meta-item">
                      <span>⏰</span><span>${e.timing}</span>
                    </span>
                  </div>
                  <div class="event-footer-row">
                    <span class="tag tag-accent">${deptAdmin ? deptAdmin.name : "Dept Admin"
            }</span>
                  </div>
                </article>
              `;
        })
        .join("")}
        </div>`;

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Overall Upcoming Events</div>
          <div class="main-subtitle">
            Institutional view of all upcoming college events across departments.
          </div>
        </div>
      </div>
      <div class="panel-body">
        ${cards}
      </div>
    </section>
  `;
}

function renderSuperDeptWiseSection() {
  const departmentsToShow = departments; // all configured departments

  const content =
    departmentsToShow.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No department events found.</div>
          <div>Once departments publish events, they will be grouped here.</div>
        </div>`
      : departmentsToShow
        .map((dept) => {
          const deptEvents = events.filter((e) => e.department === dept);
          const deptRegs = registrations.filter((r) => {
            const ev = events.find((e) => e.id === r.eventId);
            return ev && ev.department === dept;
          });
          const participationCount = deptRegs.length;
          return `
              <section class="panel" style="margin-bottom:12px;">
                <div class="panel-header">
                  <div>
                    <div class="panel-title">${dept} Events</div>
                    <div class="main-subtitle">
                      ${deptEvents.length} upcoming event(s) • ${participationCount} participant(s)
                    </div>
                  </div>
                </div>
                <div class="panel-body">
                  <div class="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Event</th>
                          <th>Place</th>
                          <th>Timing</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${deptEvents
              .map((e) => {
                return `
                              <tr>
                                <td>${e.name}</td>
                                <td>${e.place}</td>
                                <td>${e.timing}</td>
                              </tr>
                            `;
              })
              .join("")}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            `;
        })
        .join("");

  return `
    <section class="view-layout">
      ${content}
    </section>
  `;
}

function renderSuperDeptAdminProfilesSection() {
  const cards =
    departmentAdmins.length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No department admins configured.</div>
          <div>Add department admins to allow them to manage events for their departments.</div>
        </div>`
      : `<div class="card-grid">
          ${departmentAdmins
        .map((a) => {
          const deptEvents = events.filter((e) => e.createdByDeptId === a.id);
          const deptRegs = registrations.filter((r) => {
            const ev = events.find((e) => e.id === r.eventId);
            return ev && ev.department === a.department;
          });
          return `
                <article class="event-card" data-admin-id="${a.id}">
                  <div class="event-header-row">
                    <div>
                      <div class="event-name">${a.name}</div>
                      <div class="event-meta">
                        <span class="event-meta-item">
                          <span>🏫</span><span>${a.department}</span>
                        </span>
                        <span class="event-meta-item">
                          <span>🆔</span><span>${a.facultyId}</span>
                        </span>
                      </div>
                    </div>
                    <span class="status-badge ${a.permissionGranted ? "status-approved" : "status-pending"
            }">${a.permissionGranted ? "Permission Granted" : "Pending"}</span>
                  </div>
                  <div class="event-meta" style="margin-top:6px;">
                    <span class="event-meta-item">
                      <span>📧</span><span>${a.email}</span>
                    </span>
                    <span class="event-meta-item">
                      <span>📞</span><span>${a.phone}</span>
                    </span>
                  </div>
                  <div class="event-footer-row">
                    <div class="pill pill-subtle">
                      <span class="pill-dot pill-dot-success"></span>
                      <span>${deptEvents.length} event(s)</span>
                    </div>
                    <div class="pill pill-subtle">
                      <span class="pill-dot pill-dot-warning"></span>
                      <span>${deptRegs.length} participant(s)</span>
                    </div>
                    <button class="btn btn-small btn-outline btn-toggle-permission" data-admin-id="${a.id
            }">
                      ${a.permissionGranted ? "Revoke Permission" : "Grant Permission"}
                    </button>
                  </div>
                </article>
              `;
        })
        .join("")}
        </div>`;

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Department Admin Profiles</div>
          <div class="main-subtitle">
            Manage department-level access and review admin activity across the campus.
          </div>
        </div>
      </div>
      <div class="panel-body">
        ${cards}
      </div>
    </section>
  `;
}

function renderSuperParticipationSection() {
  const deptStats = students.reduce((acc, s) => {
    if (!acc[s.department]) {
      acc[s.department] = { students: 0, participants: 0, approved: 0 };
    }
    acc[s.department].students += 1;
    const regs = registrations.filter((r) => r.studentId === s.id);
    acc[s.department].participants += regs.length;
    acc[s.department].approved += regs.filter((r) => r.odApproved).length;
    return acc;
  }, {});

  const rows =
    Object.keys(deptStats).length === 0
      ? `<div class="empty-state">
          <div class="empty-title">No participation data yet.</div>
          <div>As students register and receive OD approvals, analytics will appear here.</div>
        </div>`
      : `
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Total Students (sample)</th>
              <th>Registrations</th>
              <th>OD Approved</th>
              <th>Approval Rate</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(deptStats)
        .map(([dept, stats]) => {
          const rate =
            stats.participants === 0
              ? 0
              : Math.round((stats.approved / stats.participants) * 100);
          return `
                  <tr>
                    <td>${dept}</td>
                    <td>${stats.students}</td>
                    <td>${stats.participants}</td>
                    <td>${stats.approved}</td>
                    <td>${rate}%</td>
                  </tr>
                `;
        })
        .join("")}
          </tbody>
        </table>
      </div>
    `;

  return `
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Participation Details</div>
            <div class="main-subtitle">
              Department-wise summary of registrations and OD approvals for strategic decisions.
            </div>
          </div>
        </div>
        <div class="panel-body">
          ${rows}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Policy Insights</div>
            <div class="main-subtitle">High-level guidance for permission decisions.</div>
          </div>
        </div>
        <div class="panel-body">
          <div class="stack">
            <div class="stack-row">
              <span class="stack-label">High Participation Depts</span>
              <span class="tag tag-accent">
                <span class="pill-dot pill-dot-success"></span> Encourage advanced tracks
              </span>
            </div>
            <div class="stack-row">
              <span class="stack-label">Lower Participation</span>
              <span class="tag">
                <span class="pill-dot pill-dot-warning"></span> Recommend outreach events
              </span>
            </div>
            <div class="stack-row">
              <span class="stack-label">OD Utilization</span>
              <span class="tag">
                <span class="pill-dot pill-dot-success"></span> Align with academic calendar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function attachSuperAdminHandlers() {
  attachPosterClickHandlers();
  
  document.querySelectorAll(".btn-toggle-permission").forEach((btn) => {
    btn.addEventListener("click", () => {
      const adminId = btn.getAttribute("data-admin-id");
      const admin = departmentAdmins.find((a) => a.id === adminId);
      if (!admin) return;
      admin.permissionGranted = !admin.permissionGranted;
      showToast(
        `Permission ${admin.permissionGranted ? "granted" : "revoked"} for ${admin.name
        }.`
      );
      renderMain();
    });
  });
}

function renderLogin() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="auth-wrapper">
      <div class="auth-card">
        <section class="auth-form-panel">
          <header class="auth-form-header">
            <div>
              <div class="auth-form-title">Sign in to CEMS</div>
              <p class="auth-form-caption">Secure access to student and department features.</p>
            </div>
            <div class="role-tabs" id="roleTabs">
              <button class="role-tab active" data-role="${roles.STUDENT}">Student</button>
              <button class="role-tab" data-role="${roles.DEPT_ADMIN}">Dept Admin</button>
              <button class="role-tab" data-role="${roles.SUPER_ADMIN}">Super Admin</button>
            </div>
          </header>

          <form id="loginForm" class="stack" autocomplete="off">
            <input type="hidden" id="roleInput" value="${roles.STUDENT}" />
            <div class="form-group">
              <label for="userId" class="form-label">User ID</label>
              <input
                id="userId"
                class="form-input"
                placeholder="Enter your User ID"
                required
              />
            </div>
            <div class="form-group">
              <label for="password" class="form-label">Password</label>
              <input
                id="password"
                type="password"
                class="form-input"
                placeholder="Enter your Password"
                required
              />
            </div>
            <button class="btn btn-primary btn-pill" type="submit">
              Continue to Dashboard
            </button>
          </form>

        </section>
      </div>
    </div>
  `;

  attachLoginHandlers();
}

function attachLoginHandlers() {
  const roleTabs = document.querySelectorAll(".role-tab");
  const roleInput = document.getElementById("roleInput");
  const loginForm = document.getElementById("loginForm");
  const userIdInput = document.getElementById("userId");
  const passwordInput = document.getElementById("password");

  roleTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      roleTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const role = tab.getAttribute("data-role");
      roleInput.value = role;
      if (role === roles.STUDENT) {
        userIdInput.placeholder = "Enter your User ID";
        passwordInput.placeholder = "Enter your Password";
      } else if (role === roles.DEPT_ADMIN) {
        userIdInput.placeholder = "Enter your User ID";
        passwordInput.placeholder = "Enter your Password";
      } else {
        userIdInput.placeholder = "Enter your User ID";
        passwordInput.placeholder = "Enter your Password";
      }
    });
  });

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const role = roleInput.value;
      const userId = userIdInput.value.trim();
      const password = passwordInput.value.trim();
      let user = null;

      if (role === roles.STUDENT) {
        user = students.find(
          (s) => s.userId === userId && s.password === password
        );
      } else if (role === roles.DEPT_ADMIN) {
        user = departmentAdmins.find(
          (a) => a.userId === userId && a.password === password
        );
      } else if (role === roles.SUPER_ADMIN) {
        if (superAdmin.userId === userId && superAdmin.password === password) {
          user = superAdmin;
        }
      }

      if (!user) {
        showToast("Invalid credentials for selected role.");
        return;
      }

      currentUser = user;
      currentSection = null;
      createAppShell();
      renderSidebar();
      renderMain();
      showToast(`Welcome, ${user.name.split(" ")[0]}!`);
    });
  }
}

function renderProfileSettingsSection(user) {
  let additionalFields = "";
  if (user.role === roles.STUDENT) {
    additionalFields = `
          <div class="form-inline" style="margin-bottom: 20px;">
            <div>
              <label class="form-label">Register Number</label>
              <input id="profileRegNo" class="form-input" value="${user.registerNumber || ''}" required />
            </div>
            <div>
              <label class="form-label">Year</label>
              <input id="profileYear" type="number" class="form-input" value="${user.year || ''}" required />
            </div>
          </div>
          <div class="form-inline" style="margin-bottom: 20px;">
            <div>
              <label class="form-label">Department</label>
              <select id="profileDept" class="form-input" required>
                <option value="">Select Department</option>
                ${getDepartmentOptions(user.department || "")}
              </select>
            </div>
            <div>
              <label class="form-label">Class Incharge Name</label>
              <input id="profileIncharge" class="form-input" value="${user.classIncharge || ''}" required />
            </div>
          </div>
    `;
  } else if (user.role === roles.DEPT_ADMIN) {
    additionalFields = `
          <div class="form-group">
            <label class="form-label">Department</label>
            <select id="profileDept" class="form-input" required>
              <option value="">Select Department</option>
              ${getDepartmentOptions(user.department || "")}
            </select>
          </div>
    `;
  }

  return `
    <div class="panel">
      <header class="panel-header">
        <h2 class="panel-title">My Profile Settings</h2>
      </header>
      <div class="panel-body">
        <form id="profileSettingsForm" class="stack">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input id="profileName" class="form-input" value="${user.name || ''}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email ID</label>
            <input id="profileEmail" type="email" class="form-input" value="${user.email || ''}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input id="profilePhone" class="form-input" value="${user.phone || ''}" required />
          </div>
          ${additionalFields}
          <div class="form-inline">
            <button type="submit" class="btn btn-primary btn-pill">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function attachProfileSettingsHandlers(user) {
  const form = document.getElementById("profileSettingsForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      user.name = document.getElementById("profileName").value;
      user.email = document.getElementById("profileEmail").value;
      user.phone = document.getElementById("profilePhone").value;

      if (user.role === roles.STUDENT) {
        const dept = document.getElementById("profileDept").value;
        if (!isValidDepartment(dept)) {
          showToast("Please select a valid department.");
          return;
        }
        user.registerNumber = document.getElementById("profileRegNo").value;
        user.year = document.getElementById("profileYear").value;
        user.department = dept;
        user.classIncharge = document.getElementById("profileIncharge").value;
      } else if (user.role === roles.DEPT_ADMIN) {
        const dept = document.getElementById("profileDept").value;
        if (!isValidDepartment(dept)) {
          showToast("Please select a valid department.");
          return;
        }
        user.department = dept;
      }

      showToast("Profile updated successfully!");
      renderSidebar();
      renderMain();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initPosterModal();
  renderLogin();
});

