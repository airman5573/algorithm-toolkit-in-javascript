function combination(arr, count) {
  const results = [];
  const dfs = (stack, startIndex) => {
    if (stack.length === count) {
      results.push([...stack]);
      return;
    }
    for (let i = startIndex; i < arr.length; i += 1) {
      stack.push(arr[i]);
      dfs(stack, i + 1);
      stack.pop();
    }
  }
  dfs([], 0);
  return results;
}

export default combination;