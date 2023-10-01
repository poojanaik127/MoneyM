import { Component,OnInit,Renderer2,ElementRef } from '@angular/core';

// declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private subMenu:HTMLElement|null;

  constructor(){
    this.subMenu= document.getElementById("subMenu");
}

ngOnInit()
{
  this.subMenu=document.getElementById("subMenu");
}
  
  
// for showing the sublist of profile
toggleMenu()
{
  console.log(this.subMenu);
  if(this.subMenu){

  this.subMenu.classList.toggle("open-menu");
}

}
}


