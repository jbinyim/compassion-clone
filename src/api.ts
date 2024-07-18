const BASE_PATH =
  "https://my-json-server.typicode.com/jbinyim/compassion_DB/baby";

export interface ChildI {
  id: number;
  number: string;
  name: string;
  live: string;
  age: number;
  sex: string;
  birth: string;
  hoby: string[];
  family: string[];
  img: string;
}

export const getBabyInfo = async () => {
  return fetch(`${BASE_PATH}`).then((response) => response.json());
};
