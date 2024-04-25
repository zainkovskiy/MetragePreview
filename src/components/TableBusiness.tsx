import React from 'react';
import { IObject } from '../types/ApiType';
import { useNumberTriad } from '../hooks/hookNumber';
interface ITableBusiness {
  objects: IObject[];
}
const TableBusiness: React.FC<ITableBusiness> = ({ objects }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Площадь (кв.м.)</th>
          <th>НДС</th>
          <th>Эксплутационные расходы</th>
          <th>Цена</th>
          <th>Этаж</th>
        </tr>
      </thead>
      <tbody>
        {objects.map((object) => (
          <tr key={object.UID}>
            <td>{object?.totalarea}</td>
            <td>{object?.vatType} руб.</td>
            <td>{object?.otherUtilitiesPayment}</td>
            <td>{useNumberTriad(object?.totalPrice)} руб.</td>
            <td>{object?.floor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBusiness;
