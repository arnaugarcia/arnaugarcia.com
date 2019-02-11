import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActiveElementService {

  private currentElementActiveSource = new Subject<string>();

  currentElementActive = this.currentElementActiveSource.asObservable();

  activeItem(item: string): void {
    this.currentElementActiveSource.next(item);
  }

}
