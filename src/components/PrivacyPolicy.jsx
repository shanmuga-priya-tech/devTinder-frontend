import Navbar from "./Navbar";

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-auto w-1/2 leading-10">
        <h1 className="text-2xl font-bold text-orange-500 text-center">
          Privacy Policy
        </h1>
        <p>
          <strong>Effective Date:</strong> 15 january 2025
        </p>
        <p>
          Welcome to DevTinder. Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your information.
        </p>

        <h2 className=" font-bold">1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and payment details.
          </li>
          <li>
            <strong>Usage Data:</strong> Interaction patterns, device
            information, and IP addresses.
          </li>
        </ul>

        <h2 className=" font-bold">2. How We Use Your Information</h2>
        <ul>
          <li>🟠 To provide, maintain, and improve our services.</li>
          <li>🟠 To process payments and manage transactions securely.</li>
          <li>
            🟠 To communicate with you regarding updates, promotions, and
            support.
          </li>
        </ul>

        <h2 className=" font-bold">3. Sharing Your Information</h2>
        <p>
          We do not sell your data. Information may be shared with third-party
          vendors (e.g., payment processors like Razorpay) to provide services.
        </p>

        <h2 className=" font-bold">4. Data Security</h2>
        <p>
          We use industry-standard encryption to protect your data. However, no
          method of transmission is 100% secure.
        </p>

        <h2 className=" font-bold">5. Your Rights</h2>
        <p>
          You can request access, correction, or deletion of your data by
          contacting us at supportsevtinder@gmail.com.
        </p>

        <h2 className=" font-bold">6. Changes to This Policy</h2>
        <p>
          We may update this policy. Continued use of our services indicates
          acceptance of the updated policy.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
