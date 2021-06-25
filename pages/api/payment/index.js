import axios from 'axios'
const API = process.env.NEXT_PUBLIC_API_KEY
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT
const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID

export default async function handler(req, res) {

  const getToken = await axios.get(`${ENDPOINT}/auth/getToken`)
  const qrgen = await axios.post('https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create',
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
        'requestUId': '1b01dff2-b3a3-4567-adde-cd9dd738b6d',
        'resourceOwnerId': API,
      }
    }
  )

  res.status(200).send(qrgen.data)
}
