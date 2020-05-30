window.addEventListener("load", () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log("map -> ", nameEmailArray);
  return nameEmailArray;
}

function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log("filter -> ", olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();
  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log("forEach -> ", mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log("with reduce -> ", totalAges);

  let sumAges = 0;
  for (let i = 0; i < people.results.length; i++) {
    const element = people.results[i];
    sumAges += element.dob.age;
  }
  console.log("without reduce -> ", sumAges);
}

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === "Minas Gerais";
  });

  console.log("find -> ", found);
}

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === "Amazonas";
  });
  console.log("some -> ", found);

  const notFound = people.results.some((person) => {
    return person.location.state === "Amazonassssss";
  });
  console.log("some -> ", notFound);
}

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === "BR";
  });
  console.log("every -> ", every);

  const notEvery = people.results.every((person) => {
    return person.nat === "US";
  });
  console.log("every -> ", notEvery);
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith("A"))
    .sort((a, b) => {
      return b.name.length - a.name.length;
      //return a.name.length - b.name.length;
      //return a.name.localeCompare(b.name);
    });

  console.log("sort -> ", mappedNames);
}

// function doSort() {
//   const mappedNames = people.results
//     .map((person) => {
//       return {
//         name: person.name.first,
//       };
//     })
//     .filter((person) => person.name.startsWith("A"))
//     .sort((a, b) => {
//       //return b.name.length - a.name.length;
//       return a.name.localeCompare(b.name);
//     });

//   console.log(mappedNames);
// }
