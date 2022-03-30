import StatusCode from "../configuration/StatusCode.js"

const alive = (req, res) => {
    res.status(StatusCode.OK).send('Yey, API is alive!!')
}

export default {
    alive
}