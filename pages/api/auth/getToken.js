import axios from 'axios'
const API = process.env.NEXT_PUBLIC_API_KEY
const SECRET = process.env.NEXT_PUBLIC_SECRET_KEY
const SCB_ENDPOINT = process.env.NEXT_PUBLIC_SCB_ENDPOINT
const SCB_REQUEST_UID = process.env.NEXT_PUBLIC_SCB_REQUEST_UID

export default async function handler(req, res) {
    try {

        const token = await axios.post(`${SCB_ENDPOINT}/partners/sandbox/v1/oauth/token`, {
            "applicationKey": API,
            "applicationSecret": SECRET,

        }, {
            headers: {
                "resourceOwnerId": API,
                "requestUId": SCB_REQUEST_UID,
                "accept-language": "EN",
                "content-type": "application/json"
            }
        })
        res.status(200).send(token.data)
    }
    catch (e) {
        console.error(e)
    }

}