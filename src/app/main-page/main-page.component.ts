import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private ElByClassName: ElementRef) { }

  ngOnInit(): void {
  }
  moveLeft(): void {
    const btn: any = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(
      '.novelty__container'
    );
    let a = btn.style.transform;
    let b = +a.replace(/[^\d.-]/g, '');
    console.log(b);
    if(b!=0){
      let c = b + 380;
      console.log(b);
      console.log(c);
      btn.style.transform = `translateX(${c}px)`;
    }
    
  }
  moveRight(): void {
    const btn: any = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(
      '.novelty__container'
    );
    let a = btn.style.transform;
    let b = +a.replace(/[^\d.-]/g, '');

    if (b > -2280) {
      let c = b - 380;
      console.log(b);
      console.log(c);
      btn.style.transform = `translateX(${c}px)`;

    }
    console.log(window
      .getComputedStyle(btn)
      .getPropertyValue('transform'));

  }
}
