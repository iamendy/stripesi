import { ReactNode, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useAccount } from "wagmi";
import MerchantLayout from "./MerchantLayout";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: ReactNode }) => {
  const { address, status } = useAccount();
  const router = useRouter();
  const isDash = router.pathname.includes("/dashboard");

  return (
    <div className="pancake ">
      <Navbar />

      <div className="py-8 px-4 w-full lg:max-w-6xl mx-auto">
        {isDash ? (
          <MerchantLayout>{children}</MerchantLayout>
        ) : (
          <div> {children} </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
