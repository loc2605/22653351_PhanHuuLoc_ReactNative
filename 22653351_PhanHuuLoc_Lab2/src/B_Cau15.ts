async function multiplyAfter1s(num: number): Promise<number> {
  await new Promise((res) => setTimeout(res, 1000));
  return num * 3;
}

async function runSequential() {
  console.log("15: Sequential start");
  const a = await multiplyAfter1s(2);
  console.log("15: Result A =", a);
  const b = await multiplyAfter1s(3);
  console.log("15: Result B =", b);
  const c = await multiplyAfter1s(4);
  console.log("15: Result C =", c);
}

runSequential();
