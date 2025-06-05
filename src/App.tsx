import Blog from './pages/Blog/Blog'
import Layout from './pages/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter basename='/finsweet/'>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
