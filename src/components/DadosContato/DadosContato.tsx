import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store/store'
import { AlertButton, PrimaryButton } from '../Buttons'
import { Line } from '../ListaAlfabetica/styles'
import { EmphasisText, EmphasisTitle, Text } from '../Texts'
import * as S from './styles'
import { deleteContato } from '../../store/contactSlice/contactSlice'

const DadosContato = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const contato = useSelector((state: RootState) =>
    state.contatos.find((c) => c.id === Number(id))
  )

  if (!contato) {
    return <Text>Lista vazia.</Text>
  }

  const handleEditar = () => {
    navigate(`/editar/${contato.id}`)
  }

  const handleExcluir = () => {
    dispatch(deleteContato(contato.id))
    navigate('/')
  }

  return (
    <S.DadosContainer>
      <S.DadosLetra>{contato.nome[0].toUpperCase()}</S.DadosLetra>
      <EmphasisTitle>{contato.nome}</EmphasisTitle>
      <S.InfoContainer>
        <EmphasisText>Telefone:</EmphasisText>
        <Text>{contato.telefone}</Text>
        <Line />
        <EmphasisText>E-mail:</EmphasisText>
        <Text>{contato.email}</Text>
      </S.InfoContainer>
      <S.ActionsContainer>
        <PrimaryButton onClick={handleEditar}>Editar</PrimaryButton>
        <AlertButton onClick={handleExcluir}>Excluir</AlertButton>
      </S.ActionsContainer>
    </S.DadosContainer>
  )
}

export default DadosContato
