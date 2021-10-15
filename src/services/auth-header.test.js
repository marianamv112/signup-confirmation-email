const rewire = require("rewire")
const auth_header = rewire("./auth-header")
const authHeader = auth_header.__get__("authHeader")
// @ponicode
describe("authHeader", () => {
    test("0", () => {
        let callFunction = () => {
            authHeader()
        }
    
        expect(callFunction).not.toThrow()
    })
})
