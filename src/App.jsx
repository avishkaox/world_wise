import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Products />} />
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List</p>} />
          <Route path="cities" element={<p>asd</p>} />
          <Route path="countries" element={<p>asdsss</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
