const { setup } = require('./helpers/requestsSpecHelper')
const faker = require('faker')


let server, request, socket_io, firstUser

describe("Donors endpoint", function () {
    beforeAll(() => {
        [server, request] = setup()
        socket_io = require('../../Code/Server/src/socket/socket.bootstrap.js')
        socket_io.instantiate(server)
        firstUser = require('socket.io-client')('http://localhost:6000');

    })
    afterAll(() => {
        firstUser.disconnect()
        server.close()
    })
    describe("Updating donor", function () {
        const newDonor = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            bloodGroup: "O",
            longitude: faker.address.longitude(),
            latitude: faker.address.latitude(),
            address: faker.address.streetAddress()
        }
        let id
        beforeAll((done) => {


            request.post('/donors').send(newDonor).end((err, res) => {
                id = res.body._id
                done()
            })
        })

        describe('Emitting updated event', () => {
            beforeAll(() => {

            })
        })
        it("should emit updated event", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: faker.phone.phoneNumber(),
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                _id: id
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                global.io.emit('updated')
                firstUser.on('updated', payload => {
                    done()
                })

            })
        })


        it("should update successfully when changing telephone", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: faker.phone.phoneNumber(),
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                _id: id
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toEqual(200)
                expect(res.body.firstName).toBe(updatedDonor.firstName)
                expect(res.body.lastName).toBe(updatedDonor.lastName)
                expect(res.body.email).toBe(updatedDonor.email)
                expect(res.body.telephone).toBe(updatedDonor.telephone)
                expect(res.body.bloodGroup).toBe(updatedDonor.bloodGroup)
                expect(parseInt(res.body.location.coordinates[0])).toEqual(parseInt(updatedDonor.longitude))
                expect(parseInt(res.body.location.coordinates[1])).toEqual(parseInt(updatedDonor.latitude))
                expect(res.body.address).toBe(updatedDonor.address)
                done();
            })
        })
        it("should update successfully when changing item and adding ip", function (done) {
            const updatedDonor = {
                firstName: faker.name.firstName(),
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                ip: '100.2.3',
                _id: id
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toEqual(200)
                expect(res.body.firstName).toBe(updatedDonor.firstName)
                expect(res.body.lastName).toBe(updatedDonor.lastName)
                expect(res.body.email).toBe(updatedDonor.email)
                expect(res.body.telephone).toBe(updatedDonor.telephone)
                expect(res.body.bloodGroup).toBe(updatedDonor.bloodGroup)
                expect(parseInt(res.body.location.coordinates[0])).toEqual(parseInt(updatedDonor.longitude))
                expect(parseInt(res.body.location.coordinates[1])).toEqual(parseInt(updatedDonor.latitude))
                expect(res.body.address).toBe(updatedDonor.address)
                done();
            })
        })
        it("should update successfully when changing lastName", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: faker.name.lastName(),
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                _id: id
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toEqual(200)
                expect(res.body.firstName).toBe(updatedDonor.firstName)
                expect(res.body.lastName).toBe(updatedDonor.lastName)
                expect(res.body.email).toBe(updatedDonor.email)
                expect(res.body.telephone).toBe(updatedDonor.telephone)
                expect(res.body.bloodGroup).toBe(updatedDonor.bloodGroup)
                expect(parseInt(res.body.location.coordinates[0])).toEqual(parseInt(updatedDonor.longitude))
                expect(parseInt(res.body.location.coordinates[1])).toEqual(parseInt(updatedDonor.latitude))
                expect(res.body.address).toBe(updatedDonor.address)
                done();
            })
        })
        it("should update successfully when changing email", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: faker.internet.email(),
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                _id: id
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toEqual(200)
                expect(res.body.firstName).toBe(updatedDonor.firstName)
                expect(res.body.lastName).toBe(updatedDonor.lastName)
                expect(res.body.email).toBe(updatedDonor.email)
                expect(res.body.telephone).toBe(updatedDonor.telephone)
                expect(res.body.bloodGroup).toBe(updatedDonor.bloodGroup)
                expect(parseInt(res.body.location.coordinates[0])).toEqual(parseInt(updatedDonor.longitude))
                expect(parseInt(res.body.location.coordinates[1])).toEqual(parseInt(updatedDonor.latitude))
                expect(res.body.address).toBe(updatedDonor.address)
                done();
            })
        })
        it("should update successfully when changing bloodGroup", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "A",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                _id: id
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toEqual(200)
                expect(res.body.firstName).toBe(updatedDonor.firstName)
                expect(res.body.lastName).toBe(updatedDonor.lastName)
                expect(res.body.email).toBe(updatedDonor.email)
                expect(res.body.telephone).toBe(updatedDonor.telephone)
                expect(res.body.bloodGroup).toBe(updatedDonor.bloodGroup)
                expect(parseInt(res.body.location.coordinates[0])).toEqual(parseInt(updatedDonor.longitude))
                expect(parseInt(res.body.location.coordinates[1])).toEqual(parseInt(updatedDonor.latitude))
                expect(res.body.address).toBe(updatedDonor.address)
                done();
            })
        })
        it("should update successfully when changing address", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: 41.6400,
                address: faker.address.streetAddress(),
                _id: id
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toEqual(200)
                expect(res.body.firstName).toBe(updatedDonor.firstName)
                expect(res.body.lastName).toBe(updatedDonor.lastName)
                expect(res.body.email).toBe(updatedDonor.email)
                expect(res.body.telephone).toBe(updatedDonor.telephone)
                expect(res.body.bloodGroup).toBe(updatedDonor.bloodGroup)
                expect(parseInt(res.body.location.coordinates[0])).toEqual(parseInt(updatedDonor.longitude))
                expect(parseInt(res.body.location.coordinates[1])).toEqual(parseInt(updatedDonor.latitude))
                expect(res.body.address).toBe(updatedDonor.address)
                done();
            })
        })

        it("should respond by error when no _id is provided", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toBe(400)
                done();
            })
        })
        it("should respond by error when no _id is provided and ip is provided", function (done) {
            const updatedDonor = {
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                ip: '1.2.3'
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toBe(400)
                done();
            })
        })

        it("should respond by error when no required item is not provided", function (done) {
            const updatedDonor = {
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toBe(400)
                done();
            })
        })

        it("should respond by error when no required item is not provided and ip is provided", function (done) {
            const updatedDonor = {
                lastName: newDonor.lastName,
                email: newDonor.email,
                telephone: newDonor.telephone,
                bloodGroup: "O",
                longitude: newDonor.longitude,
                latitude: newDonor.latitude,
                address: newDonor.address,
                ip: '1.2.3'
            }
            request.put('/donors').send(updatedDonor).end((err, res) => {
                expect(res.status).toBe(400)
                done();
            })
        })

    })
})