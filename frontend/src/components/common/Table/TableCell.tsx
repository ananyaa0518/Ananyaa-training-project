interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
}

export function TableCell({ children, className = '', isHeader = false }: TableCellProps) {
  if (isHeader) {
    return (
      <th className={`px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider ${className}`}>
        {children}
      </th>
    );
  }
  return (
    <td className={`px-6 py-4 text-sm text-gray-900 ${className}`}>
      {children}
    </td>
  );
}
