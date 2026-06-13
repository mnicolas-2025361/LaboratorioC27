import { SistemaIncidentes } from "./services/SistemaIncidentes.js";
const sistema = new SistemaIncidentes();
sistema.crearIncidente("Servidor caído", "El servidor principal no responde.", "Carlos", "Alta");
sistema.crearIncidente("Computadora lenta", "Equipo del laboratorio con bajo rendimiento.", "María", "Media");
sistema.actualizarEstado(1, "En Progreso");
sistema.listarIncidentes();
sistema.reporteMensual();
//# sourceMappingURL=app.js.map