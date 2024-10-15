//    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.cs
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle


let formDom =  document.querySelector("#userForm")

formDom.addEventListener("submit",formSubmit)

function formSubmit(event) {
    event.preventDefault()
    console.log("islem gerceklesti");
    let scoreDom = document.querySelector("#score")
    localStorage.setItem("score",scoreDom.value)
    
    
}