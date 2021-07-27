import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Bienvenido a OGADevs';

  curso: string = 'Curso Spring Boot 5 con Angular 12';

  profesor: string = 'Andrés Gúzman';
}
