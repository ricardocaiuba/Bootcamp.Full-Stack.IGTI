window.addEventListener("load", () => {
  console.log("js loaded...");

  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === "Mr"
  );
  console.log("spread (Men) -> ", marriedMen);

  const marriedWomen = people.results.filter(
    (person) => person.name.title === "Ms"
  );
  console.log("spread (Women) -> ", marriedWomen);

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: "Oi" }];
  console.log("spread (together) -> ", marriedPeople);
}

function doRest() {
  console.log("rest 'infiniteSum(1, 2)' -> ", infiniteSum(1, 2));
  console.log("rest -> ", infiniteSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function doDestructuring() {
  const first = people.results[0];
  console.log("const first = people.results[0] -> ", first);

  //   Repetitivo
  //   const userName = first.login.username;
  //   const password = first.login.password;
  const { username, password } = first.login;
  console.log("destructuring -> ", username);
  console.log("destructuring -> ", password);
}
