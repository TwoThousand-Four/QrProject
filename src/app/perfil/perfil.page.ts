import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

interface User{

  id: Number,
  nombre: string,
  Apellido: string,
  email: string,
  contrasena: string,
  rut: string,
  tipoUser: UserType,
}

type UserType = 'Alumno' | 'Profesor'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router) { }

  usuario = {
    email:'',
    password:''
  }

  usuarios:  User[] = 
  [ 
    {
      id: 1,
      nombre: "Esteban",
      Apellido: "Cornejo",
      email: "esteban@gmail.com",
      contrasena: "esteban123",
      rut: "21.442.894-6",
      tipoUser: "Profesor",
    },
    
]


  ngOnInit() {
  }

  GoToMainMenu() {
    this.router.navigate(['/main-menu']);
  }

}
