import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

const Index = () => {

  const [qrUrl, setQrImg] = useState('')

  const genQr = async () => {
    const qrgen = await axios.get(`${ENDPOINT}/payment`)
    setQrImg(qrgen.data.data.qrImage)
  }

  useEffect(() => {
    genQr()
  }, [])

  if (qrUrl)
    return <>
      <Image src={`data:image/jpeg;base64,${qrUrl}`} width={200} height={200} />
      {/* <img src={`data:image/jpeg;base64,${qrUrl}`} alt="test" /> */}
    </>
  return <></>
}

export default Index