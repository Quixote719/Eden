const getColors = async () => {
  const palette = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
  let p1 = new Promise(res => {
    setTimeout(() => {
      res(palette);
    }, 3000);
  });
  const res = await p1;
  return res;
};

export { getColors };
