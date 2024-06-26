const express = require('express')

const app = express() // создаем экземпляр приложения
const router = express.Router() // создаем экземпляр роутера

const port = 7070 // записываем порт сервера

// выводим в консоль HTTP METHOD при каждом запросе
router.use(function (req, res, next) {
	console.log('/' + req.method)
	next()
})

// отвечаем на запрос главной страницы файлом index.html
router.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})
let a
// подключаем роутер к приложению
app.use('/', router)

// условие, чтобы проверить, является ли текущий файл точкой входа в приложение
if (require.main === module) {
	// начинаем прослушивать порт, тем самым запуская http-сервер
	app.listen(port, function () {
		console.log('Listening on port ' + port)
	})
}

module.exports = app
