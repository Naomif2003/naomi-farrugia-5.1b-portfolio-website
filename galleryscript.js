const filterButtons = doucment.querySelectorAll(".filter_buttons button");
const filterdesign = doucment.querySelectorAll(".filter_design .design");

const filterDesign = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    console.log(e.target);
};

filterdesign.foreach(design => {
    design.classList.add("hide");
})

filterButtons.foreach(button => button.addEventListener("click", filterdesign));
