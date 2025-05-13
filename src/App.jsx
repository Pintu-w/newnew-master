import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "./layout/LayOut";
import { Toaster } from "react-hot-toast";
import Loading from "./componants/Homefolder/Loading";

// Lazy loading the components
const Home = lazy(() => import("./componants/Homefolder/Home"));
const HumanResource = lazy(() => import("./componants/pages/HumanResource"));
const Education = lazy(() => import("./componants/pages/Education"));
const ITDepartment = lazy(() => import("./componants/pages/ITDepartment"));
const ContactUs = lazy(() => import("./componants/pages/ContactUs"));

function App() {
  return (
    <div className="font-general">
      <>
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/humanresource" element={<HumanResource />} />
              <Route path="/education" element={<Education />} />
              <Route path="/itdepartment" element={<ITDepartment />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Route>
          </Routes>
        </Suspense>
        <Toaster />
      </>
    </div>
  );
}

export default App;
