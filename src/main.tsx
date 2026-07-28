import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter, Routes, Route} from 'react-router'

import './index.css'
import Home from './Home/Home'
import About from './About/About'

// type CurrentPage = "HomePage" | "AboutPage" | "404Page";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>
    </StrictMode>
)
