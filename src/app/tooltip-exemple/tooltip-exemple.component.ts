import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-exemple',
  templateUrl: './tooltip-exemple.component.html',
  styleUrls: ['./tooltip-exemple.component.css']
})
export class TooltipExempleComponent {

  public visible = false;
  public mouse = {x:0, y:0}

  alteraPosicaoTooltip(x: number, y: number){
    this.mouse = {x, y}
  }

  exibeTooltip(){
    this.visible = true;
  }
  escondeTooltip(){
    this.visible = false;
  }
}
