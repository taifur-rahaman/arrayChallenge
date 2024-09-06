// const plus = document.querySelector(".fa-plus");

// plus.addEventListener("click", () => {
//   console.log("clicked");
//   addElement();
// });

// function addElement() {
//   const elements = document.getElementById("arrayInput");
//   const newElement = document.createElement("div");
//   newElement.classList.add("element");
//   newElement.innerHTML = `
// <input type="text" class="inputValue" placeholder="Enter an Element" />
// <button type="submit" class="btn" id="btn">Submit</button>`;
//   elements.appendChild(newElement);
// }

// const btns = document.querySelectorAll(".btn");

// btns.forEach((btn, index) => {
//   btn.addEventListener("click", (e) => {
//     const inputValue = document.querySelectorAll(".inputValue");
//     console.log(index);
//   });
// });

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(arr.reverse());

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2);

console.log(arr3);
arr3.forEach((element, index) => {
  console.log(element, index);
});

let index = 0;

for (let i = 0; i < arr3.length; i++) {
  for (let j = i + 1; j < arr3.length; j++) {
    if (arr3[i] == arr3[j]) {
      index = j;
      break;
    }
  }
}

arr3.splice(index, 1);
console.log(arr3);
arr3.forEach((element, index) => {
  console.log(element, index);
});
