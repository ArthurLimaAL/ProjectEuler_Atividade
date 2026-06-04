function doubleBasePalindromes(n) {
  const isPalin = s => s === [...s].reverse().join('');
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (isPalin(i.toString()) && isPalin(i.toString(2)))
      sum += i;
  }
  return sum;
}

doubleBasePalindromes(1000000);