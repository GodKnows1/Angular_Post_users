import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:id',component:PostComponent}
];

@NgModule({
  exports :[RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
