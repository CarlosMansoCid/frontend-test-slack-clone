import {BsFiles, BsBuilding} from 'react-icons/bs'
import {GoStack} from 'react-icons/go'
import { IconType } from "react-icons"
import {FiMoreVertical} from 'react-icons/fi'

export type TLink = {
    title: string,
    link: string,
    icon: IconType
}

export const sidebarLinksMock = [
    {
        title: 'Canvas',
        icon: BsFiles,
        link: '#'
    },
    {
        title: 'Slack Connect',
        icon: BsBuilding,
        link: '#'
    },
    {
        title: 'Archivos',
        icon: GoStack,
        link: '#'
    },
    {
        title: 'Explorar Slack',
        icon: FiMoreVertical,
        link: '#'
    },
]