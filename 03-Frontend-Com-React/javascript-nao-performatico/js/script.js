window.addEventListener("load", () => {
  console.log("Js started and DOM loaded...");

  const button = document.querySelector("#buttonClick");
  button.addEventListener("click", handleButtonClick);
});

const clickArray = [];

function handleButtonClick() {
  clickArray.push(getNewTimestamp());
  render();
}

function render() {
  const ul = document.querySelector("#data");
  ul.innerHTML = "";
  let lis = "";

  clickArray.map((item, index) => {
    lis += `<li key=${index} >${item}</li>`;
  });

  ul.innerHTML = lis;

  document.title = `JS não performático - [${clickArray.length}]`;
}
