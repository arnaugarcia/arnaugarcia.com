import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MetaColorService {

  changeThemeColor(color: string) {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    if (this.hasDifferentColor(metaThemeColor, color)) {
      metaThemeColor.setAttribute('content', color);
    }
  }

  changeThemeToBlack() {
    this.changeThemeColor('#000000');
  }

  changeThemeToWhite() {
    this.changeThemeColor('#FFFFFF');
  }

  private hasDifferentColor(metaThemeColor, color: string) {
    return metaThemeColor.content !== color;
  }
}
