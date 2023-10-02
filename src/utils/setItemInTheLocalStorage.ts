import { TCoworkerMock } from "../lib/mockedData/CoworkersMock"

interface ISetItemInTheLocalStorage {
    key: string
    item: any
}
export const setItemInTheLocalStorage = ({key, item}:ISetItemInTheLocalStorage) =>{
    localStorage.setItem(key, item )
}