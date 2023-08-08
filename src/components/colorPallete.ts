const pallete1 = ['#264653ff', '#2a9d8fff', '#e9c46aff', '#f4a261ff', '#e76f51ff']
const pallete2 = ['#cdb4dbff', '#ffc8ddff', '#ffafccff', '#bde0feff', '#a2d2ffff']
const pallete3 = ['#d8e2dcff', '#ffe5d9ff', '#ffcad4ff', '#f4acb7ff', '#9d8189ff']
const pallete4 = ['#0081a7ff', '#00afb9ff', '#fdfcdcff', '#fed9b7ff', '#f07167ff']
const pallete5 = ['#8ecae6ff', '#219ebcff', '#023047ff', '#ffb703ff', '#fb8500ff']
const pallete6 = ['#f72585ff', '#7209b7ff', '#3a0ca3ff', '#4361eeff', '#4cc9f0ff']
const pallete7 = ['#ef476fff', '#ffd166ff', '#06d6a0ff', '#118ab2ff', '#073b4cff']
const palleteArr = [pallete1, pallete2, pallete3, pallete4, pallete5, pallete6, pallete7]

const colorPallete = (param: number) => {
    return palleteArr[Math.round(param) % (palleteArr.length)]
}

export default colorPallete

