import Navbar from "./Navbar";

function ShippingandDelivery() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-auto w-1/2 leading-10">
        <h1 className="text-2xl font-bold text-orange-500 text-center">
          Shipping and Delivery Policy
        </h1>
        <p>
          <strong>Effective Date:</strong> 15 january 2025
        </p>

        <h2 className="font-bold">1. Services Overview</h2>
        <p>
          DevTinder offers digital services and does not involve physical
          shipping.
        </p>

        <h2 className="font-bold">2. Digital Delivery</h2>
        <p>
          Purchased services or subscriptions will be activated immediately upon
          payment confirmation. Email confirmations will be sent to the user’s
          registered email.
        </p>

        <h2 className="font-bold">3. Delays</h2>
        <p>
          In case of service activation delays, users can contact support at
          [Insert Email].
        </p>

        <h2 className="font-bold">4. Issues and Resolution</h2>
        <p>
          For issues related to service delivery, contact us within 48 hours of
          purchase.
        </p>
      </div>
    </div>
  );
}

export default ShippingandDelivery;
