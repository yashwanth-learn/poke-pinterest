const sliceForRows = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i += 3) {
    const chunk = arr.slice(i, i + 3);
    res.push(chunk);
  }
  return res;
};

export default sliceForRows;
    