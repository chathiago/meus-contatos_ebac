import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { useNavigate, useParams } from 'react-router-dom'
import { AlertButton, SecondaryButton } from '../Buttons'
import { ContainerWrapper } from '../Container/styles'
import { DadosContainer } from '../DadosContato/styles'
import { Text } from '../Texts'
import * as S from './styles'
import { addContato, editContato } from '../../store/contactSlice/contactSlice'

const NovoContato = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { id } = useParams()
  const contatos = useSelector((state: RootState) => state.contatos)
  const contatoExistente = id
    ? contatos.find((c) => c.id === Number(id))
    : undefined

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const nome = (form.elements.namedItem('nome') as HTMLInputElement).value
    const telefone = (form.elements.namedItem('telefone') as HTMLInputElement)
      .value
    const email = (form.elements.namedItem('e-mail') as HTMLInputElement).value

    if (contatoExistente) {
      dispatch(
        editContato({
          id: contatoExistente.id,
          nome,
          telefone,
          email,
        })
      )
    } else {
      dispatch(
        addContato({
          id: Date.now(),
          nome,
          telefone,
          email,
        })
      )
    }

    navigate('/')
  }

  return (
    <ContainerWrapper>
      <DadosContainer>
        <Text>{contatoExistente ? 'Editar Contato' : 'Novo Contato'}</Text>
        <S.FormNewContact onSubmit={handleSubmit}>
          <S.LabelNewContact htmlFor="nome">Nome</S.LabelNewContact>
          <S.InputNewContact
            type="text"
            id="nome"
            defaultValue={contatoExistente?.nome ?? ''}
          />
          <S.LabelNewContact htmlFor="telefone">Telefone</S.LabelNewContact>
          <S.InputNewContact
            type="number"
            id="telefone"
            defaultValue={contatoExistente?.telefone ?? ''}
          />
          <S.LabelNewContact htmlFor="e-mail">E-mail</S.LabelNewContact>
          <S.InputNewContact
            type="text"
            id="e-mail"
            defaultValue={contatoExistente?.email ?? ''}
          />
          <S.ActionsButtonsForm>
            <SecondaryButton type="submit">Salvar</SecondaryButton>
            <AlertButton type="button" onClick={() => navigate('/')}>
              Cancelar
            </AlertButton>
          </S.ActionsButtonsForm>
        </S.FormNewContact>
      </DadosContainer>
    </ContainerWrapper>
  )
}

export default NovoContato
