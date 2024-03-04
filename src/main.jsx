import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx'
import './assets/style/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <Banner />
    </React.StrictMode>,
)
