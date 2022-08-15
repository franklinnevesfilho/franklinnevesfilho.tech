import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  copyEmail(){
    this.clipboard.copy('');
    
  }


}
