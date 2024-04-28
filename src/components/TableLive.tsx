import React from 'react';
import { IObject } from '../types/ApiType';
import { useNumberTriad } from '../hooks/hookNumber';
interface ITableLive {
  objects: IObject[];
}
const TableLive: React.FC<ITableLive> = ({ objects }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Площадь общая</th>
          <th>Площадь жилая</th>
          <th>Комнатность</th>
          <th>Цена</th>
          <th>Этаж</th>
        </tr>
      </thead>
      <tbody>
        {objects.map((object) => (
          <tr key={object.UID}>
            <td>{object?.totalarea}</td>
            <td>{object?.livingArea} руб.</td>
            <td>{object?.roomsCount}</td>
            <td>{useNumberTriad(object?.totalPrice)} руб.</td>
            <td>{object?.floor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableLive;
