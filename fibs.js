const fibs = (n) => {
  if (n == 1) return [1];
  let ans = [1, 1];
  for (let i = 2; i < n - 1; i++) {
    ans.push(ans[i - 1] + ans[i - 2]);
  }
  return ans;
};

const fibsRec = (n) => {
  if (n == 1) return [1];
  if (n == 2) return [1, 1];
  let ans = fibs(n - 1);
  ans.push(ans[ans.length - 1] + ans[ans.length - 2]);
  return ans;
};
console.log(fibsRec(9));
