import { useSelector } from 'react-redux'
import Contato from '../ContatoView/ContatoView'
import { RootState } from '../../store/store'
import { Line, ListaIndice } from './styles'

const ListaAlfabetica = () => {
  const contatos = useSelector((state: RootState) => state.contatos)

  const indiceContatos = contatos.reduce(
    (acc: Record<string, typeof contatos>, contato) => {
      if (!contato.nome) return acc
      const primeiraLetra = contato.nome[0].toUpperCase()
      if (!acc[primeiraLetra]) acc[primeiraLetra] = []
      acc[primeiraLetra].push(contato)
      return acc
    },
    {}
  )

  Object.keys(indiceContatos).forEach((letra) => {
    indiceContatos[letra].sort((a, b) => a.nome.localeCompare(b.nome))
  })

  return (
    <>
      {Object.entries(indiceContatos).map(([letra, lista]) => (
        <div key={letra}>
          <ListaIndice>{letra}</ListaIndice>
          <Line />
          {lista.map((c) => (
            <Contato key={c.id} contato={c} />
          ))}
        </div>
      ))}
    </>
  )
}

export default ListaAlfabetica
