const { setup } = require('./helpers/requestsSpecHelper')
const faker = require('faker')
let server, request


describe("Donors endpoint", function () {
	beforeAll(() => {
		[server, request] = setup()
	})
	afterAll(() => {
        server.close()
	})
	describe("Adding donor", function () {
		const newDonor = {
			name: faker.name.firstName(),
			address: faker.address.streetAddress(),
			governerate: faker.address.streetAddress(),
			category: faker. ,
			email: faker.internet.email(),
			telephone: faker.phone.phoneNumber(),
			bloodGroup: "O",
			longitude:faker.address.longitude(),
			latitude: faker.address.latitude(),
		}

		it("should add donor in case ip is not provided", function (done) {
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(200)
				expect(res.body.firstName).toBe(newDonor.firstName)
				expect(res.body.lastName).toBe(newDonor.lastName)
				expect(res.body.email).toBe(newDonor.email)
				expect(res.body.telephone).toBe(newDonor.telephone)
				expect(res.body.bloodGroup).toBe(newDonor.bloodGroup)
				expect(parseInt(res.body.location.coordinates[0])).toBeTruthy()
				expect(parseInt(res.body.location.coordinates[1])).toBeTruthy()			
				expect(res.body.address).toBe(newDonor.address)
				done();
			})
		})
		it("should add donor in case ip is provided", function (done) {
			newDonor.ip = '1.2.3'
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(200)
				expect(res.body.firstName).toBe(newDonor.firstName)
				expect(res.body.lastName).toBe(newDonor.lastName)
				expect(res.body.email).toBe(newDonor.email)
				expect(res.body.telephone).toBe(newDonor.telephone)
				expect(res.body.bloodGroup).toBe(newDonor.bloodGroup)
				expect(parseInt(res.body.location.coordinates[0])).toBeTruthy()
				expect(parseInt(res.body.location.coordinates[1])).toBeTruthy()			
				expect(res.body.address).toBe(newDonor.address)
				expect(res.body.ip).toBe(newDonor.ip)
				done();
			})
		})
		it("should respond by error message in case item and ip is not provided", function (done) {
			newDonor.address = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case item is not provided and ip is provided", function (done) {
			newDonor.address = undefined
			newDonor.ip = '1.2.3'
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case address is not provided", function (done) {
			newDonor.address = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case firstName is not provided", function (done) {
			newDonor.firstName = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case lastName is not provided", function (done) {
			newDonor.lastName = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case email is not provided", function (done) {
			newDonor.email = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case telephone is not provided", function (done) {
			newDonor.telephone = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case bloodGroup is not provided", function (done) {
			newDonor.bloodGroup = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case longitude is not provided", function (done) {
			newDonor.longitude = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should respond by error message in case latitude is not provided", function (done) {
			newDonor.latitude = undefined
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case latitude is under range", function (done) {
			newDonor.latitude = -91
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case latitude is above range", function (done) {
			newDonor.latitude = 91
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case longitude is under range", function (done) {
			newDonor.latitude = -181
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case longitude is above range", function (done) {
			newDonor.latitude = 181
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case longitude is a string", function (done) {
			newDonor.longitude = 'a'
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case longitude is a boolean", function (done) {
			newDonor.longitude = true
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case longitude is an object", function (done) {
			newDonor.longitude = {a:1}
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case latitude is a string", function (done) {
			newDonor.latitude = 'a'
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case latitude is a boolean", function (done) {
			newDonor.latitude = true
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
        it("should respond by error message in case latitude is an object", function (done) {
			newDonor.latitude = {a:1}
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
        })
       
        

    })
})