export class Reserva {
  codigo: string = "";
  fechaEntrada: Date = new Date();
  fechaSalida: Date = new Date();
  importe: string = ""; // cambiar a numero representando el precio en centimos(para mejor conversion)?
}
