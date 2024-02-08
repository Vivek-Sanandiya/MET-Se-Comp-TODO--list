let addBtn = document.querySelector('#add-button')
let element = document.querySelector(".todo-input-box")


// function printData() {
//   let dta = localStorage.getItem("data");
//   let dtalist = document.querySelector(".todo-list");

//   dta = JSON.parse(dta);

//   let list = dta.map((value) => {
//     let color = "";
//     let no = "";
//     if (value.prior === "high") {
//       color = "#EA3D2F";
//       no = "!!!";
//     }
//     if (value.prior === "medium") {
//       color = "#367BF5";
//       no = "!!";
//     }
//     if (value.prior === "low") {
//       color = "#2FA84F";
//       no = "!";
//     }
//     return `<section class="todo-box">
//               <div>
//                 <div>
//                   <h2> ${value.name}<bclass="show-priority">!</b> </h2>
//                   <span>${value.desc} </span>
//                 </div>
                
//                 </div>
//           </section>`;
//         });
//         dtalist.innerHTML = list.join("");
//         removeTodo();
//     }
    
//     printData();
//     // addBtn.addEventListener("click", () => {
//     //     element.style.visibility = "visible";
//     });



addBtn.addEventListener("click",()=>{
    element.style.visibility="visible";
})

let save = document.querySelector(".save")
save.addEventListener('click',()=>{
    let name1 = document.querySelector('.name')
    let description1 = document.querySelector('.description')
    let priority1 = document.querySelector('.priority')   

    let newData = {
    name: name1.value,
    desc: description1.value,
    prior: priority1.value,
    id: Date.now(),
    };
  
    let data = localStorage.getItem("data");
    data = data === null ? [] : JSON.parse(data);
    data.push(newData);
    localStorage.setItem("data", JSON.stringify(data));
    name1.value = description1.value = priority1.value = "";
    //let a = data.length
    // console.log(a)
    let element = document.querySelector('.todo-input-box')
    element.style.visibility = "hidden";
});

