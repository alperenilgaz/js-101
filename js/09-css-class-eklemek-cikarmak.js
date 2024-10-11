// ******* css class eklemek veya cikarmak *******


let education = document.querySelector("#education")

education.classList.add("primary")
education.classList.add("success")
education.classList.add("danger")
education.classList.add("warning")


education.classList.remove("warning","success","danger")
console.log(education.classList);
