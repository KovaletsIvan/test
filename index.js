const calculator = (str) => {
  const [firstEl, operator, secondEl] = str.split(" ");
  const first = firstEl.length;
  const second = secondEl.length;

  switch (operator) {
    case "+":
      return Array(first + second)
        .fill(".")
        .join("");
    case "-":
      return first >= second
        ? Array(first - second)
            .fill(".")
            .join("")
        : "";
    case "*":
      return Array(first * second)
        .fill(".")
        .join("");
    case "/":
      return first % second === 0
        ? Array(first / second)
            .fill(".")
            .join("")
        : "";
  }
};

console.log(calculator(".... / .."));

const grid = (num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const arrToShow = [];

  for (let i = 0; i < num; i++) {
    alphabet.slice(i, num + i).length < num
      ? arrToShow.push(
          alphabet
            .slice(i, num + i)
            .concat(alphabet.slice(0, num - alphabet.slice(i, num + i).length))
            .join(" ")
        )
      : arrToShow.push(alphabet.slice(i, num + i).join(" "));
  }
  return arrToShow.join("\n");
};

console.log(grid(20));
