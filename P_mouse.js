window.onload = function(){
    const cursor = document.querySelector(".mouse");
const cursor2 = document.querySelector(".mouse2");

// 커서 좌표값 할당
window.addEventListener("mousemove", e => {
    // gsap
    gsap.to(cursor, {duration: 0.3, left: e.pageX - 5, top: e.pageY -5});
    gsap.to(cursor2, {duration: 0.8, left: e.pageX - 15, top: e.pageY -15});

    // forEach
    document.querySelectorAll(".train1 li").forEach(li => {
        li.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            cursor2.classList.add("active");
        });
        li.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            cursor2.classList.remove("active");
        });
    });

    document.querySelectorAll(".elv1>div li").forEach(li => {
        li.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            cursor2.classList.add("active");
        });
        li.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            cursor2.classList.remove("active");
        });
    });

    document.querySelectorAll(".profile>div").forEach(li => {
        li.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            cursor2.classList.add("active");
        });
        li.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            cursor2.classList.remove("active");
        });
    });

    document.querySelectorAll(".program>div>p:nth-of-type(2)").forEach(li => {
        li.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            cursor2.classList.add("active");
        });
        li.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            cursor2.classList.remove("active");
        });
    });
});
}
