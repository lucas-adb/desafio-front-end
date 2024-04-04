import { ComponentProps } from "react";

interface TableMobileProps extends ComponentProps<"table"> {}

export function TableMobile(props: TableMobileProps) {
  return (
    <table className="table--mobile box-shadow-2">
      <thead className="thead--mobile box-shadow-1">
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th>
            <div className="th__ellipse-div"></div>
          </th>
        </tr>
      </thead>
      <tbody className="tbody--mobile">{props.children}</tbody>
    </table>
  );
}
