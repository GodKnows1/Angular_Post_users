import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post>=new EventEmitter();
  @Output() updatedPost: EventEmitter<Post>=new EventEmitter();
  @Input() currentPost!: Post;
  @Input() isEdit!:boolean;
  @Input() users!:any;

  constructor(private postService:PostService) {   }

  ngOnInit(): void {
  }

  addPost(title:string,body:string){
    if(!title || !body){
      alert('Please add posts');
    } else{
      this.postService.savePost({title,body} as Post).subscribe(post=>{
        this.newPost.emit(post);
      })
    }
  }

  updatePost(title:string, body:string){
    this.postService.updatePost(this.currentPost).subscribe(post=>{
      console.log(post);
      this.isEdit=false;
      this.updatedPost.emit(post);
    });
  }

}
