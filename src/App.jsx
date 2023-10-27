import IndexPage from './pages/IndexPage'

import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import ProjectsPage from './pages/ProjectsPage'
import LoginExamplePage from './pages/LoginExamplePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='projects' element={<ProjectsPage />} />

        <Route path='loginexample' element={<LoginExamplePage />} />
        {/* Public routes */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        
      </Route>
    </Routes>
  )
}

export default App
