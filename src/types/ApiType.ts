export interface IApi {
  UID: number;
  addressInfo: IAddressInfo | null;
  main: IMain | null;
  objects: IObject[];
  pictures: IPictures[];
  realtor: IRealtor | null;
}

interface IAddressInfo {
  addressString: string;
  buildingName: string;
}

interface IMain {
  building: IMainBuilding | null;
  cords: string[];
  metro: IMainMetro[] | null;
  pictures: string[];
}
interface IMainBuilding {
  floors: number;
  totalarea: number | undefined;
  infrastructure: string[];
  lift: string[];
  ConditioningType: string;
  ClassType: string;
}
interface IMainMetro {
  name: string;
  distantion: string;
}

export interface IRealtor {
  fullName: string;
  phone: string;
  email: string;
  avatar: string;
}

interface IObject {
  UID: number;
  floor: number;
  otherUtilitiesPayment: string;
  price: number;
  totalPrice: number;
  totalarea: number;
  type: string;
  vatType: string;
}
interface IPlan {
  URL: string;
  title: string;
}
export interface IPictures {
  plan: IPlan[];
  photo: string[];
}
