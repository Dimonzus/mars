num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const makePhone = () => {
  return `Phone number: (${num.slice(0, 3).join("")}) ${num
    .slice(3, 6)
    .join("")}-${num.slice(6, 8).join("")}-${num.slice(8, 10).join("")} `
}

console.log(makePhone())
