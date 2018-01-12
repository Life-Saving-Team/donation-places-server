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
	describe("Getting donor", function () {
		const newDonor = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email(),
			telephone: faker.phone.phoneNumber(),
			bloodGroup: "A",
			longitude:faker.address.longitude(),
			latitude: faker.address.latitude(),
			address: faker.address.streetAddress()
		}
		let id
		beforeAll((done)=>{
			request.post('/donors').send(newDonor).end((err, res) => {
				id=res.body._id
				done()
			})
		})

		it("should get donor successfully ", function (done) {
			request.get('/donors/'+ id).end((err, res) => {
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
        it("should respond by 400 error when id is wrong ", function (done) {
			request.get('/donors/'+ 20).end((err, res) => {
                expect(res.status).toEqual(400)
				done();
			})
        })
    })
})