const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">
          Blood Donation Eligibility
        </h1>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc list-inside">
            <li>Age between 18 and 65 years old</li>
            <li>Minimum weight of 50 kg (110 lbs)</li>
            <li>Good overall health</li>
            <li>Not having certain chronic illnesses</li>
            <li>No recent tattoos or piercings</li>
            {/* Add more eligibility criteria here */}
          </ul>
        </div>

        <div className="bg-white mt-4 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Benefits of Blood Donation
          </h2>
          <p>Donating blood can have various benefits, such as:</p>
          <ul className="list-disc list-inside">
            <li>Helping save lives in emergencies</li>
            <li>Contributing to medical research</li>
            <li>Free health screening</li>
            <li>Reducing the risk of certain health conditions</li>
            {/* Add more benefits here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
