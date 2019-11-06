import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appMario]'
})
export class MarioDirective {

  constructor(private el: ElementRef) {
    this.sound = new Audio('https://vocaroo.com/media_command.php?media=s0aMPUPHtPZX&command=download_mp3');
   }

private sound;
private marioData = {
    song: 'https://www.myinstants.com/media/sounds/untitled_3.mp3',
    image: 'https://www.hbo.com/content/dam/hbodata/series/silicon-valley/characters/s3/gilfoyle-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
    color: '#E52521'
  };

@HostListener('mouseenter') onMouseEnter()
{
    this.sound.play();
    this.addImage();
    this.changeColor(this.marioData.color);
}

@HostListener('mouseleave') onMouseLeave()
{
    this.sound.pause();
    this.sound.currentTime = 0;
    this.removeImage();
    this.changeColor(null);
}

  private addImage() {
    let img = document.createElement("img");
    const el = this.el.nativeElement;
    img.id = 'mario-img';
    img.src = this.marioData.image;
    img.style.cssText = `width: 300px;
                        display: block`;
    el.parentNode.insertBefore(img, el.nextSibling);
  }


  private removeImage() {
    document.getElementById("mario-img").remove();
  }

  private changeColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  

}