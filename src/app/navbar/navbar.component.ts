import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})

export class NavbarComponent implements OnInit {
  
  navbarItems = [
    {path: "about-me", linkName: 'About Me'},
    {path: "resume", linkName: 'Resume'},
    {path: "projects", linkName: 'Projects'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(navbarItems: any): void {
    navbarItems.classList.add('disabled');
  }

}
