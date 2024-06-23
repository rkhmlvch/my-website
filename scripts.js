document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const fullname = document.getElementById("fullname").value;
      const message = document.getElementById("message").value;

      const subject = `Contact Form Submission from ${fullname}`;
      const body = `${message}`;

      const mailtoLink = `mailto:rkhmlvch@pm.me?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      console.log("Generated mailto link: ", mailtoLink);

      const mailtoAnchor = document.getElementById("mailtoLink");
      mailtoAnchor.href = mailtoLink;
      mailtoAnchor.click();
    });
});
