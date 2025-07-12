import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class Blogs implements OnInit{
  awaeds:any
  ngOnInit(): void {
   this.chunkAward(3,this.awards)
  }
 




 awards = [
    {
      image: '/Images/Blog Img 1.png',
      title: 'Wins 2023 good design<br>London Award',
      link: '#'
    },
    {
      image: '/Images/Blog Img 2.png',
      title: 'Top Innovation in UX<br>Paris Awards',
      link: '#'
    },
    {
      image: '/Images/Blog Img 3.png',
      title: 'Best Startup 2024<br>Global Tech Forum',
      link: '#'
    },
    {
      image: '/Images/Blog Img 1.png',
      title: 'UI Excellence<br>Dubai 2024',
      link: '#'
    }
  ];

  chunkedAwards: any[] = [];
  chunkAward(size: number, items: any) {
    for (let i = 0; i < items.length; i += size) {
      this.chunkedAwards.push(items.slice(i, i + size));
    }
  }
}
