import { Component, OnInit } from '@angular/core';
import { MenuItem,MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'Cars4u';
  products : any;
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    
  this.products=[{code :'aaa',name: 'aaa0',category:'aaaa',quantity:'aa'}]
  }
}
