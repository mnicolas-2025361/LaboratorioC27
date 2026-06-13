export class SistemaIncidentes {
    constructor() {
        this.incidentes = [];
        this.ultimoId = 1;
    }
    crearIncidente(titulo, descripcion, reportadoPor, prioridad) {
        const nuevoIncidente = {
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
    actualizarEstado(id, estado) {
        const incidente = this.incidentes.find(i => i.id === id);
        if (incidente) {
            incidente.estado = estado;
        }
    }
    listarIncidentes() {
        console.table(this.incidentes);
    }
    reporteMensual() {
        const mes = new Date().getMonth();
        const anio = new Date().getFullYear();
        const reporte = this.incidentes.filter(i => i.fechaCreacion.getMonth() === mes &&
            i.fechaCreacion.getFullYear() === anio);
        console.log("===== REPORTE MENSUAL =====");
        console.table(reporte);
        console.log(`Total: ${reporte.length}`);
    }
}
//# sourceMappingURL=SistemaIncidentes.js.map