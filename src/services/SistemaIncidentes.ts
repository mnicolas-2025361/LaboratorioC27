import type { Incidente } from "../interfaces/Incidente.js";
import type { Prioridad } from "../types/Prioridad.js";
import type { EstadoIncidente } from "../types/EstadoIncidente.ts";

export class SistemaIncidentes {

    private incidentes: Incidente[] = [];
    private ultimoId: number = 1;

    crearIncidente(
        titulo: string,
        descripcion: string,
        reportadoPor: string,
        prioridad: Prioridad
    ): void {

        const nuevoIncidente: Incidente = {
            id: this.ultimoId++,
            titulo,
            descripcion,
            reportadoPor,
            prioridad,
            estado: "Abierto",
            fechaCreacion: new Date()
        };

        this.incidentes.push(nuevoIncidente);
    }

    actualizarEstado(
        id: number,
        estado: EstadoIncidente
    ): void {

        const incidente = this.incidentes.find(
            i => i.id === id
        );

        if (incidente) {
            incidente.estado = estado;
        }
    }

    listarIncidentes(): void {
        console.table(this.incidentes);
    }

    reporteMensual(): void {

        const mes = new Date().getMonth();
        const anio = new Date().getFullYear();

        const reporte = this.incidentes.filter(
            i =>
                i.fechaCreacion.getMonth() === mes &&
                i.fechaCreacion.getFullYear() === anio
        );

        console.log("===== REPORTE MENSUAL =====");
        console.table(reporte);
        console.log(`Total: ${reporte.length}`);
    }
}