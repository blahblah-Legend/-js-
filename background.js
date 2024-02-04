const bgs = ["space1.jpg", "space2.jpg", "space3.jpg", "space4.jpg", "space5.jpg", "space6.jpg", "space7.jpg", "space8.jpg"];
const choose = bgs[Math.floor(Math.random() * bgs.length)];

const src = `images/${choose}`

document.body.style.backgroundImage = `url(${src})`
document.body.style.backgroundSize = "cover"
document.body.style.backgroundRepeat = "no-repeat"