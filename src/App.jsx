import Header from "./components/Header";
import RightCol from "./components/RightCol";
import LeftCol from "./components/LeftCol";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1 relative">
          <Header />
          <div className="w-full grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2">
              <LeftCol />
            </div>
            <div className="w-full">
              <RightCol />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
