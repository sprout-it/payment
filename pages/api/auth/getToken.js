import axios from 'axios'
const API = process.env.NEXT_PUBLIC_API_KEY
const SECRET = process.env.NEXT_PUBLIC_SECRET_KEY

export default async function handler(req, res) {
    const token = await axios.post('https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token', {
        "applicationKey": API,
        "applicationSecret": SECRET,

    }, {
        headers: {
            "resourceOwnerId": API,
            "requestUId": "85230887-e643-4fa4-84b2-4e56709c4ac4",
            "accept-language": "EN",
            "content-type": "application/json"
        }
    })
    res.status(200).send(token.data)
}