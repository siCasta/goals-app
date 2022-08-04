const { Router } = require('express')
const fs = require('fs')
const path = require('path')

const router = Router()
const files = fs.readdirSync(path.join(__dirname, './'))

for (const file of files) {
	if (file.includes('.routes.js')) {
		const name = file.split('.')[0]
		router.use(`/${name}`, require(`./${file}`))
	}
}

module.exports = router

