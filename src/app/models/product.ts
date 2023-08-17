import { Iproduct } from "./iproduct";

export class productResponse {
  constructor(
    public products: Iproduct[],
    public total: number,
    public skip: number,
    public limit: number,
  ){}
}
