import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { NavController } from 'ionic-angular';
import * as moment from 'moment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private scramble:string = "";
  private scramblelength: number = 12;
  private ticks:number = 0;
  private filteredtick:string = "";
  private subscription:any;
  public moves:any = ["U", "L", "F", "R", "B", "D"];

  constructor(public navCtrl: NavController) {
  }

  starttimer(){
    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe(t => {
      this.ontick(t);
    });
  }

  stoptimer() {
    this.subscription.unsubscribe();
  }

  ontick(t) {
    this.filteredtick = moment("2015-01-01").startOf('day')
    .seconds(t)
    .format('H:mm:ss');
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
