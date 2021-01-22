const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

describe("people integration tests", () => {

    it("checkes tests", async () => {
        expect(2+2).toBe(4)
    })
    // it("gets people", async () => {
    //     const res = await supertest(server).get("/people")
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe('application/json')
    //     expect(res.body[0].name).toBe("Heather")
    // })
    // it("gets people by id", async () => {
    //     const res = await supertest(server).get("/people/2")
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe('application/json')
    //     expect(res.body.id).toBe(2)
    //     expect(res.body.name).toBe("Lonnie")
    // })

    // it("creates person", async () => {
    //     const res = await supertest(server).post("/people").send({name: "Noa"})
    //     expect(res.statusCode).toBe(201)
    //     expect (res.type).toBe("application/json")
    //     expect (res.body.name).toBe("Noa")
    // })

    // it("deletes person", async () => {
    //     const res = await supertest(server).delete("/people/2")
    //     expect(res.statusCode).toBe(202)
    //     expect(res.type).toBe("aplication/json")
    //     expect(res.body.name).toBe("Lonnie")
    // })
})
