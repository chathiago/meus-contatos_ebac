import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contato {
  id: number
  nome: string
  telefone: string
  email: string
}

const initialState: Contato[] = []

const contactSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    addContato: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
    },
    editContato: (state, action: PayloadAction<Contato>) => {
      const index = state.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteContato: (state, action: PayloadAction<number>) => {
      return state.filter((c) => c.id !== action.payload)
    },
  },
})

export const { addContato, editContato, deleteContato } = contactSlice.actions
export default contactSlice.reducer
