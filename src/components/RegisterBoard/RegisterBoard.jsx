import React, { Children, useEffect, useState } from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';

import Button from '../UI/Button/Button';
import styles from './RegisterBoard.module.scss';
import fetchCustomers from '../../utils/fetchCustomers';
import fetchProducts from '../../utils/fetchProducts';
import { postTransaction } from '../../utils/postTransactions';
import classNames from 'classnames';

const RegisterBoard = (props) => {
    const [posting, setPosting] = useState(''); // sending '' success failure
    const { customers, setCustomers, products, setProducts } = props;
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        let asyncFunc = async () => {
            let customerResults = await fetchCustomers();
            let productResults = await fetchProducts();
            setCustomers(customerResults);
            setProducts(productResults);
        };
        asyncFunc();
    }, []);

    const addToCart = function (e) {
        e.preventDefault();
        setErrorMessage(null);
        const selected = document.getElementById('products');
        const selectedValue = selected.options[selected.selectedIndex].value;

        let selectedItem = products.find((item) => item._id == selectedValue);

        selectedItem.quantity = quantity;
        let newCart = [...cart];

        // Test if this product item is already in the cart
        let searchIndex = cart.findIndex((item) => item._id == selectedValue);

        // If found increase the quantity rather than adding new entry of same item
        if (searchIndex >= 0) {
            // returned index is -1 if not found
            newCart[searchIndex].quantity =
                Number(newCart[searchIndex].quantity) + Number(quantity);
        } else {
            // If product not found on cart, add new entry
            newCart.push({ ...selectedItem });
        }

        setCart(newCart);
    };

    const removeFromCart = (e) => {
        e.preventDefault();

        let elementItem = e.target.parentNode;

        let newCart = [...cart];
        let found = newCart.findIndex(
            (item) => item._id == elementItem.dataset._id
        );
        newCart.splice(found, 1);
        setCart(newCart);
    };

    const addTransaction = async () => {
        setPosting('sending');
        setErrorMessage(null);
        let newTransaction = {};
        const selectCustomerEl = document.getElementById('customers');
        const selectedCustomer =
            selectCustomerEl.options[selectCustomerEl.selectedIndex].value;

        newTransaction.customer = {
            customerId: selectedCustomer,
        };
        let items = cart.map((item) => {
            return { productId: item._id, quantity: item.quantity };
        });
        newTransaction.items = items;

        let result = await postTransaction(newTransaction);
        console.log(result);
        if (result.status == 'success') {
            setPosting('success');
            setErrorMessage(null);
            let updatedProducts = await fetchProducts();
            setProducts(updatedProducts);
            props.setFilterObject({
                sortBy: {
                    issuedTime: -1,
                },
                limit: 5,
            });
        } else {
            setPosting('failure');
            setErrorMessage(result.message);
        }
    };

    return (
        <>
            <div className={styles['form-container']}>
                Register new transaction
                <form action="">
                    <div className={styles['form-group']}>
                        <label htmlFor="customers">Customer :</label>
                        <select name="" id="customers">
                            {customers.map((item) => (
                                <option key={customers._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="">Items:</label>
                        <select name="products" id="products">
                            {products.map((item) => (
                                <option value={item._id} key={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min={1}
                        />
                        <Button className="stylish03" onClick={addToCart}>
                            add
                        </Button>
                    </div>
                    <div className={styles['cart']}>
                        {/* //* HEAD */}
                        {cart.length > 0 ? (
                            <div
                                className={`${styles['cart-item']} ${styles['cart-item--head']}`}
                            >
                                <div
                                    className={`${styles['cart-item-piece--head']} ${styles['cart-item-piece']} ${styles['cart-item-piece--id']}`}
                                >
                                    <span
                                        className={
                                            styles['cart-item-piece-label']
                                        }
                                    >
                                        PID
                                    </span>
                                </div>
                                <div
                                    className={`${styles['cart-item-piece--head']} ${styles['cart-item-piece']} ${styles['cart-item-piece--name']}`}
                                >
                                    <span
                                        className={
                                            styles['cart-item-piece-label']
                                        }
                                    >
                                        Item
                                    </span>
                                </div>
                                <div
                                    className={`${styles['cart-item-piece--head']} ${styles['cart-item-piece']} ${styles['cart-item-piece--price']}`}
                                >
                                    <span
                                        className={
                                            styles['cart-item-piece-label']
                                        }
                                    >
                                        Price
                                    </span>
                                </div>
                                <div
                                    className={`${styles['cart-item-piece--head']} ${styles['cart-item-piece']} ${styles['cart-item-piece--quantity']}`}
                                >
                                    <span
                                        className={
                                            styles['cart-item-piece-label']
                                        }
                                    >
                                        Quantity
                                    </span>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}

                        {cart.map((item) => {
                            return (
                                <div
                                    className={styles['cart-item']}
                                    key={item._id}
                                    data-_id={item._id}
                                >
                                    <div
                                        className={`${styles['cart-item-piece']} ${styles['cart-item-piece--id']}`}
                                    >
                                        <span
                                            className={
                                                styles['cart-item-piece-value']
                                            }
                                        >
                                            {item._id}
                                        </span>
                                    </div>
                                    <div
                                        className={`${styles['cart-item-piece']} ${styles['cart-item-piece--name']}`}
                                    >
                                        <span
                                            className={
                                                styles['cart-item-piece-value']
                                            }
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                    <div
                                        className={`${styles['cart-item-piece']} ${styles['cart-item-piece--price']}`}
                                    >
                                        <span
                                            className={
                                                styles['cart-item-piece-value']
                                            }
                                        >
                                            {item.price}
                                        </span>
                                    </div>
                                    <div
                                        className={`${styles['cart-item-piece']} ${styles['cart-item-piece--quantity']}`}
                                    >
                                        <span
                                            className={
                                                styles['cart-item-piece-value']
                                            }
                                        >
                                            {item.quantity}
                                        </span>
                                        <span
                                            className={
                                                styles['cart-item-piece-delete']
                                            }
                                            onClick={(e) => {
                                                removeFromCart(e);
                                            }}
                                        >
                                            <MdOutlineDeleteForever />
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </form>
                <div className={styles['form-footer']}>
                    <Button
                        className={classNames(`stylish01`, {
                            loading: posting == 'sending',
                        })}
                        onClick={addTransaction}
                    >
                        ADD TRANSACTION
                    </Button>
                    {posting != '' ? (
                        <span
                            className={`${styles['status']} ${styles[posting]}`}
                        >
                            {posting == 'success'
                                ? 'SUCCESS'
                                : posting == 'sending'
                                ? 'CREATING'
                                : posting == 'failure'
                                ? 'FAILED'
                                : ''}
                        </span>
                    ) : null}
                    {errorMessage && (
                        <span className={`${styles['error']}`}>
                            {errorMessage}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};

export default RegisterBoard;
