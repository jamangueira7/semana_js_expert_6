import { Service } from "./service.js";
import { logger } from "./util.js";

export class Controller {
    constructor() {
        this.service = new Service()
    }

    async getFileStream(filename) {
        return this.service.getFileStream(filename)
    }

    createClientStream() {
        const {
            id,
            clienteStream
        } = this.service.createClientStream()

        const onClose = () => {
            logger.info(`closing connection of ${id}`)
            this.service.removeClientStream(id)
        }
    }
}
