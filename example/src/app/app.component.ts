import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class StoryComponent {
story={id:100,name:'The Force Awakens'};
color="blue";
}
