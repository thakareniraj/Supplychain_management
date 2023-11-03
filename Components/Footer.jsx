
import Logo from "./SVG/TT2"
export default () => {
  
  return (
    <footer className="pt-20">
      <div className="max-w-screen-xl mx-auto px-4 text-black-600 md:px-8  ">
        <div className="justify-center sm:flex border-t border-inherit">
          <div className="space-y-6">
            <h4 className="text-xl font-bold md:text-center mt-5">Working</h4>
            <div className="border-t">
              <ol className="list-decimal mt-3">
                <li value="1">Set Up MetaMask Wallet</li>
                <li>User Authentication</li>
                <li>Add Shipment Information</li>
                <li>Verify and Confirm Shipment Details</li>
                <li>Payment Confirmation</li>
                <li>Real-Time Tracking</li>
              </ol>
              </div>  
          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>© Trusty Trace </p>
        </div>
      </div>
    </footer>
  );
};
