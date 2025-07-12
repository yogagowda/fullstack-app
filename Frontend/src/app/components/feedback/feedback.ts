import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class Feedback implements OnInit{
  constructor(
    private commaomService: CommonService) { }
    items:any

  ngOnInit() {
    this.commaomService.getStarRating().subscribe((data:any)=>{
      this.items=data.list
      this.chunkItems(3, this.items)
      
    })
    
    
    
  }

  // items = [
  //   {
  //     title: 'Exceptional Service!',
  //     text: 'Exceptional branding service! I was thoroughly impressed and delighted...',
  //     rating: 5,
  //     reviewer: {
  //       name: 'Wade Warren',
  //       location: 'USA, California',
  //       avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  //     }
  //   },
  //   {
  //     title: 'Super Quick Delivery',
  //     text: 'Delivered within hours! Very impressed.',
  //     rating: 4,
  //     reviewer: {
  //       name: 'Jane Doe',
  //       location: 'UK, London',
  //       avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  //     }
  //   },
  //   {
  //     title: 'Super Quick Delivery',
  //     text: 'Delivered within hours! Very impressed.',
  //     rating: 4,
  //     reviewer: {
  //       name: 'Jane Doe',
  //       location: 'UK, London',
  //       avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  //     }
  //   }, {
  //     title: 'Super Quick Delivery',
  //     text: 'Delivered within hours! Very impressed.',
  //     rating: 4,
  //     reviewer: {
  //       name: 'Jane Doe',
  //       location: 'UK, London',
  //       avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  //     }
  //   }, {
  //     title: 'Super Quick Delivery',
  //     text: 'Delivered within hours! Very impressed.',
  //     rating: 4,
  //     reviewer: {
  //       name: 'Jane Doe',
  //       location: 'UK, London',
  //       avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  //     }
  //   }, {
  //     title: 'Super Quick Delivery',
  //     text: 'Delivered within hours! Very impressed.',
  //     rating: 4,
  //     reviewer: {
  //       name: 'Jane Doe',
  //       location: 'UK, London',
  //       avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  //     }
  //   },
  //   // Add more items...
  // ];

  chunkedItems: any[][] = [];



  chunkItems(size: number, items: any) {
    this.chunkedItems = [];
    for (let i = 0; i < items.length; i += size) {
      this.chunkedItems.push(items.slice(i, i + size));
    }
  }

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }

}
