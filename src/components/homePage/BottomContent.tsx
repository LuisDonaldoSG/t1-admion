import { BottomContentI } from "@interfaces/props";
import { Button, Pagination } from "@nextui-org/react";

export default function BottomContent({
    selectedKeys,
    page,
    setPage,
    pages,
    filteredItems,
    onNextPage,
    onPreviousPage
}: BottomContentI) {
    return (
        <div className="py-2 px-2 flex justify-between items-center">
            <span className="w-[30%] text-small text-default-400">
                {
                    selectedKeys === "all"
                        ? "Todas las filas seleccionadas"
                        : `${selectedKeys.size} de ${filteredItems.length} seleccionados`
                }
            </span>
            <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={setPage}
            />
            <div className="hidden sm:flex w-[30%] justify-end gap-2">
                <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                    Anterior
                </Button>
                <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                    Siguiente
                </Button>
            </div>
        </div>
    );
};