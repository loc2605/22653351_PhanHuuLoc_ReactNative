function sayHelloAsync(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
}

sayHelloAsync().then((message) => {
  console.log(message);
});