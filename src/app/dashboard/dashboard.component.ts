import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] | undefined;
  Model : any; 
  price: any;
  lang: any;
  activeItem: MenuItem | undefined;
  PurchaseOrderStatus=[
    {label:'code1',value:'id1'},
    {label:'code2',value:'id2'}
    
   ]
   selectedOrders : any;
  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home' },
          { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
          { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
          { label: 'Documentation', icon: 'pi pi-fw pi-file' },
          { label: 'Settings', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
      this.Model= [
        { name: "Audi" },
        { name: "Benz" },
        { name: "Maruthi" },
        { name: "Honda" },
        { name: "BMW" },
      ];
        this.lang=[
          { name: "Audi" },
          { name: "Benz" },
          { name: "Maruthi" },
          { name: "Honda" },
          { name: "BMW" },
        ];
      this.price= [
        { name: '$'+ 10000 },
        { name: '$'+ 10000 },
        { name: '$'+ 10000 },
        { name: '$'+ 10000 },
        { name: '$'+ 10000 },
      ];
  }

  onActiveItemChange(event: MenuItem) {
      this.activeItem = event;
  }

  activateLast() {
      this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
  }
}
