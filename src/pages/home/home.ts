import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private scramble:string = "";
  private scramblelength: number = 12;

  public moves:any = ["U", "L", "F", "R", "B", "D"];

  constructor(public navCtrl: NavController) {

  }

  scrambleclick(){
    this.scramble = "";
    let movelist = [];
    for (let i = 0; i < this.scramblelength; i ++){
      var movenumber = Math.floor((Math.random() * this.moves.length));
      var move = this.moves[movenumber];
      movelist.push(move);
    }

    this.scramble = movelist.join(" ");
    console.log(this.scramble);
  }  

}
