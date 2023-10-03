// let cursor = document.getElementById("cursor")

// function touch() {
//     try {
//         document.createEvent("touchEvent")
//         return true;
//     } catch (e) {
//         return false;
//     }
// }

// const move = (e) => {
//     try {
//         var x = !touch() ? e.pageX : e.touches[0].pageX;
//         var y = !touch() ? e.pageY : e.touches[0].pageY;
//     } catch (e) {}
//     cursor.style.left = x + 30 + "px"
//     cursor.style.top = y + "px"
// }

// document.addEventListener("mousemove", (e) => {
//     move(e);
// })
// document.addEventListener("touchmove", (e) => {
//     move(e);
// })