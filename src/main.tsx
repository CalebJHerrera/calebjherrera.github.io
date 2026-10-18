import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import "./globals.css";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

// type CurrentPage = "HomePage" | "AboutPage" | "404Page"; // Second comment - wow a relic of my weird efforts

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                {/* The path strings are sensitive to spaces or ANY character please watch out */}
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    </StrictMode>,
);
