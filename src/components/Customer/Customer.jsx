import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TiUserDeleteOutline } from 'react-icons/ti';

import { useParams } from 'react-router-dom';
import fetchCustomers from '../../utils/fetchCustomers';
import updateCustomer from '../../utils/updateCustomer';
import styles from './Customer.module.scss';
import { fetchTransactions } from '../../utils/fetchTransactions';
import Button from '../UI/Button/Button';
import TransactionTable from '../TransactionTable/TransactionTable';
import SortAndFilter from '../SortAndFilter/SortAndFilter';
import Tag from '../UI/Tag/Tag';
import { AuthContext } from '../../context/AuthContext';
import MapBox from '../UI/MapBox/MapBox';
import Tooltip from '../UI/Tooltip/Tooltip';
import deleteCustomer from '../../utils/deleteCustomer';

const copyText = (e) => {
    navigator.clipboard.writeText(e.target.innerText.substring(0, 500));
    toast('Copied', {
        position: 'top-right',
        theme: 'colored',
        toastId: 'copyId',
    });
};

function Customer() {
    const { id } = useParams();

    const initialFilterObject = {
        sortBy: {
            issuedTime: -1,
        },
        customerId: id,
    };
    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const [customer, setCustomer] = useState(null);
    const [editingStatus, setEditingStatus] = useState(false);

    const [transactions, setTransactions] = useState([]);
    const [filterObject, setFilterObject] = useState(initialFilterObject);

    const [customerName, setCustomerName] = useState(null);
    const [customerAddress, setCustomerAddress] = useState(null);
    const [customerPhoneArray, setCustomerPhoneArray] = useState([]);
    const [customerPhone, setCustomerPhone] = useState('');
    const [addedPhones, setAddedPhones] = useState([]);

    const [coordinates, setCoordinates] = useState(null);

    //- INITIALIZING CUSTOMER AND TRANSACTIONS
    useEffect(() => {
        const asyncWrapper = async () => {
            let customerResult = await fetchCustomers(id, token);
            let transactionResults = await fetchTransactions(
                initialFilterObject,
                token
            );
            setCustomer(customerResult);
            setCoordinates((prevCoordinates) => {
                //- If customer do not have any coordinates set, return default coordinates of shop
                if (
                    customerResult.location &&
                    customerResult.location.coordinates.length != 0
                ) {
                    return customerResult.location.coordinates;
                } else {
                    // Default coordinates of shop
                    return [28.27182621011652, 83.60018489346729];
                }
            });
            setTransactions(transactionResults);
        };
        asyncWrapper();
    }, []);

    //- INITIALIZING STATE VARIABLES FOR CUSTOMER ADDRESS AND PHONES
    useEffect(() => {
        if (customer) {
            setCustomerAddress(customer.address);
            setCustomerPhoneArray(customer.phone);
            setCustomerName(customer.name);
        }
    }, [customer]);

    const handleCustomerName = (e) => {
        setCustomerName(e.target.value);
    };
    const handleCustomerAddress = (e) => {
        setCustomerAddress(e.target.value);
    };
    const handleCustomerPhone = (e) => {
        setCustomerPhone(e.target.value);
    };
    const deleteStoredPhoneTag = (e) => {
        //- Return if not editing
        if (!editingStatus) return;

        let tempCustomerPhoneArray = [...customerPhoneArray];
        let matchedIndex = tempCustomerPhoneArray.findIndex(
            (elem) => elem == e.target.innerText.toLowerCase()
        );
        if (matchedIndex >= 0) tempCustomerPhoneArray.splice(matchedIndex, 1);
        setCustomerPhoneArray(tempCustomerPhoneArray);
    };
    const deleteAddedPhoneTag = (e) => {
        //- Return if not editing
        if (!editingStatus) return;

        let tempAddedPhones = [...addedPhones];
        let matchedIndex = tempAddedPhones.findIndex(
            (elem) => elem == e.target.innerText.toLowerCase()
        );
        if (matchedIndex >= 0) tempAddedPhones.splice(matchedIndex, 1);
        setAddedPhones(tempAddedPhones);
    };

    const addCustomerPhone = (e) => {
        let newPhoneArray = [...addedPhones];

        let newNumber = customerPhone.toLowerCase().trim();

        //- adding new number to added phone state variable
        let newSet = new Set(newPhoneArray);
        if (newNumber.includes(',')) {
            let numArr = newNumber.split(',');
            numArr.forEach((num) => newSet.add(num));
        } else {
            newSet.add(newNumber);
        }
        setAddedPhones(Array.from(newSet));

        //- clearing input field after addition
        setCustomerPhone('');
        newPhoneArray.push(newNumber);
    };

    const cancelEdits = () => {
        setCustomerAddress(customer.address);
        setCustomerPhoneArray(customer.phone);
        setCustomerName(customer.name);

        setAddedPhones([]);
        setEditingStatus(false);
    };
    const saveEdits = async (id) => {
        let customerDetails = {};
        customerDetails.name = customerName;
        customerDetails.address = customerAddress;
        customerDetails.phone = [...addedPhones, ...customerPhoneArray];
        let result = await updateCustomer(id, customerDetails, token);
        if (result.status == 'success') {
            setCustomer(result.data);
            setEditingStatus(false);
        } else {
            if (result.message) toast(result.message);
            if (result.errors)
                toast(result.errors[0].msg, { toastId: 'updateCustomer' });
        }
    };
    const handleDeleteCustomer = async () => {
        let results = await deleteCustomer(id, token);
        navigate('/dashboard/customers');
    };

    return (
        customer && (
            <div className={styles['container']}>
                <div className={styles['first-row']}>
                    <div className={styles['first-row_left']}>
                        <div className={styles['profile']}>
                            <figure className={styles['profile_picture']}>
                                <img
                                    src="/img/profile-picture.jpg"
                                    alt={customer.name}
                                />
                            </figure>
                            <span className={styles['profile_name']}>
                                {customer.name}
                            </span>
                            <div className={styles['tab']}>
                                <div className={styles['purchase']}>
                                    <p>Purchase</p>

                                    {customer.tab.purchase}
                                </div>
                                <div className={styles['paid']}>
                                    <p>Paid</p>
                                    {customer.tab.paid}
                                </div>
                                <div className={styles['due']}>
                                    <p>Due</p>
                                    {customer.tab.due}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['first-row_right']}>
                        <div className={styles['details']}>
                            <div className={styles['detail']}>
                                <div className={styles['detail_name']}>
                                    Customer ID
                                </div>
                                <div className={styles['detail_value']}>
                                    <Tag
                                        className="orange01"
                                        onClick={copyText}
                                        title="Copy ID"
                                    >
                                        {customer._id}
                                    </Tag>
                                    {editingStatus && (
                                        <div
                                            className={styles['delete']}
                                            onClick={handleDeleteCustomer}
                                        >
                                            <TiUserDeleteOutline />
                                            <Tooltip
                                                className={'bottom-left'}
                                                text={'Delete Customer'}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles['detail']}>
                                <div className={styles['detail_name']}>
                                    Name
                                </div>
                                <div className={styles['detail_value']}>
                                    {customer.name}
                                    {editingStatus && (
                                        <div
                                            className={styles['input-wrapper']}
                                        >
                                            <input
                                                type="text"
                                                value={customerName}
                                                onChange={handleCustomerName}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles['detail']}>
                                <div className={styles['detail_name']}>
                                    Phone
                                </div>
                                <div className={styles['detail_value']}>
                                    {customerPhoneArray.map((item) => (
                                        <Tag
                                            key={item}
                                            className={`${
                                                editingStatus
                                                    ? ''
                                                    : 'inherit-text'
                                            }`}
                                            onClick={deleteStoredPhoneTag}
                                        >
                                            {item}
                                        </Tag>
                                    ))}
                                    {editingStatus &&
                                        addedPhones.map((item) => (
                                            <Tag
                                                key={item}
                                                className={`${
                                                    editingStatus
                                                        ? 'green01'
                                                        : 'inherit-text'
                                                }`}
                                                onClick={deleteAddedPhoneTag}
                                            >
                                                {item}
                                            </Tag>
                                        ))}
                                    {editingStatus && (
                                        <div
                                            className={styles['input-wrapper']}
                                        >
                                            <input
                                                type="text"
                                                value={customerPhone}
                                                onChange={handleCustomerPhone}
                                                id="phoneToAdd"
                                            />
                                            <Button
                                                onClick={addCustomerPhone}
                                                className="sharp01"
                                            >
                                                ADD
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles['detail']}>
                                <div className={styles['detail_name']}>
                                    Address
                                </div>

                                <div className={styles['detail_value']}>
                                    {customer.address}
                                    {editingStatus && (
                                        <div
                                            className={styles['input-wrapper']}
                                        >
                                            <input
                                                type="text"
                                                value={customerAddress}
                                                onChange={handleCustomerAddress}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles['actions']}>
                            <Button
                                className="action01 wait"
                                onClick={() => setEditingStatus(true)}
                            >
                                Edit
                            </Button>
                            {editingStatus && (
                                <Button
                                    className="action01 stop"
                                    onClick={() => cancelEdits(id)}
                                >
                                    Cancel
                                </Button>
                            )}

                            <Button
                                className="action01 go"
                                onClick={() => saveEdits(id)}
                                disabled={!editingStatus}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles['second-row']}>
                    {coordinates ? (
                        <MapBox
                            coordinates={coordinates}
                            setCoordinates={setCoordinates}
                        />
                    ) : null}
                </div>

                <div className={styles['third-row']}>
                    <h3>Transactions</h3>
                    <div className={styles['transactions']}>
                        <SortAndFilter
                            setFilterObject={setFilterObject}
                            customerId={customer._id}
                        />
                        <TransactionTable filterObject={filterObject} />
                    </div>
                </div>
            </div>
        )
    );
}

export default Customer;
