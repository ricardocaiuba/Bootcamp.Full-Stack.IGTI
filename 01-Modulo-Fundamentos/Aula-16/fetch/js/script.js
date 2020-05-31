const ricardocaiubaURI = "https://api.github.com/users/ricardocaiuba";
window.addEventListener("load", () => {
  console.log("js loaded...");

  console.log("-> Antes da promisse.");
  const ricardocaiuba = fetch(ricardocaiubaURI)
    .then((res) => {
      console.log("Promisse resolvida -> ", res);
      res.json().then((data) => {
        console.log(data);
        showData(data);
      });
    })
    .catch((error) => {
      console.log("-> Erro na requisição!");
    });
  console.log("-> Depois da promisse.");

  doFetch();
  dofetchAsync();

  divisionPromise(12, 6).then((result) => {
    console.log("divisionPromise(12, 6) -> ", result);
  });

  executeDivisionPromise();

  executeDivisionPromiseAsyncAwait();
});

function showData(data) {
  const user = document.querySelector("#user");
  const { login, name } = data;
  user.textContent = `${login} - ${name}`;
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Não é possível dividir por 0.");
    }
    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisionPromise(12, 0)
    .then((result) => {
      console.log("divisionPromise(12, 0) -> ", result);
    })
    .catch((errorMessage) => {
      console.log("divisionPromise(12, 0) Falha na divisão ->  ", errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 3);
  console.log("executeDivisionPromiseAsyncAwait -> ", division);
}

function doFetch() {
  const ricardocaiuba = fetch(ricardocaiubaURI)
    .then((res) => {
      console.log("Promisse resolvida -> ", res);
      res.json().then((data) => {
        console.log(data);
        showData(data);
      });
    })
    .catch((error) => {
      console.log("-> Erro na requisição!");
    });
}

async function dofetchAsync() {
  const res = await fetch(ricardocaiubaURI);
  const json = await res.json();
  console.log("dofetchAsync -> ", json);
}
