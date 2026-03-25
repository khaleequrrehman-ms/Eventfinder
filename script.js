// Dummy Data
const events = [
  { name:"Tech Conference", date:"March 30, 2025", location:"Islamabad", description:"Tech trends and innovations.", image: "images/tech-conference.webp" },
  { name:"Music Festival", date:"April 5, 2025", location:"Lahore", description:"Live music performances.", image: "images/music-festival.jpg" },
  { name:"Startup Meetup", date:"April 10, 2025", location:"Karachi", description:"Entrepreneur networking.", image: "images/startup-meetup.png" },
  { name:"Art Exhibition", date:"April 15, 2025", location:"Rawalpindi", description:"Creative artworks.", image: "images/art.jpg" },
  { name:"AI Workshop", date:"April 25, 2025", location:"Multan", description:"Learn basics of Artificial Intelligence.", image: "images/AI-Workshop.webp" }
];
// Show Events
function showEvents(data) {
  const container = document.getElementById("eventContainer");
  container.innerHTML = "";
  data.forEach(event => {
    container.innerHTML += `
      <div class="card">
        <div class="card-image">
          <img src="${event.image}" alt="${event.name}">
        </div>
        <div class="card-content">
          <h3>${event.name}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p>${event.description}</p>
          <button>Register</button>
        </div>
      </div>`;
  });
}

// Initial load
showEvents(events);

// Example search filter (already working)
document.getElementById("search").addEventListener("input", function() {
  const value = this.value.toLowerCase();
  const filtered = events.filter(e => e.name.toLowerCase().includes(value));
  showEvents(filtered); // Cards now same size, no jumping
});

// Dark Mode
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Contact Sidebar
const contactBtn = document.getElementById("contactBtn");
const sidebar = document.getElementById("contactSidebar");
const closeSidebar = document.getElementById("closeSidebar");
contactBtn.addEventListener("click", () => sidebar.classList.add("active"));
closeSidebar.addEventListener("click", () => sidebar.classList.remove("active"));

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  const homeBtn = document.getElementById("homeBtn");
  const eventsBtn = document.getElementById("eventsBtn");

  const heroSection = document.getElementById("heroSection");
  const eventsSection = document.getElementById("eventsSection");

  // Home: Show both hero and events
  homeBtn.addEventListener("click", () => {
    heroSection.style.display = "block";
    eventsSection.style.display = "block";
    eventsSection.scrollIntoView({ behavior: "smooth" });
  });

  // Events: Show only events section
  eventsBtn.addEventListener("click", () => {
    heroSection.style.display = "none";
    eventsSection.style.display = "block";
    eventsSection.scrollIntoView({ behavior: "smooth" });
  });

});