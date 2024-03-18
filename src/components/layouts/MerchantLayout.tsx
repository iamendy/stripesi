import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Sidebar from "../Sidebar";

const MerchantLayout = ({ children }: { children: ReactNode }) => {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   if (!address) {
  //     router.push("/onboard");
  //   }
  //   setLoading(false);
  // }, [address]);

  return !loading ? (
    <section className="h-full">
      <div className="flex h-full gap-x-6">
        <Sidebar />
        <main className=" w-full px-6 lg:border-l">{children}</main>
      </div>
    </section>
  ) : (
    <div>Loadng</div>
  );
};
export default MerchantLayout;
