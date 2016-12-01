import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private scramble:string = "";
  private scramblelength: number = 8;

  public moves:any = ["U", "L", "F", "R", "B", "D"];

  constructor(public navCtrl: NavController) {

  }

  scrambleclick(){
    for (var i; i < this.scramblelength; i ++){
      var move = this.moves[Math.floor((Math.random() * this.moves.length))];
    }
  }  

}
