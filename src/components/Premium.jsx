function Premium() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-500">
            Choose Your Premium Plan
          </h1>
          <p className="mt-2 text-lg ">
            Unlock exclusive features and make your coding journey seamless with
            DevTinder Premium!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Silver Membership
            </h2>
            <p className="text-gray-600">
              Perfect for casual developers who want to explore more
              connections.
            </p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Priority
                Profile Visibility
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> 5 Super
                Likes per Month
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Ad-Free
                Experience
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-3xl font-bold text-gray-900">
                ₹500<span className="text-sm text-gray-500">/year</span>
              </p>
              <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                Get Silver
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Gold Membership
            </h2>
            <p className="text-black">
              Designed for power developers who want the ultimate experience.
            </p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-white">
                <span className="text-black mr-2">&#10003;</span> Top Profile
                Ranking
              </li>
              <li className="flex items-center text-white">
                <span className="text-black mr-2">&#10003;</span> Unlimited
                Super Likes
              </li>
              <li className="flex items-center text-white">
                <span className="text-black mr-2">&#10003;</span> Premium
                Insights & Analytics
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-3xl font-bold text-white">
                ₹700<span className="text-sm">/year</span>
              </p>
              <button className="mt-4 w-full py-2 px-4 bg-white text-yellow-500 font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
                Get Gold
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
