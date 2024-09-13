document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
      item.querySelector(".FAQ-title").addEventListener("click", () => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
          item.querySelector(".FAQ-content").classList.remove("show");
          item.querySelector(".expandToggle").innerHTML = "+";
          
        } else {
          document.querySelectorAll(".item").forEach((el) => {
            el.classList.remove("selected");
            el.querySelector(".FAQ-content").classList.remove("show");
          });
          item.classList.add("selected");
          item.querySelector(".FAQ-content").classList.add("show");
          item.querySelector(".expandToggle").innerHTML = "-";
        }
      });
    });
  
  });
  