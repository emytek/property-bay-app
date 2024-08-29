import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";
import AuthProvider from '../components/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "../context/GlobalContext";
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import 'photoswipe/dist/photoswipe.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'PropertyBay | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

export default function RootLayout({ children }) {

  return (
    <AuthProvider>
    <GlobalProvider>
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
    </GlobalProvider>
    </AuthProvider>
  );
}
