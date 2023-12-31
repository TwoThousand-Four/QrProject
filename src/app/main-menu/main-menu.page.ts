import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToPerfil() {
    this.router.navigate(['/perfil']);
  }
  GoToHorarios() {
    this.router.navigate(['/horarios']);
  }
  GoToAyuda() {
    this.router.navigate(['/ayuda']);
  }
}
