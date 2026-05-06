const terminal = document.getElementById("terminal");

const logs = [
  "Initializing AWS infrastructure...",
  "Checking ECS cluster status...",
  "Pulling latest Docker images from ECR...",
  "Verifying IAM permissions...",
  "Connecting to RDS database...",
  "Starting RabbitMQ message broker...",
  "Starting Redis cache layer...",
  "Deploying microservices to ECS...",
  "Configuring Application Load Balancer...",
  "Running health checks...",
  "All services healthy ✔",
  "Deployment successful 🚀"
];

let index = 0;
let charIndex = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLog(line) {
  const div = document.createElement("div");
  div.classList.add("log-line");
  terminal.appendChild(div);

  const prefix = "$ ";

  for (let i = 0; i < line.length; i++) {
    div.textContent = prefix + line.substring(0, i + 1);
    terminal.scrollTop = terminal.scrollHeight;
    await sleep(20 + Math.random() * 30);
  }
}

async function runLogs() {
  for (let i = 0; i < logs.length; i++) {
    await typeLog(logs[i]);
    await sleep(400 + Math.random() * 600);
  }

  const done = document.createElement("div");
  done.style.color = "#22c55e";
  done.textContent = "$ SYSTEM READY ✔";
  terminal.appendChild(done);
}

runLogs();
