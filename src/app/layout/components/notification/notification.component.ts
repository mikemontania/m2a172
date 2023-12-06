import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  dropdownItems = [
    {
      icon: 'fa fa-bell',
      badge: '5',
      badgeColor: 'warning',
      menuClass: 'notifications',
      headerClass: 'notifications-header',
      title: 'Notifications',
      items: [
        { icon: 'fas fa-check text-success border border-success', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo', time: '6 minutes ago' },
        { icon: 'fas fa-exclamation text-info border border-info', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo', time: 'Today' },
        { icon: 'fas fa-exclamation-triangle text-warning border border-warning', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo', time: 'Yesterday' }
      ],
      viewAllText: 'View all notifications'
    },
    {
      icon: 'fa fa-envelope',
      badge: '7',
      badgeColor: 'success',
      menuClass: 'messages',
      headerClass: 'messages-header',
      title: 'Messages',
      items: [
        { icon: 'fa fa-user', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo', time: '2 hours ago' },
        { icon: 'fa fa-user', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo', time: 'Yesterday' },
        { icon: 'fa fa-user', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo', time: '3 days ago' }
      ],
      viewAllText: 'View all messages'
    },
    {
      icon: 'fa fa-cog',
      badge: '',
      badgeColor: '',
      menuClass: '',
      headerClass: '',
      title: '',
      items: [
        { icon: 'fa fa-user', detail: 'My profile' },
        { icon: 'fa fa-question-circle', detail: 'Help' },
        { icon: 'fa fa-cogs', detail: 'Settings' }
      ],
      viewAllText: ''
    },
    {
      icon: 'fa fa-power-off',
      badge: '',
      badgeColor: '',
      menuClass: '',
      headerClass: '',
      title: '',
      items: [
        { icon: 'fa fa-sign-out-alt', detail: 'Logout' }
      ],
      viewAllText: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
