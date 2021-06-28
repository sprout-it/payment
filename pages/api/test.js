import { firestore } from '../../configs/firebase'
export default async function handler(req, res) {
    firestore.doc('test/test').create({ add: 'add' })
    res.send('ok')
}