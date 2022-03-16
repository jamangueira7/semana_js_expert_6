import {
    jest,
    expect,
    describe,
    test,
    beforeEach
} from "@jest/globals"
import config from "../../../server/config.js";

const {
    pages
} = config

describe('#Routes - test site for api response', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test.todo('GET / - should redirect to home page')
    test.todo(`GET /home - should response with ${pages.homeHTML}/index.html file stream`)
    test.todo(`GET /controlller - should response with ${pages.controllerHTML}/index.html file stream`)
    test.todo(`GET /file.ext - should response with file stream`)
    test.todo(`GET /unknown - givin an inexistent route it should response with 404`)

    describe('exceptions', () => {
        test.todo('given inexistent file it should respond with 404')
        test.todo('given an error it should respond with 500')
    })
})
