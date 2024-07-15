// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  // Applying the theme based on the cookie
  const theme = getCookie("theme");
  if (theme) {
    document.body.className = theme;
  }

  // Event listeners for the buttons
  document
    .querySelector('button[name="dark"]')
    .addEventListener("click", () => {
      fetch("/dark-mode").then(() => {
        document.body.className = "dark-mode";
      });
    });

  document
    .querySelector('button[name="light"]')
    .addEventListener("click", () => {
      fetch("/light-mode").then(() => {
        document.body.className = "light-mode";
      });
    });
});
