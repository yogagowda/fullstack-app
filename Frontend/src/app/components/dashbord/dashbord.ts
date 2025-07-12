import { Component } from '@angular/core';
import { TopNav } from '../top-nav/top-nav'; 
import{About} from '../about/about'
import{CommonlyAskedQuestions} from '../commonly-asked-questions/commonly-asked-questions'
import{Feedback} from '../feedback/feedback'
import{Blogs}from '../blogs/blogs'

@Component({
  selector: 'app-dashbord',
  imports: [About,CommonlyAskedQuestions,Feedback,Blogs],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.scss'
})
export class Dashbord {

}
