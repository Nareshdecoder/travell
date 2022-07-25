export interface Item {
  id: string;
  name: string;
  Type: string;
  Why: string;
  description: string;
  duration: string;
  Place: string;
  price: string;
  tour: string;
}

export interface Review {
  name: string;
  descrption: string;
  email: string;
  id: string;
}

export interface Package {
  activities: string;
  day: string;
  days: string;
  description: string;
  flight: string;
  hotel: string;
  id: string;
  minamount: string;
  name: string;
  night: string;
  price: string;
  transfer: string;
}

export interface Trips {
  method: string;
  url: string;
}
export interface Payments {
  firstName: string;
  lastName: string;
  email: string;
  adhar: string;
}
