import cert from './serviceAccount.json'
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(cert),
    });
}

export const firestore = admin.firestore();
const auth = admin.auth();