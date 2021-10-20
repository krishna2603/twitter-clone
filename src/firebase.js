import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwm088ESwXBq3Bly0so-WZkNWfard8PeY",
    authDomain: "twitter-clone-8b309.firebaseapp.com",
    projectId: "twitter-clone-8b309",
    storageBucket: "twitter-clone-8b309.appspot.com",
    messagingSenderId: "361144712575",
    appId: "1:361144712575:web:09707e89a75a18b681ee4a",
    measurementId: "G-BDP4ZJTWKV"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  

export default db;