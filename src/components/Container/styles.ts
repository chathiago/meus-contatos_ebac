import styled from 'styled-components'

export const ContainerGeneral = styled.div`
  display: grid;
  max-width: 70%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  padding: 100px;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    padding: 36px 24px;
  }
`
export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ContainerInsideFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 12px;
  margin-bottom: 12px;
`
