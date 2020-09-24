const {
  add,
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require("../src/math");

// test("Hello world!", () => {});

// test("This should fail!", () => {
//   throw new Error("Failure!");
// });

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);

  // if (total !== 13) {
  //   throw new Error("Total tip should be 13. Got " + total);
  // }

  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);

  expect(total).toBe(12.5);
});

test("Should convert 32 F to 0 C", () => {
  const temp = fahrenheitToCelsius(32);

  expect(temp).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const temp = celsiusToFahrenheit(0);

  expect(temp).toBe(32);
});

//Done async islemlerin tamamlanmasini bekler. Olmasaydi settimeout olumlu gecer icine bakmazdi.
test("Async test demo", (done) => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 2000);
});

test("Should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});
//Ister promise chainingle done kullaniriz istersek done ihtiyacimiz olmadigi async await yapisini kullaniriz.
test("Should add two numbers async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
