// Import the necessary libraries
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure Enzyme to use the React 16 adapter
Enzyme.configure({ adapter: new Adapter() });

// Export the Enzyme configuration
export default Enzyme;