function person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height


}

let p1 = new person('Mohammad Mizanur Rahman', 27, 5.5 + "ft")
console.log(p1)
console.log(p1.name)
console.log(p1.age)
console.log(p1.height)

