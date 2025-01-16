import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-auto w-1/2 leading-10">
        <h1 className="text-2xl font-bold text-orange-500 text-center">
          Contact Us
        </h1>
        <p>
          If you have questions or require assistance, feel free to contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> supportdevtinder@gmail.com
          </li>
        </ul>
        <p>
          We’re here to assist you Monday through Friday, 9:00 AM – 6:00 PM IST.
        </p>
      </div>
    </div>
  );
}

export default Contact;
