function simulateTask(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task finished in ${ms}ms`);
    }, ms);
  });
}

async function runTaskWithErrorHandling() {
  try {
    throw new Error("Something went wrong!");
    const result = await simulateTask(1000);
    console.log("13:", result);
  } catch (err) {
    console.error("13: Error caught ->", err);
  }
}

runTaskWithErrorHandling();