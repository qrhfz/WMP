import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import "boxicons/css/boxicons.css"
import { Provider } from 'react-redux'
import { store } from "./store";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Songs } from './pages/Songs'
import { Albums } from './pages/Albums'
import { Artists } from './pages/Artists'
import { Search } from './pages/Search'
import { AlbumDetail } from './pages/AlbumDetail'
import { ArtistDetail } from './pages/ArtistDetail'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Songs />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/:id" element={<AlbumDetail />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<ArtistDetail />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
)
