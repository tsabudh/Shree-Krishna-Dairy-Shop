import React, { useState, createContext, useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from './context/AuthContext';

import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/Login/LoginPage';
import Home from './pages/Home/Home';

import ErrorBoundary from './components/ErrorBoundary';
import TransactionPanel from './components/TransactionPanel/TransactionPanel';
import CustomerPanel from './components/CustomerPanel/CustomerPanel';
import StatementPanel from './components/StatementPanel/StatementPanel';
import InventoryPanel from './components/InventoryPanel/InventoryPanel';
import OverviewPanel from './components/OverviewPanel/OverviewPanel';
import Customer from './components/Customer/Customer';
import Notifier from './components/Notifier/Notifier';
import ProductPanel from './components/ProductPanel/ProductPanel';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AdminProfile from './components/AdminProfile/AdminProfile';
import refreshToken from './utils/refreshToken';
import ChatPanel from './components/ChatPanel/ChatPanel';
import CustomerRegistry from './components/CustomerRegistry/CustomerRegistry';

function App() {
    const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken'));
    const navigate = useNavigate();

    useEffect(() => {
        async function asyncWrapper() {
            let storedToken = localStorage.getItem('jwtToken');
            if (storedToken) {
                let response = await refreshToken(storedToken);
                if (response.status == 'success') {
                    setJwtToken(response.token);
                    localStorage.setItem('jwtToken',response.token)
                } else {
                    
                    localStorage.removeItem('jwtToken');
                    toast('JWT Error', {
                        position: 'top-right',
                        theme: 'colored',
                        toastId: 'jwt',
                    });
                    navigate('/login');
                }
            }
        }
        asyncWrapper();
    }, []);

    return (
        <AuthContext.Provider value={{ jwtToken, setJwtToken }}>
            <Notifier />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route
                        index
                        element={
                            <ErrorBoundary>
                                <OverviewPanel />
                            </ErrorBoundary>
                        }
                    />
                    <Route path="customers">
                        <Route index element={<CustomerPanel />} />
                        <Route path=":id" element={<Customer />} />
                        <Route path="manage" element={<CustomerRegistry />} />
                    </Route>
                    <Route path="products">
                        <Route index element={<ProductPanel />} />
                        <Route path="details" element={<ProductDetails />} />
                        <Route path="inventory" element={<InventoryPanel />} />
                    </Route>
                    <Route path="transactions">
                        <Route index element={<TransactionPanel />} />
                        <Route path="statements" element={<StatementPanel />} />
                    </Route>
                    <Route path="chat" element={<ChatPanel />} />
                    <Route path="profile" element={<AdminProfile />} />
                </Route>
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
