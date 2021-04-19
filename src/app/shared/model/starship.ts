import { Film } from "./film";
import { Pilot } from "./pilot";

export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credit: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumable: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[]; 
    starshipPilots: Pilot[];   
    films: string[];
    starshipFilms: Film[];
}
