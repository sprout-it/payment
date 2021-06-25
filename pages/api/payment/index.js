import axios from 'axios'
const API = process.env.NEXT_PUBLIC_API_KEY
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT
const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID
const SCB_ENDPOINT = process.env.NEXT_PUBLIC_SCB_ENDPOINT
const SCB_REQUEST_UID = process.env.NEXT_PUBLIC_SCB_REQUEST_UID

export default async function handler(req, res) {
  const getToken = await axios.get(`${ENDPOINT}/auth/getToken`)
  const qrgen = await axios.post(`${SCB_ENDPOINT}/partners/sandbox/v1/payment/qrcode/create`,
    {
      "qrType": "PP",
      "ppType": "BILLERID",
      "ppId": MERCHANT_ID,
      "amount": "1.00",
      "ref1": "REFERENCE1",
      "ref2": "REFERENCE2",
      "ref3": "SCB"
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'accept-language': 'EN',
        'authorization': `Bearer ${getToken.data.data.accessToken}`,
        'requestUId': SCB_REQUEST_UID,
        'resourceOwnerId': API,
      }
    }
  )
  res.status(200).send(qrgen.data)
}
