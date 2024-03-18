import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";
import onboard from "../../public/img/laptop.svg";
import { Info, Check } from "../icons";

const Onboard = () => {
  const [isUser, setIsUser] = useState(false);
  const { address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    //setIsUser(!isUser);

    if (address && !isUser) {
    }

    if (isUser && address) {
      router.push("/dashboard");
    }
  }, [address, isUser]);

  //   if (!address) return <>Connect button</>;

  //   if (!isUser) return <>Register Merchant</>;

  return (
    <section>
      <div className=" items-center">
        <div className=" flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:gap-x-9">
          <div className="w-[200px] lg:w-[500px]">
            <Image src={onboard} alt="setup account" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-center lg:text-4xl lg:mb-8 ">
              A few steps to get you started
            </h3>
            <div className="flex flex-col gap-y-6 lg:text-xl lg:gap-y-8 ">
              <div className="flex items-start text-gray-400">
                <div>
                  <Check />
                </div>
                <div className="pl-3">
                  <p className="mb-1 "> Connect your wallet to get started</p>
                  <button className="hidden w-[130px] px-5 py-2 bg-black text-white rounded-md leading-none border hover:border-black hover:text-black hover:bg-white active:bg-black active:text-white">
                    Connect
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <Info />
                </div>
                <div className="pl-3">
                  <p className="mb-1"> Register your brand</p>
                  <div className="mb-1">
                    <input
                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2  placeholder:text-gray-600 text-sm"
                      type="text"
                      placeholder="Sweet Fashion Inc"
                    ></input>
                  </div>
                  <button className="w-[130px] px-5 py-2 bg-black text-white rounded-md leading-none border hover:border-black hover:text-black hover:bg-white active:bg-black active:text-white">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Onboard;
