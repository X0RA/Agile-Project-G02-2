
import App from "../firebase"

import { getFirestore, collection, query, where, getDocs} from 'firebase/firestore';


const db = getFirestore(App);



export function getCarData(make) {
    return new Promise((resolve, reject) => {
      const q = query(collection(db, "car_issues"), where("Make", "==", make));
        getDocs(q).then((res) => {
          const data = res.docs.map((doc) => {
            return {id: doc.id, data: doc.data()}
          })
          resolve(data)
        })
    });
  }
  

