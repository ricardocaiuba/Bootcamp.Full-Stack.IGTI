window.addEventListener("load", () => {
  console.log("Js started and DOM loaded...");

  const button = document.querySelector("#buttonClick");
  button.addEventListener("click", handleButtonClick);
});

const clickArray = [];

function handleButtonClick() {
  const item = getNewTimestamp();
  clickArray.push(item);
  render(item);
}

function render(item) {
  const ul = document.querySelector("#data");

  const li = document.createElement("li");
  li.textContent = item;

  ul.appendChild(li);

  // ul.innerHTML = "";
  // let lis = "";

  // clickArray.map((item, index) => {
  //   lis += `<li key=${index} >${item}</li>`;
  // });

  // ul.innerHTML = lis;

  document.title = `JS não performático - [${clickArray.length}]`;
}
