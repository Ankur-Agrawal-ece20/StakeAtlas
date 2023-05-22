import React from 'react'
import { useState, useEffect } from 'react'
import { cashfreeSandbox } from 'cashfree-dropjs';
//use import { cashfreeProd } from 'cashfree-dropjs';


const PaymentScreenModal = (props) => {
    const [testCashfree,] = useState(new cashfreeSandbox.Cashfree());
    //let prodCashfree = new cashfreeProd.Cashfree();
    const paymentSuccess = (data) => {
        if (data.order && data.order.status === 'PAID') {
            alert('order is paid. Call api to verify');
        }
    };
    const paymentFailure = (data) => {
        alert(data.order.errorText || 'AAAA');
    };
    useEffect(() => {
        let cartItems = props.cartItems;
        console.log(cartItems);
        // code to generate order from backend and recieve order id
        let orderid = "7RyleyCOzRftapYCmSDb";
        let element=document.getElementById("drop_in_container");
        testCashfree.initialiseDropin(element, {
            orderToken: orderid,
            onSuccess: paymentSuccess,
            onFailure: paymentFailure,
            components: ['order-details', 'card', 'upi', 'app', 'netbanking', 'paylater', 'creditcardemi', 'cardlessemi'],
            style: {color:"#191919", theme:"light", errorColor:"#FF7051"},
        });
    }, [testCashfree]);

    return (
            <div className="mx-auto w-[90%] max-w-[600px] rounded-lg bg-white shadow-lg p-5 text-gray-700">
                <div id="drop_in_container" classNameName="dropin-parent mb-3 flex -mx-2"></div>
            </div>
    )
}

export default PaymentScreenModal
