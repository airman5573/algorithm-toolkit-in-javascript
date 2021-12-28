function permutation(arr) {
  const results = [];
  const dfs = (remains, perm = []) => {
    if (remains.length === 0) {
      results.push([...perm]);
      return;
    }
    for (let i = 0; i < remains.length; i += 1) {
      perm.push(remains[i]);
      dfs(remains.filter((_, j) => j != i), perm);
      perm.pop();
    }
  }
  dfs(arr);
  return results;
}

export default permutation;