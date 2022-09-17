import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-justificar',
  templateUrl: './justificar.page.html',
  styleUrls: ['./justificar.page.scss'],
})
export class JustificarPage implements OnInit {
  ramo : any;
  dia : String;
  asunto : String;
  texto : String;
  archivo : any;
  mensaje : String;

  constructor(private AlertController: AlertController,
    private toastController: ToastController,
    private router : Router,
    private servicio : ServicioService,
    public navCtrl : NavController) { }

  ngOnInit() {
  }

  async enviar(ramo : HTMLInputElement, dia : HTMLInputElement,asunto : HTMLInputElement, texto : HTMLInputElement, archivo : HTMLInputElement)
  {
    if(ramo.value == "default")
    {
      const toast = await this.toastController.create({
        color : 'danger',
        message : "porfavor seleccione un ramo",
        duration : 2000,
        position : 'top',
        icon: 'alert-circle-outline'
      })
      toast.present();
    }
    else if(dia.value == "")
    {
      const toast = await this.toastController.create({
        color : 'danger',
        message : "porfavor seleccione un dia valido",
        duration : 2000,
        position : 'top',
        icon: 'alert-circle-outline'
      })
      toast.present();
    }
    else if(asunto.value == "")
    {
      const toast = await this.toastController.create({
        color : 'danger',
        message : "porfavor inserte un titulo al asunto",
        duration : 2000,
        position : 'top',
        icon: 'alert-circle-outline'
      })
      toast.present();
    }
    else if(archivo.value == "")
    {
      const toast = await this.toastController.create({
        color : 'danger',
        message : "porfavor inserte un documento de acreditacion de su justificacion",
        duration : 2000,
        position : 'top',
        icon: 'alert-circle-outline'
      })
      toast.present();
    }
    else
    {

      this.mensaje= "";
      const alert = await this.AlertController.create({
        header    : "Datos enviados",
        message   : "Se han enviado los datos, espere la confirmacion en su correo",
        buttons   : ['Ok'],
      })
      await alert.present();
      this.router.navigate(['/index'])
    }
  }
}
