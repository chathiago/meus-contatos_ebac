import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FormNewContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 8px;
  padding: 12px;
  margin-bottom: 16px;
  background-color: ${colors.offWhite};
  border-radius: 8px;
  text-align: left;

  &:focus-within {
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  }
`
export const InputNewContact = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.secondary};
  color: ${colors.secondary};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.primary};
  }
`

export const LabelNewContact = styled.label`
  font-weight: 600;
  font-size: 14px;
`

export const ActionsButtonsForm = styled.div`
  display: flex;
  gap: 8px;
`
