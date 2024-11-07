import { addDoc, collection } from 'firebase/firestore';

import { textDB } from '../firebase/firebase.config';

const useFireStore = async (data) => {

    const { name, email, phone, projectName } = data;

    const valueRef = collection(textDB, import.meta.env.VITE_FIRESTORE_DOC_NAME);
    const date = new Date();
    try {
        const res = await addDoc(valueRef, { name, email, phone: phone + '', projectName: projectName || null, date: date.toLocaleTimeString() + ', ' + date.toLocaleDateString('en-GB'), createAt: date })
        // console.log(res);
        return res;

    }
    catch (err) {
        console.log(err);
    }
}


export default useFireStore;