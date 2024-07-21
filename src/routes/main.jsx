import * as React from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import { HomePage } from "../pages/home";
import { StorePage } from "../pages/store";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/loja" element={<StorePage/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
)

  export default AppRouter;