import { Starship } from "./starship";

export interface RestPage<T> {
    count: number; 
    next: string;
    previous: string; 
    results: Array<T>;
}