import { Directive,ElementRef ,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#1CAF9A'); // Changes the Highlight Color to #1CAf9A on mouseenter Event
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // // Changes the Highlight Color to null on mouseleaves Event
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
