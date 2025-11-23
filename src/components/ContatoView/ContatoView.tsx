import { useNavigate } from 'react-router-dom'
import type { Contato } from '../../store/contactSlice/contactSlice'
import { ContainerInsideFlex } from '../Container/styles'
import { LetraIndice, NomeContato } from './styles'

interface Props {
  contato: Contato
}

const ContatoView = ({ contato }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <ContainerInsideFlex onClick={() => navigate(`/contato/${contato.id}`)}>
        <LetraIndice>{contato.nome[0].toUpperCase()}</LetraIndice>
        <NomeContato>{contato.nome}</NomeContato>
      </ContainerInsideFlex>
    </>
  )
}

export default ContatoView
