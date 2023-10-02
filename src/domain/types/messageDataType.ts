import { TCoworkerMock } from "../../lib/mockedData/CoworkersMock"
import { TMessage } from "./messageType"

export  type TMessageData = {
    from: TCoworkerMock,
    messages: TMessage[]
}