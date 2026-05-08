const form = document.querySelector("#enquiry-form");

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
