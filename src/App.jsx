import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Feed from "./components/Feed";
import Error from "./components/Error";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import ForgotPassword from "./components/forgotPassword";
import ResetPassword from "./components/ResetPassword";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsandCondition from "./components/TermsandCondition";
import Cancellation from "./components/Cancellation";
import ShippingandDelivery from "./components/ShippingandDelivery";
import Contact from "./components/contact";
import Premium from "./components/Premium";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />

              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/message/:receiverId" element={<Chat />} />
              <Route path="/error" element={<Error />} />
            </Route>
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/resetpassword/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandcondition" element={<TermsandCondition />} />
            <Route path="/cancellationpolicy" element={<Cancellation />} />
            <Route path="/shippingpolicy" element={<ShippingandDelivery />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
