import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .oddNumber {
        color: red;
      }

      .evenNumber {
        color: green;
      }
    `
  ]
})
export class DirectivesComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  fruits = ['Apple', 'Orange', 'Banana'];

  ngClassContent = `
.oddNumber {
  color: red;
}
.evenNumber {
  color: green;
}
`;
  ngStyleContent = `<span [ngStyle]="{backgroundColor: number % 2 !== 0 ? 'red' : 'green', padding: '2px'}">{{ number }}</span>`;
  ngStyleCode = `<span [ngClass]="{oddNumber: number % 2 !== 0, evenNumber: number % 2 === 0}">{{ number }}</span>`;
  customDirectiveContent = `import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customDirective]'
})
export class CustomDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ffdb18');
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '8px');
  }
}`;
}
