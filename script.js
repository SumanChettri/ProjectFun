const loginButton = document.getElementById("loginButton");
const username = document.getElementById("username");
const password = document.getElementById("password");

let isMoving = true; // Initially set the button to move if fields are empty

// Function to check credentials
const validateCredentials = () => {
  if (username.value.trim() === "" || password.value.trim() === "") {
    isMoving = true; // Keep moving if fields are empty
  } else if (username.value === "admin" && password.value === "1234") {
    isMoving = false; // Stop moving if correct credentials are entered
    resetButtonPosition();
  } else {
    isMoving = true; // Move if credentials are incorrect
  }
};

// Reset button position to default
const resetButtonPosition = () => {
  loginButton.style.position = "relative";
  loginButton.style.left = "0";
  loginButton.style.top = "0";
};

// Add dynamic validation on input
username.addEventListener("input", validateCredentials);
password.addEventListener("input", validateCredentials);

// Add hover effect to make the button move randomly when credentials are invalid
loginButton.addEventListener("mouseenter", () => {
  if (isMoving) {
    const container = document.querySelector(".login-container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = loginButton.getBoundingClientRect();

    // Calculate random positions within the container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the random position
    loginButton.style.position = "absolute";
    loginButton.style.left = `${randomX}px`;
    loginButton.style.top = `${randomY}px`;
  }
});

// Final login button click action
loginButton.addEventListener("click", () => {
  if (!isMoving) {
    alert("Login Successful!");
  } else {
    alert("Incorrect or Empty Username/Password!");
  }
});
