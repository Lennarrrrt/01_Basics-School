async function hashSHA256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

document.getElementById("loginForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const user = document.getElementById("uname").value;
  const passwordInput = document.getElementById("textInput").value;

  const hashed = await hashSHA256(passwordInput);

  const usernameArray = ["lennart", "isaak"];

  // Pre-hashed passwords (SHA-256)
  const passwordArray = [
    "aac3c462e38543d87fca5d94abd03aebcf63dc703e323062daec2e98300b4ad0", // example
    "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"  // hash of "123456"
  ];
  console.log(hashed);
  let valid = false;

  for (let i = 0; i < usernameArray.length; i++) {
    if (user === usernameArray[i] && hashed === passwordArray[i]) {
      valid = true;
      break;
    }
  }

  if (valid) {
    alert("Login successful");
  } else {
    alert("Invalid username or password");
  }
});