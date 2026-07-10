function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// 03.........Event Delegation .....................
const productBox = getElement("product-box");
productBox.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("btn")) {
    const cardBtn = e.target;
    // console.log(cardBtn);
    const cardImg = cardBtn.parentNode.parentNode.children[0].children[0].src;
    const cardTitle = cardBtn.parentNode.children[0].innerText;
    const cardPrice = parseFloat(cardBtn.parentNode.children[1].innerText);
    const totalAmount = parseFloat(getElement("total-amount").innerText);
    const parentContainer = getElement("parent-container");

    const finalAmount = cardPrice + totalAmount;
    getElement("total-amount").innerText = finalAmount.toFixed(2);

    const time = new Date().toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "numeric",
      second: "numeric",
    });

    const newElement = document.createElement("div");
    newElement.innerHTML = `
       <div class="bg-base-100 w-full shadow-lg rounded-xl px-2">
            <div class="flex gap-5 justify-around items-center">
              <figure class="w-24 p-2">
                <img src="${cardImg}" alt="" class="rounded-xl h-16 w-24" />
              </figure>
              <div>
                <h2 class="font-semibold">${cardTitle}</h2>
                <div class="flex flex-col gap-1">
                 <p class="text-sm">${cardPrice} TK</p>
                  <p class="text-sm text-gray-500">${time}</p>
                </div>
              </div>
              <button
                class="clear-btn text-sm text-red-500 font-semibold px-3 py-1 mt-2 rounded-xl border-2 border-red-500 hover:cursor-pointer hover:bg-red-50"
              >
                Clear
              </button>
            </div>
          </div>
`;
    parentContainer.append(newElement);
    // clear btn
    const clearBtn = newElement.querySelector(".clear-btn");
    clearBtn.addEventListener("click", () => {
      newElement.remove();
      const totalAmount = parseFloat(getElement("total-amount").innerText);
      const newAmount = totalAmount - cardPrice;
      getElement("total-amount").innerText = newAmount.toFixed(2);
      // console.log(newAmount);
    });
  }
});

// 02..........Traverse Technique....................
// const cardBtns = document.getElementsByClassName("btn");
// for (const cardBtn of cardBtns) {
//   cardBtn.addEventListener("click", () => {
//     const cardImg = cardBtn.parentNode.parentNode.children[0].children[0].src;
//     const cardTitle = cardBtn.parentNode.children[0].innerText;
//     const cardPrice = parseFloat(cardBtn.parentNode.children[1].innerText);
//     const totalAmount = parseFloat(getElement("total-amount").innerText);
//     const parentContainer = getElement("parent-container");

//     const finalAmount = cardPrice + totalAmount;
//     getElement("total-amount").innerText = finalAmount.toFixed(2);

//     const time = new Date().toLocaleTimeString("en-us", {
//       hour: "2-digit",
//       minute: "numeric",
//       second: "numeric",
//     });

//     const newElement = document.createElement("div");
//     newElement.innerHTML = `
//        <div class="bg-base-100 w-full shadow-lg rounded-xl px-2">
//             <div class="flex gap-5 justify-around items-center">
//               <figure class="w-24 p-2">
//                 <img src="${cardImg}" alt="" class="rounded-xl h-16 w-24" />
//               </figure>
//               <div>
//                 <h2 class="font-semibold">${cardTitle}</h2>
//                 <div class="flex flex-col gap-1">
//                  <p class="text-sm">${cardPrice} TK</p>
//                   <p class="text-sm text-gray-500">${time}</p>
//                 </div>
//               </div>
//               <button
//                 class="clear-btn text-sm text-red-500 font-semibold px-3 py-1 mt-2 rounded-xl border-2 border-red-500 hover:cursor-pointer hover:bg-red-50"
//               >
//                 Clear
//               </button>
//             </div>
//           </div>
// `;
//     parentContainer.append(newElement);
//     // clear btn
//     const clearBtn = newElement.querySelector(".clear-btn");
//     clearBtn.addEventListener("click", () => {
//       newElement.remove();
//       const totalAmount = parseFloat(getElement("total-amount").innerText);
//       const newAmount = totalAmount - cardPrice;
//       getElement("total-amount").innerText = newAmount.toFixed(2);
//       // console.log(newAmount);
//     });
//   });
// }

// 01..........Traditional Technique..................
// document.getElementById("card-btn").addEventListener("click", () => {
//   const cardTitle = getElement("title").innerText;
//   const cardImg = getElement("img").src;
//   const cardPrice = getElement("price").innerText;
//   const totalAmout = getElement("total-amount").innerText;
//   const parentContainer = getElement("parent-container");

//   const finalAmout = Number(cardPrice) + Number(totalAmout);
//   getElement("total-amount").innerText = finalAmout;
//   console.log(finalAmout);

//   const date = new Date().toLocaleDateString("en-us", {
//     dateStyle: "short",
//   });
//   const time = new Date().toLocaleTimeString("en-us", {
//     hour: "2-digit",
//     minute: "numeric",
//     second: "numeric",
//   });

// const newElement = document.createElement("div");
// newElement.innerHTML = `
//    <div class="bg-base-100 w-full shadow-lg rounded-xl">
//           <div class="flex gap-5  items-center">
//             <figure class="w-24 p-2">
//               <img src="${cardImg}" alt="" class="rounded-xl"/>
//             </figure>
//             <div>
//               <h2 class="font-semibold">${cardTitle}</h2>
//              <div class="fles gap-2">
//               <p class="text-sm text-gray-500">${date} </p>
//               <p class="text-sm text-gray-500">${time}</p>
//              </div>
//             </div>
//           </div>
//         </div>`;

// parentContainer.append(newElement);
// });
