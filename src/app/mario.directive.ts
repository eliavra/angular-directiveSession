import {HostListener, Directive } from '@angular/core';


@Directive({
  selector: '[appMario]'
})
export class MarioDirective {

  constructor() {
    this.sound = new Audio('');
   }

private sound;
private marioData = {
    song: 'https://www.myinstants.com/media/sounds/untitled_3.mp3',
    image: 'https://upload.wikimedia.org/wikipedia/he/a/a9/MarioNSMBUDeluxe.png',
    color: '#E52521'
  };

@HostListener('mouseenter') onMouseEnter()
{
  this.sound.play();
}

@HostListener('mouseleave') onMouseLeave()
{
  this.sound.stop();
}
}