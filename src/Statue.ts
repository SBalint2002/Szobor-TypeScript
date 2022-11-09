import { Artwork } from "./Artwork";

export class Statue implements Artwork {
  title: string;
  year: number;
  price: number;
  height: number;

  constructor(title: string, year: number, price: number, height: number) {
    this.title = title;
    this.year = year;
    this.price = price;
    this.height = height;
  }

  kiir(): void {
    console.log(this.toString());
  }
  toString(): string {
    return this.title + " " + this.year + " " + this.price + " Ft";
  }
}
