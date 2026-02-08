window.onload = () => {
  const welcomeMessage = document.getElementById("welcomeMessage");
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  welcomeMessage.textContent =
    `${greeting}, welcome to Isaac Listowell Ataaba's portfolio`;
};
