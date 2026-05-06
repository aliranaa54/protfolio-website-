const terminal = document.getElementById("terminal-body");

const lines = [
  "Initializing AWS infrastructure...",
  "Checking ECS cluster...",
  "Pulling Docker images...",
  "Connecting to RDS...",
  "Starting services...",
  "Deployment complete 🚀"
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    const div = document.createElement("div");
    div.textContent = "$ " + lines[i];
    terminal.appendChild(div);
    i++;
    setTimeout(typeLine, 700);
  }
}

typeLine();
