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
   productsOne: any;
   selectedOrders : any;
   products: any | undefined;

   responsiveOptions: any[] = [
       {
           breakpoint: '1024px',
           numVisible: 5
       },
       {
           breakpoint: '768px',
           numVisible: 3
       },
       {
           breakpoint: '560px',
           numVisible: 1
       }
   ];
   constructor(){

   }
  ngOnInit() {
    this.products =  [
      {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'h.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
     
      {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Blue Band',
          description: 'Product Description',
          image: 'f.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 2,
          inventoryStatus: 'LOWSTOCK',
          rating: 3
      },
     
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'd.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'c.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'b.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'A.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }

      ];

      this.productsOne =  [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bentley-logo.png',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'b.jpg',
            description: 'Product Description',
            image: 'bmw-logo.png',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
       
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'Fiat-text-logo.png',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
      {
          id: '1001',
          code: 'nvklal433',
          name: 'Black Watch',
          description: 'Product Description',
          image: 'Mini-logo.png',
          price: 72,
          category: 'Accessories',
          quantity: 61,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 4
      },
      {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Blue Band',
          description: 'Product Description',
          image: 'Mustang-logo.png',
          price: 79,
          category: 'Fitness',
          quantity: 2,
          inventoryStatus: 'LOWSTOCK',
          rating: 3
      },
      {
          id: '1003',
          code: '244wgerg2',
          name: 'Blue T-Shirt',
          description: 'Product Description',
          image: 'porsche-logo.png',
          price: 29,
          category: 'Clothing',
          quantity: 25,
          inventoryStatus: 'INSTOCK',
          rating: 5
      }
  
        ];
  
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