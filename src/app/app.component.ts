import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  //language attributes
  private _language: string = "sk";

  //sidebar attributes
  private _opened: boolean;
  private _mode: string;
  private _width: number = 1025;
  private _clickOutsideClose: boolean;

  ngOnInit() {
    this._changeMenuOpenMode(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this._changeMenuOpenMode(window.innerWidth);
  }

  /**
   * change sidebar view/hide
   */
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  /**
   * Close menu on clickRouting - disable at large
   */
  private _menuItemCloseSidebar() {
    if(window.innerWidth < this._width)
    this._opened = !this._opened;
  }

  /**
   * Change menu parameters based on device size
   * @param currWidth width of current view
   */
  private _changeMenuOpenMode(currWidth:number) {
    if (currWidth < this._width) {
      //mobile
      this._mode = "slide";
      this._clickOutsideClose = true;
      this._opened = false;
    } else {
      //desktop
      this._opened = true;
      this._mode = "pull";
      this._clickOutsideClose = false;
    }
  }
}
