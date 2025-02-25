import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customDirective]'
})
export class CustomDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ffdb18');
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '8px');
  }
}
