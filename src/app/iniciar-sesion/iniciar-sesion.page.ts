import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
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
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

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

  login() {

    console.log("usuario: " + this.usuario.email + " clave: "+ this.usuario.password)
    this.usuarios.forEach(persona => {
      if (this.usuario.email==persona.email && this.usuario.password == persona.contrasena)  {
        this.router.navigate(['/main-menu'])
      
      
      }
    });
    
 }

  ngOnInit() {
  }
  

GoToHome(){
  this.router.navigate(['/home']);
}
GoToRecuperarContra(){
  this.router.navigate(['/recuperar-contra']);
}
}
