async function getMultipleTodos() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];

  for (const url of urls) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
}

getMultipleTodos();