import { Component, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import type { IonModal } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';


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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('modal', { static: true }) modal!: IonModal;

  constructor(private router: Router,
              private animationCtrl:AnimationController) {
              
              }

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
                {
                  id: 2,
                  nombre: "Jeremy",
                  Apellido: "Garrido",
                  email: "jeremy@gmail.com",
                  contrasena: "jeremy123",
                  rut: "21.362.843-7",
                  tipoUser: "Alumno",
                },
                
            ]
            login() {

              console.log("usuario: " + this.usuario.email + " clave: "+ this.usuario.password)
              this.usuarios.forEach(persona => {
                if (this.usuario.email==persona.email && this.usuario.password == persona.contrasena)  {
                  this.router.navigate(['/main-menu'])
                  this.modal.dismiss();
                
                }
              });
              
           }
           

              GoToLogin() {
                this.router.navigate(['/iniciar-sesion']);
            }

              ngOnInit() {
                const enterAnimation = (baseEl: HTMLElement) => {
                  const root = baseEl.shadowRoot;
            
                  const backdropAnimation = this.animationCtrl
                    .create()
                    .addElement(root!.querySelector('ion-backdrop')!)
                    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
            
                  const wrapperAnimation = this.animationCtrl
                    .create()
                    .addElement(root!.querySelector('.modal-wrapper')!)
                    .keyframes([
                      { offset: 0, opacity: '0', transform: 'scale(0)' },
                      { offset: 1, opacity: '0.99', transform: 'scale(1)' },
                    ]);
            
                  return this.animationCtrl
                    .create()
                    .addElement(baseEl)
                    .easing('ease-out')
                    .duration(500)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
                };
            
                const leaveAnimation = (baseEl: HTMLElement) => {
                  return enterAnimation(baseEl).direction('reverse');
                };
            
                this.modal.enterAnimation = enterAnimation;
                this.modal.leaveAnimation = leaveAnimation;
              }
            
              closeModal() {
                this.modal.dismiss();
              }
              GoToHome(){
                this.router.navigate(['/home']);
              }
              GoToRecuperarContra(){
                this.router.navigate(['/recuperar-contra']);
              }
}



