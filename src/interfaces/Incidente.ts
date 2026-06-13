import type { Prioridad } from "../types/Prioridad.js";
import type { EstadoIncidente } from "../types/EstadoIncidente.js";  

export interface Incidente {

    readonly id: number;

    titulo: string;

    descripcion: string;

    reportadoPor: string;

    prioridad: Prioridad;

    estado: EstadoIncidente;

    fechaCreacion: Date;
}