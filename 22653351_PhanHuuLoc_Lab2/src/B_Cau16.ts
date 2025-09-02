async function multiplyAfter1s(num: number): Promise<number> {
  await new Promise((res) => setTimeout(res, 1000));
  return num * 3;
}

async function runParallel() {
  console.log("16: Parallel start");
  const results = await Promise.all([
    multiplyAfter1s(5),
    multiplyAfter1s(6),
    multiplyAfter1s(7),
  ]);
  console.log("16: Results =", results);
}

runParallel();
