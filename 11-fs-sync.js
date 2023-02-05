//-------------------

const { readFile, writeFile } = require("fs")

const test = readFile("./content/subfolder/test.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err)
		return
	}

	const write = result

	writeFile(
		"./content/subfolder/write.txt",
		` This is the content of test.txt file: ${result}`,
		{ flag: "a" },
		(err, result) => {
			if (err) {
				console.log(err)
				return
			}
			console.log(write)
		}
	)
})
