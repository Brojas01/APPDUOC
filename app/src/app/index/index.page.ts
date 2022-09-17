import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MenuController, NavParams, ToastController } from '@ionic/angular';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  user:any;
  constructor(private menu: MenuController,
              private servicio:ServicioService,
              private router : Router,
              private toastController : ToastController) { 
  }

  ngOnInit() {
    this.servicio.$getObjectSource.subscribe(data => {
      console.log(data)
      this.user = data;
  }).unsubscribe();
  this.servicio.$getListSource.subscribe(list => console.log(list)).unsubscribe();
  }

  async logout (){

    const toast = await this.toastController.create({
      color : 'danger',
      message : "sesion cerrada",
      duration : 1500,
      position : 'top',
      icon: 'log-out-outline'
    })
    toast.present();
    this.router.navigate(['/home']);
    
  }


}
