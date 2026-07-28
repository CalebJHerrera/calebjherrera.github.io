import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'

import './index.css'
import Home from './Home/Home.tsx'
import About from './About/About.tsx'

// type CurrentPage = "HomePage" | "AboutPage" | "404Page";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* Remove StrictMode while pushing to repo. */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
