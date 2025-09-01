function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}

// Demo
simulateTask(1500).then((msg) => console.log("Câu 5:", msg));