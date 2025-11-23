// components/Container/Container.js
import { Outlet } from 'react-router-dom'
import { ContainerGeneral } from './styles'
import ListaContatos from '../ListaContatos/ListaContatos' // Deixe o import

export const Container = () => {
  return (
    <ContainerGeneral>
      <ListaContatos />
      <Outlet />
    </ContainerGeneral>
  )
}
