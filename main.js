const terminal = document.getElementById("terminal-body");

const lines = [
  "Initializing AWS Infrastructure...",
  "Pulling Docker images...",
  "Deploying to ECS...",
  "Configuring Load Balancer...",
  "System Ready 🚀"
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    const line = document.createElement("div");
    line.textContent = "$ " + lines[i];
    terminal.appendChild(line);
    i++;
    setTimeout(typeLine, 800);
  }
}

typeLine();
