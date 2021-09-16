import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { RequiredValidator } from '@angular/forms';


const dict_videos = [{
  title: 'Cute kitten',
  src: '/assets/images/cat-01.jpg'
},
{
  title: 'Kitten on the tree',
  src: '/assets/images/cat-05.png'
},
{
  title: 'Serious cat',
  src: '/assets/images/cat-03.jpg'
}];

interface VideoItem{
  title:string;
  src:string;
  likes?:number;
}

>>>>>>> 9acacb4 (src files)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
=======
  //template:'<h1> {{N_Name}} Hola a quien tomaras {{full_name()}}<h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-web';
  N_Name = 'Barron';
  full_name(){
    return this.N_Name +" "+ this.title
  }
  abe = "Mete lo que quieras aqui";
  img_name = "/assets/Test.jpg";
  isSpecial = true;
  readonly name = 'Camille Pissarro';
  message = "";
  avatar = '/assets/NataWeb.png';
  onDisplay(){  return true } //  Try changing to true! 
  puppies = ['Schumann', 'Mendelssohn', 'Bach'];
  videos: VideoItem[] =  dict_videos;
  circleColor="green";
  search (searchString:string){
    this.videos = dict_videos.filter(video=>video.title.indexOf(searchString)>= 0);
  }
  // chil component

>>>>>>> 9acacb4 (src files)
}
