import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { User } from "@/types/api/user";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

export default function Users() {
  const { data, error, isLoading } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor((row) => row.id, {
      header: "ID",
      cell: (props) => props.row.original.id,
    }),
    columnHelper.accessor((row) => row.name, {
      header: "名前",
      cell: (props) => props.row.original.name,
    }),
    columnHelper.accessor((row) => row.username, {
      header: "ユーザー名",
      cell: (props) => props.row.original.username,
    }),
    columnHelper.accessor((row) => row.email, {
      header: "メール",
      cell: (props) => props.row.original.email,
    }),
    columnHelper.accessor((row) => row.address.city, {
      header: "都市",
      cell: (props) => props.row.original.address.city,
    }),
    columnHelper.accessor((row) => row.phone, {
      header: "電話番号",
      cell: (props) => props.row.original.phone,
    }),
    columnHelper.accessor((row) => row.company.name, {
      header: "会社名",
      cell: (props) => props.row.original.company.name,
    }),
  ];

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 3,
      },
    },
  });

  if (error) return <div>エラーが発生しました{error.message}</div>;
  if (isLoading)
    return (
      <div>
        <span className="inline-block animate-spin border-2 border-gray-300 border-t-gray-900 rounded-full w-5 h-5"></span>
      </div>
    );
  if (!data) return <div>データがありません</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ユーザー管理</h2>
      <div className="bg-white rounded shadow overflow-x-auto">
        <>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="flex items-center">
              <button
                className="px-3 py-1 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                最初
              </button>
              <button
                className="ml-2 px-3 py-1 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                前へ
              </button>
              <span className="mx-4">
                <strong>
                  {table.getState().pagination.pageIndex + 1} /{" "}
                  {table.getPageCount()}
                </strong>
              </span>
              <button
                className="px-3 py-1 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                次へ
              </button>
              <button
                className="ml-2 px-3 py-1 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                最後
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
