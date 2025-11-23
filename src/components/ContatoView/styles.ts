import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const LetraIndice = styled.span`
  font-weight: bold;
  font-size: 24px;
  padding: 2px 8px;
  color: ${colors.offWhite};
  background-color: ${colors.primary};
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: ${colors.primary};
  }
`

export const NomeContato = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${colors.secondary};
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
    opacity: 0.8;
  }
`
