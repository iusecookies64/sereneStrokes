import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/404";
import Signup from "./pages/Signup";
import BasicDetails from "./pages/BasicDetails";
import Address from "./pages/Address";
import CardDetails from "./pages/CardDetails";
import Review from "./pages/Review";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />}>
        <Route path="1" element={<BasicDetails />} />
        <Route path="2" element={<Address />} />
        <Route path="3" element={<CardDetails />} />
        <Route path="review" element={<Review />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
