import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  monObservable: Observable<string>;
  currentImage: string;
  mesImages = [
    'as.jpg',
    'cv.png',
    '404.png',
    'zizou.png'
  ];
  constructor() { }

  ngOnInit(): void {
    this.monObservable = new Observable( (observer) => {
      const longueur = this.mesImages.length - 1;
      let i = longueur;
      setInterval(
         () => {
           observer.next(this.mesImages[i]);
           if (i > 0) {
             i--;
           } else {
             i = longueur;
           }
         }, 1000);
     });
    this.monObservable.subscribe( (r) => {
      this.currentImage = r;
    });
  }

}
