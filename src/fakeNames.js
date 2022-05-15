import faker from "faker";

export const fakeNames = Array.from(Array(10000), () => {
  return faker.name.findName();
});
