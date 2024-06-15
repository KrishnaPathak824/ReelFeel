import React from 'react';
import Home from './pages/Home';
import WordCloudPage from "./pages/WordCloud";
import Test from "./pages/Test";
import Emotions  from './pages/Emotions';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/wordcloud" element={<WordCloudPage/>}/>
                <Route path="/test" element={<Test/>}/>
                <Route path='/emotion' element={<Emotions/>}/>
            </Routes>
        </>
    );
}

export default App;

