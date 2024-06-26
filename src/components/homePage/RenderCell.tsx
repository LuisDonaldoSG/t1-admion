import { Button, Chip, ChipProps, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserI } from "@interfaces/user";
import { RenderCellI } from "@interfaces/props";

export default function RenderCell({ columnKey, user }: RenderCellI) {
    const cellValue = user[columnKey as keyof UserI];

    switch (columnKey) {
    case "name":
        return (
            <User
                description={user.email}
                name={cellValue as string}
            >
                {user.email}
            </User>
        );
    case "phone":
        return (
            <div className="flex flex-col">
                <p className="text-bold text-small capitalize">{cellValue as string}</p>
            </div>
        );
    case "actions":
        return (
            <div className="relative flex justify-end items-center gap-2">
                <Dropdown>
                    <DropdownTrigger>
                        <Button isIconOnly size="sm" variant="light">
                            <MoreVertIcon />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem>Ver</DropdownItem>
                        <DropdownItem>Editar</DropdownItem>
                        <DropdownItem className="text-danger" color="danger">Eliminar</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    default:
        return cellValue;
    }
};