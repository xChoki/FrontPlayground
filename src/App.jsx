import IndexPage from './pages/IndexPage'

import { Routes, Route } from 'react-router'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        {/* Public routes */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        
      </Route>
    </Routes>
  )
}

export default App
