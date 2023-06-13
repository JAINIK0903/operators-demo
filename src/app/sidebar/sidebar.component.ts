//Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public isSelected: boolean = false;
  public menuItems = [
    { label: "of", link: 'of' },
    { label: 'from', link: '/from' },
    { label: 'map', link: '/map' },
    { label: 'merge', link: '/merge' },
    { label: 'combineLatest', link: '/combineLatest' },
    { label: 'concatwith', link: '/concatwith' },
    { label: 'concatmap', link: '/concatmap' },
    { label: 'mergemap', link: '/mergemap' },
    { label: 'switchmap', link: '/switchmap' },
    { label: 'takeuntil', link: '/takeuntil' },
    { label: 'forkjoin', link: '/forkjoin' },
    { label: 'sharereplay', link: '/sharereplay' },
  ];
  public openSidebar = (): void => {
    document.getElementById('mySidebar')!.style.width = '250px';
    document.getElementById('main')!.style.marginLeft = '250px';
    this.isSelected = true;
  };

  public closeSidebar = (): void => {
    document.getElementById('mySidebar')!.style.width = '0';
    document.getElementById('main')!.style.marginLeft = '0';
    this.isSelected = false;
  };
}
