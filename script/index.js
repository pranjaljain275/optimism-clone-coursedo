let collapseElement = document.getElementsByClassName("collapsible");

let i;

for (i = 0; i < collapseElement.length; i++) {
  collapseElement[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let noti = document.querySelector(".course-cart");
let select = document.querySelector(".select");
let button = document.getElementsByTagName("button");
for (let but of button) {
  but.addEventListener("click", (e) => {
    let add = Number(noti.getAttribute("data-count") || 0);
    noti.setAttribute("data-count", add + 1);
    noti.classList.add("zero");

    // image --animation to cart ---//
    let image = e.target.parentNode.querySelector(".courses img");
    let span = e.target.parentNode.querySelector(".courses span");
    let s_image = image.cloneNode(false);
    span.appendChild(s_image);
    span.classList.add("active");
    setTimeout(() => {
      span.classList.remove("active");
      span.removeChild(s_image);
    }, 500);

    // copy and paste //
    let parent = e.target.parentNode;
    let clone = parent.cloneNode(true);
    select.appendChild(clone);
    // clone.lastElementChild.innerText = "Buy-now";

    if (clone) {
      noti.onclick = () => {
        select.classList.toggle("display");
        select.firstElementChild.lastElementChild.textContent = "Buy Now";
      };
    }
  });
}

const temp = document.querySelectorAll(".anim");
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 1s`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});
temp.forEach(temp1=>{
    observer.observe(temp1);
})

