import { create } from 'zustand'
import { TCoworkerMock } from '../../lib/mockedData/CoworkersMock'

const voidRemitent:TCoworkerMock = {
    _id: 0,
    username: '',
    profileImage: '',
    isOnline: false,
    backgroundColor: ''
}

export const useRemitentStore = create((set) => ({
  remitent: voidRemitent,
  setRemitent: (remitent:TCoworkerMock) => set(() => ({ remitent: remitent })),
  clearRemitent: () => set({ remitent: voidRemitent }),
}))
