import Navbar from "./Navbar";

function Cancellation() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-auto w-1/2 leading-10">
        <h1 className="text-2xl font-bold text-orange-500 text-center">
          Cancellation and Refund Policy
        </h1>
        <p>
          <strong>Effective Date:</strong> 15 january 2025
        </p>

        <h2 className="font-bold">1. Cancellation</h2>
        <p>
          Users may cancel subscriptions within 24 hours of purchase for a full
          refund. After 24 hours, cancellations may not be eligible for a
          refund.
        </p>

        <h2 className="font-bold">2. Refunds</h2>
        <p>
          Eligible refunds will be processed within 7-10 business days and
          credited to the original payment method used during the transaction.
        </p>

        <h2 className="font-bold">3. Non-Refundable Items</h2>
        <p>
          Services already availed or partially completed are non-refundable.
        </p>

        <h2 className="font-bold">4. Contact Us</h2>
        <p>
          For cancellations or refund requests, contact us at
          supportdevtinder@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default Cancellation;
