import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBE9KkVgblyQT_YTfePeuMBTYSLSFAffE",
  authDomain: "nxtstride-application.firebaseapp.com",
  projectId: "nxtstride-application",
  storageBucket: "nxtstride-application.firebasestorage.app",
  messagingSenderId: "365588873250",
  appId: "1:365588873250:web:b8a93680309f2a37680a7b",
  measurementId: "G-HWN06EYJH1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='sign-In' element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
