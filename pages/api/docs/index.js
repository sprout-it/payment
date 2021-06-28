const docs = require('../../../utils/docs.json')
export default async function handler(req, res) {
    res.status(200).send(docs)
}