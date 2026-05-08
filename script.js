const form = document.querySelector("#enquiry-form");
const track = document.querySelector("#gallery-track");
const grid = document.querySelector("#gallery-grid");
const status = document.querySelector("#gallery-status");
const prevBtn = document.querySelector('[data-carousel="prev"]');
const nextBtn = document.querySelector('[data-carousel="next"]');

const galleryImages = [
  "WhatsApp Image 2026-05-08 at 12.29.43 PM.jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.45 PM.jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (9).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (10).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (11).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (12).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (13).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (14).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (15).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (16).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (17).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (18).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (19).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (20).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (21).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (22).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (23).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (24).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM (25).jpeg",
  "WhatsApp Image 2026-05-08 at 12.29.46 PM.jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (9).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (10).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (11).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (12).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (13).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (14).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (15).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (16).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (17).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (18).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (19).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (20).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (21).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (22).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (23).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (24).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (25).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (26).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (27).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM (28).jpeg",
  "WhatsApp Image 2026-05-08 at 3.51.06 PM.jpeg",
];

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const buildCarousel = () => {
  if (!track || !status || !grid) {
    return;
  }

  const carouselImages = shuffle(galleryImages);
  const gridImages = shuffle(galleryImages);

  const slides = carouselImages.map((fileName, index) => {
    const slide = document.createElement("figure");
    slide.className = "carousel-slide";
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-label", `Slide ${index + 1}`);

    const img = document.createElement("img");
    img.src = `images/${encodeURIComponent(fileName)}`;
    img.alt = "Campaign moment";
    img.loading = "lazy";

    slide.appendChild(img);
    return slide;
  });

  slides.forEach((slide) => track.appendChild(slide));
  status.textContent = `1 / ${slides.length}`;

  const gridItems = gridImages.map((fileName) => {
    const cell = document.createElement("figure");
    cell.className = "photo-slot";

    const img = document.createElement("img");
    img.src = `images/${encodeURIComponent(fileName)}`;
    img.alt = "Campaign moment";
    img.loading = "lazy";

    cell.appendChild(img);
    return cell;
  });

  gridItems.forEach((cell) => grid.appendChild(cell));
};

const moveCarousel = (direction) => {
  if (!track || !status) {
    return;
  }

  const slideWidth = track.firstElementChild?.clientWidth || 0;
  const gap = 16;
  const offset = slideWidth + gap;
  const currentIndex = Math.round(track.scrollLeft / offset);
  const total = track.children.length;
  const nextIndex = (currentIndex + direction + total) % total;

  track.scrollTo({ left: nextIndex * offset, behavior: "smooth" });
  status.textContent = `${nextIndex + 1} / ${total}`;
};

let autoplayId;

const startAutoplay = () => {
  if (autoplayId || !track) {
    return;
  }

  autoplayId = window.setInterval(() => moveCarousel(1), 3500);
};

const stopAutoplay = () => {
  if (!autoplayId) {
    return;
  }

  window.clearInterval(autoplayId);
  autoplayId = undefined;
};

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => moveCarousel(-1));
  nextBtn.addEventListener("click", () => moveCarousel(1));
}

if (track) {
  track.addEventListener("mouseenter", stopAutoplay);
  track.addEventListener("mouseleave", startAutoplay);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );

    window.location.href =
      `mailto:info@ubasanitinubusupportnetworkuk2027.org.uk?subject=${subject}&body=${body}`;
  });
}

buildCarousel();
startAutoplay();
