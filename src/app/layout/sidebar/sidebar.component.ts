import { Component, OnInit,   } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebar.service';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SearchComponent } from '../components/search/search.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { NotificationComponent } from '../components/notification/notification.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,NgScrollbarModule, SearchComponent, ProfileComponent , NotificationComponent],
  providers:[SidebarService],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  menus:any = [];
  constructor(public sidebarservice: SidebarService) {
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit() {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu:any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element:any) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu:any) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

}
