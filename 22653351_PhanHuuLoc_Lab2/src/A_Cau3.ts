function rejectPromise(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

rejectPromise()
  .then((res) => console.log("Câu 3:", res))
  .catch((err) => console.error("Câu 3 Error:", err.message));