import { Layout, Col, Row } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

const Index = ({ structure }) => {

  const [struct, setStruct] = useState(structure)

  const [qrUrl, setQrImg] = useState('')

  const genQr = async () => {
    const qrgen = await axios.get(`${ENDPOINT}/payment`)
    setQrImg(qrgen.data.data.qrImage)
  }

  useEffect(() => {
    genQr()
  }, [])

  if (qrUrl)
    return <Layout style={{ width: '100vw', height: '100vh' }}>
      <Layout.Header style={{ width: '100vw', height: 50, background: "green" }}>
      </Layout.Header>
      <Col span={24}>
        <Row justify='center'>คุณ ทดสอบ สมมติ</Row>
        <Row justify='center'>
          <Image src={`data:image/jpeg;base64,${qrUrl}`} width={200} height={200} />
        </Row>
        <Row justify='center'>จำนวนเงิน 100 บาท</Row>
        <Row justify='center'>**ใบชำระเงินนี้หมดอายุเวลา {dayjs(Date.now() + 1000 * 60).format('YYYY-MM-DD HH:mm:ss')}</Row>
      </Col>
    </Layout >
  return <>Loading...</>
}

// interface Query {
//   payeeProxyId:           string;
//   payeeProxyType:         string;
//   payeeAccountNumber:     string;
//   payeeName:              string;
//   payerProxyId:           string;
//   payerProxyType:         string;
//   payerAccountNumber:     string;
//   payerName:              string;
//   sendingBankCode:        string;
//   receivingBankCode:      string;
//   amount:                 number;
//   channelCode:            string;
//   transactionId:          string;
//   transactionDateandTime: Date;
//   billPaymentRef1:        string;
//   billPaymentRef2:        string;
//   billPaymentRef3:        string;
//   currencyCode:           string;
//   transactionType:        string;
// }

// export async function getServerSideProps(ctx) {
// const query = {
//   name,
//   callbackUrl,
//   price,
//   token
// }
// console.log(ctx)
// console.log()

// return {
//   props: {
//     structure: query
//   }
// }
// }

export default Index