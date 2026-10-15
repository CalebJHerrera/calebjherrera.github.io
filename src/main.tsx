import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter, Routes, Route} from 'react-router'

import './index.css'
import Home from './Home/Home'
import About from './About/About'
import NotFound from './NotFound/NotFound'

// type CurrentPage = "HomePage" | "AboutPage" | "404Page";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                {/* The path strings are sensitive to spaces or ANY character please watch out */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    </StrictMode>
)
