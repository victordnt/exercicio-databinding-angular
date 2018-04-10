import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval: number;
  @Output("valor") value = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    if (this.interval) clearTimeout(this.interval);
    this.interval = setInterval(()=>
      this.value.emit(Math.floor(Math.random()*100))
    ,1000);

  }
  stopGame(){
    clearTimeout(this.interval);
  }
}
