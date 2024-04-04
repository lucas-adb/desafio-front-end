import { ComponentProps } from "react";

interface TableDesktopProps extends ComponentProps<"table"> {}

export function TableDesktop(props: TableDesktopProps) {
  return (
    <table {...props} className="table--desktop box-shadow-2">
      <thead className="thead--desktop box-shadow-1">
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th>CARGO</th>
          <th>DATA DE ADMISSÃO</th>
          <th>TELEFONE</th>
        </tr>
      </thead>

      <tbody className="tbody--desktop">{props.children}</tbody>
    </table>
  );
}
