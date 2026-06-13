import type { Prioridad } from "../types/Prioridad.js";
import type { EstadoIncidente } from "../types/EstadoIncidente.ts";
export declare class SistemaIncidentes {
    private incidentes;
    private ultimoId;
    crearIncidente(titulo: string, descripcion: string, reportadoPor: string, prioridad: Prioridad): void;
    actualizarEstado(id: number, estado: EstadoIncidente): void;
    listarIncidentes(): void;
    reporteMensual(): void;
}
//# sourceMappingURL=SistemaIncidentes.d.ts.map