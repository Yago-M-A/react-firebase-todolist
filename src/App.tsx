import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Home from './pages/Home'
import Edit from './pages/Edit'

export type ItensProps = {
  id: string
  value: string
}

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
    <GlobalStyle />
  </>
)

export default App
