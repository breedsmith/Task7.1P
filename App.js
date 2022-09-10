import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Signup from './Signup';
import Footer from './Footer';
import Login from './Login';
import './index.css';
import HomePage from './HomePage';
import SignupAccount from './SignupAccount';

function App() {
    return (
        <div className='Container'>
            <Navigation />
            <Login />
            <Signup />
            <Footer />
            <Routes>
                <Route path="/">
                    <Route path="/login" element={<Login />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/signup" element={<SignupAccount />} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;
