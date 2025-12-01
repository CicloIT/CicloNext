// app/(general)/layout.js

import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function GeneralLayout({ children }) {
  return (
    <>      
      <Header />
        {children}   
      <Footer/>   
    </>
  );
}
