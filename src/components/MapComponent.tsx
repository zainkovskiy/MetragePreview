import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

interface IMapComponent {
  cords: string[] | [];
}
const MapComponent: React.FC<IMapComponent> = ({ cords }) => {
  let center = [56.8572, 21.1176];
  if (cords) {
    center = cords.map((cord) => {
      return parseFloat(cord);
    });
  }

  return (
    <YMaps
      query={{
        // apikey: process.env.YANDEX_API_KEY,
        apikey: 'a890e783-cb17-4f01-88cd-0030e80a7572',
      }}
    >
      <Map state={{ center: center, zoom: 10 }} width='100%' height='100%'>
        <Placemark geometry={center} />
      </Map>
    </YMaps>
  );
};

export default MapComponent;
