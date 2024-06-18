import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/amazoneSlice";
import { emptyCart, emptyCartTwo } from "../assets/index";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;

      return setTotalPrice(total);
    });
    setTotalPrice(total);
  }, [products]);
  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-6 lg:grid-cols-5 gap-2 lg:gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-gray-300 py-4">
              <h2 className="text-lg lg:text-3xl  lg:font-medium">
                Shopping Cart
              </h2>
              <h4 className="text-md lg:text-xl font-normal">Subtitle</h4>
            </div>
            {/** product mapping */}
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 pr-0 pl-0 lg:pr-4 lg:pl-4 pt-4 pb-4 flex  lg:items-center"
                >
                  <div className="w-full flex items-center gap-6">
                    <div className="w-1/5">
                      <img
                        className="w-full h-44 object-contain"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-3/5">
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-sm">
                        {item.description.substring(0, 200)}
                      </p>
                      <p className="text-base">
                        Unit Price:{" "}
                        <span className=" lg:font-semibold">${item.price}</span>
                      </p>
                      <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                        <p>Qty:</p>
                        <p
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                        >
                          -
                        </p>
                        <p>{item.quantity}</p>
                        <p
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                        >
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>
                    <div className="w-1/5 text-right">
                      <p className="text-sm md:text-md lg:text-lg font-titleFont font-semibold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-2">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semiBold text-lg tracking-wide"
              >
                Clear Card
              </button>
            </div>
          </div>
          <div className="w-full h-52 bg-white col-span-2 lg:col-span-1 flex flex-col items-center p-1 lg:p-4">
            <div className="hidden lg:block">
              <p className="flex gap-2 bg-white col-span-1">
                <span>
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full " />
                </span>
                Your purchase is eligible for FREE Shipping. Select this choice
                during checkout. Review specifics.
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center justify-center gap-2">
                Total:{" "}
                <span className="text-sm lg:text-lg font-bold">
                  ${parseFloat(totalPrice.toFixed(2))}
                </span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-200 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center item-center gap-4 py-10">
          {" "}
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCartTwo}
              alt="empty cart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col otems-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your cart is empty
            </h1>
            <p className="text-sm text-center">
              Your Shoping cart live to save. give it purpose-fill it with
              books, eletronics, viedios, etc, and make it happy
            </p>
            <Link to="/">
              <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-200 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
