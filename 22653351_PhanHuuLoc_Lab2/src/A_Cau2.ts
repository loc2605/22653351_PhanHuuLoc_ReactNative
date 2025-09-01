function getNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

getNumber().then((num) => console.log("Câu 2:", num));