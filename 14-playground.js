// global variables

// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(process)

const { m, sayHi } = require("./2-globals")
const path = require("path")
// const hi = sayHi("Tunde")
// console.log(m)
const os = require("os")
const user = os.version()
const filePath = path.join("content", "downloads", "me.txt")
const absolute = path.resolve(__dirname, "folder", "subfolder", "me.txt")
console.log(absolute)

const fs = require("fs")

const me = fs.readFileSync("./content/subfolder/me.txt", "utf8")
fs.writeFileSync("./content/subfolder/you.txt", me, {
	flag: "a",
})
