async function multiplyAfter1s(num: number): Promise<number> {
  await new Promise((res) => setTimeout(res, 1000));
  return num * 3;
}

(async () => {
  const result = await multiplyAfter1s(5);
  console.log("14: 5 × 3 =", result);
})();