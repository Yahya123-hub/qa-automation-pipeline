#!/usr/bin/env node
const { execSync } = require("child_process");

const args = process.argv.slice(2);
const suite = args[0] || "all";
const env = args.includes("--env=staging") ? "staging" : "prod";

console.log(`🚀 Running ${suite} tests on ${env} environment...`);

// Example: run only smoke or regression tests
if (suite === "smoke") {
  execSync(`npx playwright test tests/smoke --config=${env}.config.js`, { stdio: "inherit" });
} else if (suite === "regression") {
  execSync(`npx playwright test tests/regression --config=${env}.config.js`, { stdio: "inherit" });
} else {
  execSync(`npx playwright test --config=${env}.config.js`, { stdio: "inherit" });
}
