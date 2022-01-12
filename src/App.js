import Layout from "./components/Layout";
import LeftAside from "./components/LeftAside";
import RightAside from "./components/RightAside";

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-6 h-screen p-10">
        <div className="col-span-1 lg:col-span-2 bg-gray-700 h-full bg-contain ">
          <LeftAside />
        </div>
        {/* right side */}

        <div className="col-span-1 lg:col-span-4 bg-gray-600 h-full opacity-90">
          <RightAside />
        </div>
      </div>
    </Layout>
  );
}

export default App;
