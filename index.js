document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.color = "white";
document.body.style.backgroundColor = "#333";
document.body.style.backgroundImage = "url('background.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
document.body.style.textAlign = "center";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.minHeight = "100vh";

// Container
const container = document.createElement("div");
container.style.padding = "20px";
container.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
container.style.borderRadius = "15px";
container.style.width = "90%";
container.style.maxWidth = "400px";
container.style.boxSizing = "border-box";
document.body.appendChild(container);

// Title
const title = document.createElement("div");
title.className = "title";
title.style.fontSize = "24px";
title.style.color = "white";
title.style.marginTop = "20px";
title.style.marginBottom = "20px";
title.textContent = "⌁ Apk Methode Work ⌁";
container.appendChild(title);

// Welcome message
const welcome = document.createElement("div");
welcome.className = "welcome";
welcome.style.fontSize = "18px";
welcome.style.fontWeight = "bold";
welcome.style.color = "#FFF";
welcome.style.marginBottom = "20px";
welcome.textContent = "🌿 Welcome To DARKSET 🌿";
container.appendChild(welcome);

// Button container
const buttonContainer = document.createElement("div");
buttonContainer.className = "button-container";
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "column";
buttonContainer.style.alignItems = "center";
container.appendChild(buttonContainer);

// Function to create buttons
function createButton(text, href, alertMessage) {
    const button = document.createElement("a");
    button.href = href;
    button.className = "cool-button";
    button.style.width = "80%";
    button.style.padding = "15px";
    button.style.margin = "10px 0";
    button.style.fontSize = "18px";
    button.style.color = "white";
    button.style.fontWeight = "bold";
    button.style.background = "linear-gradient(45deg, #6a11cb, #2575fc)";
    button.style.border = "none";
    button.style.borderRadius = "25px";
    button.style.cursor = "pointer";
    button.style.textDecoration = "none";
    button.style.textAlign = "center";
    button.style.display = "inline-block";
    button.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
    button.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    button.textContent = text;
    button.onclick = function () {
        alert(alertMessage + " BERHASIL!");
    };
    button.onmouseover = function () {
        button.style.transform = "scale(1.05)";
        button.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.3)";
    };
    button.onmouseout = function () {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
    };
    buttonContainer.appendChild(button);
}

// Create buttons
createButton("NEWS TOOLS", "form.php", "TOOLS BUKA BANNED");
createButton("BANNED", "banned.php", "BANNED");
createButton("UNBANNED", "unbanned.php", "RESET OTP");
createButton("RISET OTP", "otp.php", "COOL FEATURE");

// Developer text
const developer = document.createElement("div");
developer.className = "developer";
developer.style.marginTop = "20px";
developer.style.fontSize = "16px";
developer.style.color = "white";
developer.textContent = "[ DEVELOPER ]";
container.appendChild(developer);

// Footer
const footer = document.createElement("div");
footer.className = "footer";
footer.style.marginTop = "30px";
footer.style.fontSize = "14px";
footer.style.fontWeight = "bold";
footer.style.color = "#FFF";
footer.textContent = "© COPYRIGHT DARKSET WHATSAPP";
container.appendChild(footer);
