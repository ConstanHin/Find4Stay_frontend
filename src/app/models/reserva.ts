export class Reserva {
  id: number = 0;
  codigo: string = "";
  fecha_entrada: Date = new Date();
  fecha_salida: Date = new Date();
  importe_reserva: number = 0;
  cliente = {
    nombre: "",
    apellido: "",
  }
  hotel = {
    nombre: ""
  }
}
