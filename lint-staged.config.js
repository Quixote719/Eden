module.exports = {
  '*.{js,jsx,less,md,json}': ['prettier --write'],
  '*.ts?(x)': ['eslint --fix', 'prettier --parser=typescript --write'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit'
};
