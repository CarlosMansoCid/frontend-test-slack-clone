import { create } from 'zustand'



export const useShowSidebarStore = create((set) => ({
  show: false,
  setShow: () => set(() => ({show: true})),
  setHidden: () => set(()=>({show: false})),
}))