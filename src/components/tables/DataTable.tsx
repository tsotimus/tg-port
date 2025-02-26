"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "../ui/pagination";
import { match } from "ts-pattern";

type  DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination?: {
    page: number;
    setPage: (num: number) => Promise<URLSearchParams>
    totalPages: number;
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination
}: DataTableProps<TData, TValue>) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:  pagination ? getPaginationRowModel() : undefined,
  });

  console.log(pagination?.page, pagination?.totalPages)

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {
        pagination && (
          <Pagination>
            <PaginationContent>
              {
                pagination.page > 1 && (
                  <PaginationItem className="hover:cursor-pointer">
                    <PaginationPrevious onClick={() => pagination.setPage(pagination.page - 1)} />
                  </PaginationItem>
                )
              }
              {
                match({
                  page: pagination.page,
                  totalPages: pagination.totalPages
                })
                .with({ page: 0, totalPages: 1 }, () => null)
                .otherwise(({totalPages, page}) => {
                  return (
                    <>
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem key={i} className="hover:cursor-pointer">
                          <PaginationLink onClick={() => pagination.setPage(i+1)} isActive={i + 1 === page}>{i + 1}</PaginationLink>
                        </PaginationItem>
                      ))}
                    </>
                  )
                })
              }
              {
                pagination.totalPages > 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )
              }
              {
                pagination.page !== pagination.totalPages && (
                  <PaginationItem className="hover:cursor-pointer">
                    <PaginationNext onClick={() => pagination.setPage(pagination.page + 1)} />
                  </PaginationItem>
                )
              }
            </PaginationContent>
          </Pagination>
        )
      }
    </div>
  );
}
