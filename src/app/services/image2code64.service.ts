import { Injectable } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Image2code64Service {
  constructor() {}

  public img64Encoder(file: File) {
    return new Observable<any>((subs: Subscriber<any>) => {
      this.fileEncoder(subs, file);
    });
  }

  private fileEncoder(subscriber: Subscriber<any>, file: File) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
