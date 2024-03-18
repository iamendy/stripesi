import Link from "next/link";
import { Cart, PaymentLink, Select } from "../../../../icons";
import { useState } from "react";

const paymentOptions = [
  {
    id: "single",
    title: "Single Charge",
    description:
      "Create a payment link to receive a one-time payment from your customer.",
  },
  {
    id: "donation",
    title: "Donation",
    description:
      "Receive donations for your charity cause or towards group goals through donation links.",
  },
];
const Index = () => {
  const [selected, setSelected] = useState("single");

  return (
    <div>
      <h3 className="text-xl font-semibold">
        Select a payment link type to continue
      </h3>

      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-5 mt-4">
        {paymentOptions.map((payment) => (
          <div
            onClick={() => setSelected(payment.id)}
            className={`${
              selected == payment.id && "border-black"
            } border flex flex-col gap-y-3 p-4 flex-1  rounded-md cursor-pointer lg:py-5`}
          >
            <div className="flex justify-between">
              <h4 className="font-semibold">{payment.title}</h4>

              <Select selected={selected == payment.id} />
            </div>

            <p>{payment.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center lg:justify-end">
        <Link
          href={`/dashboard/payments/new/${selected}`}
          className="bg-black text-white leading-none px-4 py-3 rounded-md"
        >
          Create payment link
        </Link>
      </div>
    </div>
  );
};
export default Index;
