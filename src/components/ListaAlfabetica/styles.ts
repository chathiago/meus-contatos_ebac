import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Line = styled.hr`
  border: none;
  border-top: 1px solid ${colors.primary};
  margin-top: 4px;
  margin-bottom: 8px;
`
export const ListaIndice = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: ${colors.secondary};
`
