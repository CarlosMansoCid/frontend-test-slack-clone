import { create } from 'zustand'
import { chanelsMock } from '../../lib/mockedData/ChanelsMock'
import { TChanel } from '../types/chanelType'


export const useChanelstStore = create((set) => ({
    chanels: chanelsMock,
    addChanel: (newChanel:TChanel) => set((state:any) => ({chanels: [...state.chanels, newChanel ]})),
    removeChanel: (newChanels:TChanel[]) => set(() =>({chanels: [...newChanels]})),
}))
