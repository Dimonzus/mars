num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const makePhone = (arr) => {
  return `Phone number: (${arr.slice(0, 3).join("")}) ${arr
    .slice(3, 6)
    .join("")}-${arr.slice(6, 8).join("")}-${arr.slice(8, 10).join("")} `
}

console.log(makePhone(num))
