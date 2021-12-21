const cursor = document.querySelector(".cursor");
const cursorSpot = document.querySelector(".cursor-spot");


document.addEventListener('mousemove',(e)=>{
    cursor.style.cssText = cursorSpot.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
})


const mm = new MagnetMouse({
    magnet: {
        elemet: ".magnet",
    },
})

mm.int()