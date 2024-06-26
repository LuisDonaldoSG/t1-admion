import { Selection } from "@nextui-org/react";
import { UserI } from "@interfaces/user";
import { PathsElementsI } from "@interfaces/paths";

export interface ProvidersI {
    children: React.ReactNode
}

export interface LayoutI {
    children: React.ReactNode
}

export interface TitlePageI {
    title: string
}

export interface RenderCellI {
    user: UserI
    columnKey: React.Key
}

export interface TopContentI {
    filterValue: string
    onSearchChange: (value: string) => void
    onClear: () => void
    users: UserI[]
    visibleColumns: Selection
    setVisibleColumns: React.Dispatch<React.SetStateAction<Selection>>
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface BottomContentI {
    selectedKeys: Selection
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    pages: number
    filteredItems: UserI[]
    onPreviousPage: () => void
    onNextPage: () => void
}

export interface LinkItemI {
    nameForSubPath?: string
    dataLink: PathsElementsI
}

export interface TableSectionI {
    data: UserI[]
}