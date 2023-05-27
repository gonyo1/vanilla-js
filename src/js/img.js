const imageContainer = body.querySelector("#image-container-img")
const files = Array.from({length:7}, (_,i) => `${i}.jpg`);

var imagefile = files[Math.floor(Math.random() * files.length)]

function paintImageContainer() {
    let windowInnerWidth = window.innerWidth
    let windowInnerHeight = window.innerHeight

    // calculate ratio
    var windowRatio = (windowInnerWidth/windowInnerHeight)
    console.log(windowRatio)

    imageContainer.src = `src/img/${imagefile}`
    if (windowRatio > (16/9)) {
        // width 100vw
        imageContainer.style.width = "100vw";
        // height 100vh
        imageContainer.style.height = "";
    } else {
        // width 100vw
        imageContainer.style.width = "";
        // height 100vh
        imageContainer.style.height = "100vh";
    }
    imageContainer.style.backgroundPosition = "center";
    imageContainer.style.backgroundRepeat = "no-repeat";
}

paintImageContainer()
window.addEventListener("resize", paintImageContainer)