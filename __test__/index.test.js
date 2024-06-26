const request = require('supertest')
const app = require('../index') // Убедитесь, что путь к файлу правильный

describe('GET /', () => {
	it('должен возвращать статус 200 и загружать HTML-файл', async () => {
		const res = await request(app).get('/')
		expect(res.statusCode).toBe(200)
		// Проверка того, что контент типа text/html
		expect(res.headers['content-type']).toEqual(expect.stringContaining('html'))
		// По вашему усмотрению можно добавить проверки на содержимое HTML-файла
	})
})
