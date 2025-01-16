import Navbar from "./Navbar";

function TermsandCondition() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-auto w-1/2 leading-10">
        <h1 className="text-2xl font-bold text-orange-500 text-center">
          Terms and Conditions
        </h1>
        <p>
          <strong>Effective Date:</strong> 15 january 2025
        </p>

        <h2 className="font-bold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our platform, you agree to comply with our terms
          and conditions.
        </p>

        <h2 className="font-bold">2. User Responsibilities</h2>
        <ul>
          <li>Provide accurate information.</li>
          <li>Do not engage in abusive, fraudulent, or illegal activities.</li>
        </ul>

        <h2 className="font-bold">3. Payments</h2>
        <p>
          All payments are processed securely via Razorpay. Ensure you review
          the refund policy before making transactions.
        </p>

        <h2 className="font-bold">4. Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts violating these
          terms.
        </p>

        <h2 className="font-bold">5. Limitation of Liability</h2>
        <p>
          DevTinder is not liable for indirect or consequential damages arising
          from the use of our services.
        </p>

        <h2 className="font-bold">6. Governing Law</h2>
        <p>These terms are governed by the laws of India.</p>
      </div>
    </div>
  );
}

export default TermsandCondition;
