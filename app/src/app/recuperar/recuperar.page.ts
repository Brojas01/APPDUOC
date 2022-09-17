import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  usuario : String;

  constructor(private AlertController: AlertController,
    private toastController: ToastController,
    private router : Router) { }

  ngOnInit() {
  }

  async login(usuario : HTMLInputElement, contraseña : HTMLInputElement)
  {
    if(usuario.value == "")
    {
      const toast = await this.toastController.create({
        color : 'danger',
        message : "usuario invalido",
        duration : 2000,
        position : 'top',
        icon: 'alert-circle-outline'
      })
      toast.present();
    }
    else
    {
      const toast = await this.toastController.create({
        color : 'warning',
        message : "Se envio un correo de recuperacion a su email",
        duration : 2000,
        position : 'top',
        icon: 'mail-outline'
      })
      this.router.navigate(['/home'])
      toast.present();
    }
  }

}
