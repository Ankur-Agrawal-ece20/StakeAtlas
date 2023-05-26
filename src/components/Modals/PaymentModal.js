import React from 'react'
import { useState, useEffect } from 'react'
import { cashfreeSandbox } from 'cashfree-dropjs';
import axiosInstance from '../../axiosInstance';
//use import { cashfreeProd } from 'cashfree-dropjs';


const PaymentScreenModal = (props) => {
    const [testCashfree,] = useState(new cashfreeSandbox.Cashfree());
    //let prodCashfree = new cashfreeProd.Cashfree();
    const paymentSuccess = (data) => {
        if (data.order && data.order.status === 'PAID') {
            axiosInstance.post(`/order/verify`)
            .then(data=>{
                alert('Order is paid.');
            })
            .catch(err=>{alert(err.response.data.message || 'AAAA')});
        }
    };
    const paymentFailure = (data) => {
        alert(data.order.errorText || 'AAAA');
    };
    useEffect(() => {
        let orderid = "";
        if(props.props.productid && props.props.addressid){
            axiosInstance.post(`/order/createOrder/${props.props.productid}/${props.props.addressid}`,{
                productId:props.props.productid,
                addressId:props.props.addressid,
                taxPrice:props.props.taxprice,
                shippingPrice:props.props.shippingprice
            })
            .then(data=>{
                console.log(data);
                orderid=data.data.data.orderid;
            })
            .catch(err=>{alert(err.response.data.message || 'AAAA')});
        }
        else{
            axiosInstance.post(`/order/create`,{addressId:props.addressId})
            .then(data=>{
                console.log(data);
                orderid=data.data.data.orderid;
            })
            .catch(err=>{alert(err.response.data.message || 'AAAA')});
        }
        orderid = "7RyleyCOzRftapYCmSDb" // Comment this when in production
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
