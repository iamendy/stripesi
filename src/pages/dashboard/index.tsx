import Link from "next/link";
import { PaymentLink, Cart } from "../../icons";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between  border px-4 py-5 mb-9">
        <div>
          <small>Total value</small>
          <p className="text-lg font-semibold">$100USD</p>
        </div>

        <div className="text-center">
          <small>Total value</small>
          <p className="text-lg font-semibold">7</p>
        </div>

        <div className="text-right">
          <small>Total Settlements</small>
          <p className="text-lg font-semibold">$10USD</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold"> Let's get you started</h3>

        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-5 mt-4 lg:w-[80%]">
          <div className="border flex flex-col gap-y-3 p-4 flex-1">
            <div>
              <PaymentLink />
            </div>

            <h4 className="font-semibold">Receive Payment</h4>
            <p>
              Create a payment link in just a few clicks and share the link with
              your customers.
            </p>
            <Link
              href="/dashboard/payments/new"
              className="bg-black/80 w-fit text-white leading-none text-sm px-4 py-2 rounded-md"
            >
              Create payment link
            </Link>
          </div>

          <div className="border flex flex-col gap-y-3 p-4 flex-1">
            <div>
              <Cart />
            </div>

            <h4 className="font-semibold">Start selling online</h4>
            <p>
              Create a free online store that helps you find customers, accept
              payments from anyone.
            </p>
            <button className="bg-black/80 w-fit text-white leading-none text-sm px-4 py-2 rounded-md">
              Add products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
