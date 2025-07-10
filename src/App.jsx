import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/home";
import { NotFound } from "./Pages/not_found";
import { Toaster } from "react-hot-toast"; // 👈 import toaster

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster position="bottom-center" /> {/* 👈 Add this outside Router */}
    </>
  );
}

export default App;
