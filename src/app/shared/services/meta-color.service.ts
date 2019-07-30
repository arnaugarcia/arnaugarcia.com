import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MetaColorService {

  changeThemeColor(color: string) {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor.setAttribute('content', color);
  }

}
