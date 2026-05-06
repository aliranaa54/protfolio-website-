const terminal = document.getElementById("terminal");

const logs = [
  "Initializing AWS...",
  "Pulling Docker images...",
  "Deploying services...",
  "Running health checks...",
  "Deployment complete 🚀"
];

async function run() {
  for (let line of logs) {
    const div = document.createElement("div");
    terminal.appendChild(div);

    for (let i = 0; i < line.length; i++) {
      div.textContent = "$ " + line.substring(0, i + 1);
      await new Promise(r => setTimeout(r, 20));
    }

    await new Promise(r => setTimeout(r, 400));
  }
}

run();
