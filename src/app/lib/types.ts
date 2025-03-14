export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: number;
  website: string;
  address: {
    city: string;
    street: string;
  };
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}
