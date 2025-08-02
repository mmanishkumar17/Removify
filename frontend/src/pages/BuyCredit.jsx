import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
  // const { backendUrl, loadCreditsData } = useContext(AppContext);
  // const navigate = useNavigate();
  // const { getToken } = useAuth();

  // const initPay = async (order) => {
  //   const options = {
  //     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  //     amount: order.amount,
  //     currency: order.currency,
  //     name: "Credits Payment",
  //     description: "Credits Payment",
  //     order_id: order.id,
  //     receipt: order.receipt,
  //     handler: async (response) => {
  //       const token = await getToken();

  //       try {
  //         const { data } = await axios.post(
  //           backendUrl + "/api/user/verify-razor",
  //           response,
  //           { headers: { token } }
  //         );

  //         if (data.success) {
  //           loadCreditsData();
  //           navigate("/");
  //           toast.success("Credits Added");
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         toast.error(error.message);
  //       }
  //     },
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  // const paymentRazorpay = async (planId) => {
  //   try {
  //     const token = await getToken();
  //     const { data } = await axios.post(
  //       backendUrl + "/api/user/pay-razor",
  //       { planId },
  //       { headers: { token } }
  //     );

  //     if (data.success) {
  //       initPay(data.order);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message);
  //   }
  // };

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10"
      initial={{ opacity: 0.2, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <button className="bg-white text-sm border-1 border-gray-500 rounded-full px-7 py-2 mb-10">
        OUR PLANS
      </button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent mb-10">
        Choose the plan that's <br /> right for you
      </h1>

      <div className="flex gap-6 flex-wrap justify-center text-left">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border-1 border-gray-500 px-8 py-12 drop-shadow-md rounded-md text-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 1 }}
          >
            <img src={assets.logo_icon} alt="logo_icon" width={40} />
            <p className="font-semibold mt-3">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="font-medium text-3xl">₹{item.price}</span>/
              {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="border-none bg-gradient-to-r from-blue-500 to-blue-300 text-white m-auto w-full rounded-sm py-2.5 mt-4 min-w-52 cursor-pointer"
            >
              Purchase
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
