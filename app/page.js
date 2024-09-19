'use client' //here we will use this page as client side so we have to declare that here
import BLogList from "@/components/BLogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
    <Header/>
    <BLogList/>
    <Footer/>
    </>
  );
}
