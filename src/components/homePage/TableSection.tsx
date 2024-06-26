'use client';

import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Selection,
    SortDescriptor
} from "@nextui-org/react";
import { columns, statusOptions } from "@utils/staticData";
import RenderCell from "@components/homePage/RenderCell";
import { UserI } from "@interfaces/user";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";
import { TableSectionI } from "@interfaces/props";

const INITIAL_VISIBLE_COLUMNS = ["name", "email", "phone", 'actions'];

export default function TableSection({data}: TableSectionI) {

    const [filterValue, setFilterValue] = useState<string>("");
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "age",
        direction: "ascending",
    });
    
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...data];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.email),
            );
        }

        return filteredUsers;
    }, [data, filterValue, statusFilter]); //eslint-disable-line

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a: UserI, b: UserI) => {
            const first = a[sortDescriptor.column as keyof UserI] as number;
            const second = b[sortDescriptor.column as keyof UserI] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(event.target.value));
        setPage(1);
    };

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    return (
        <Table
            aria-label="Example table with custom cells, pagination and sorting"
            isHeaderSticky
            bottomContentPlacement="outside"
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
            bottomContent={BottomContent({
                filteredItems,
                onNextPage,
                onPreviousPage,
                page,
                pages,
                selectedKeys,
                setPage
            })}
            topContent={TopContent({
                filterValue,
                onClear,
                onRowsPerPageChange,
                onSearchChange,
                setVisibleColumns,
                visibleColumns,
                users: data
            })}
        >
            <TableHeader columns={headerColumns}>
                {
                    (column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )
                }
            </TableHeader>
            <TableBody emptyContent={"No se encontró usuario"} items={sortedItems}>
                {
                    (item) => (
                        <TableRow key={item.id}>
                            {
                                (columnKey) => <TableCell>
                                    {
                                        RenderCell({
                                            columnKey,
                                            user: item
                                        }) as any
                                    }
                                </TableCell>
                            }
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    );
}
