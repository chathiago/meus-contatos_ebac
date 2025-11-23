import GlobalStyle from './styles/globalStyle'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DadosContato from './components/DadosContato/DadosContato'
import NovoContato from './components/NovoContato/NovoContato'
import { Container } from './components/Container/Container'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="novo" element={<NovoContato />} />
            <Route path="editar/:id" element={<NovoContato />} />
            <Route path="contato/:id" element={<DadosContato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App
