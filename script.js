const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++
        if (itemNumber - (4 + clickCounter) + (4 - ratio)>= 0){
         movieLists[i].style.transform = `translateX(${
             movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
         }px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
})

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".conatiner,.movie-list-tittle,.navbar-conatiner,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click",()=>{
    items.forEach((item)=>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

  document.getElementById("watchBtn").addEventListener("click", function() {
    let oldModal = document.getElementById("movieModal");
    if(oldModal) oldModal.remove();

    let modal = document.createElement("div");
    modal.id = "movieModal";
    Object.assign(modal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999",
      opacity: "0",            
      transition: "opacity 0.5s ease" 
    });

    let content = document.createElement("div");
    Object.assign(content.style, {
      background: "#1c1c1c",
      padding: "20px",
      borderRadius: "15px",
      width: "320px",
      textAlign: "center",
      position: "relative",
      transform: "scale(0.9)",
      transition: "transform 0.5s ease"
    });

    let poster = document.createElement("img");
    poster.src = "../../assets/trending1.jpg";
    Object.assign(poster.style, {
      width: "100%",
      borderRadius: "10px"
    });


    let genre = document.createElement("div");
    genre.innerText = "Action | Drama ";
    Object.assign(genre.style, {
      margin: "15px 0",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#ffcc70"
    });

    let btn = document.createElement("button");
    btn.innerHTML = "Get Started <span style='font-size:20px;'>&#8250;</span>";
    Object.assign(btn.style, {
      background: "#ff4d6d",
      border: "none",
      padding: "10px 20px",
      borderRadius: "25px",
      cursor: "pointer",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold"
    });

    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    Object.assign(closeBtn.style, {
      position: "absolute",
      top: "10px",
      right: "15px",
      fontSize: "25px",
      color: "white",
      cursor: "pointer"
    });

    closeBtn.onclick = () => modal.remove();

    content.appendChild(closeBtn);
    content.appendChild(poster);
    content.appendChild(genre);
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);

    setTimeout(() => {
      modal.style.opacity = "1";
      content.style.transform = "scale(1)";
    }, 50);

    modal.addEventListener("click", function(e) {
      if(e.target === modal) modal.remove();
    });
  });
