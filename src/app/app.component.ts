import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  players = ["Dhoni","Virat"];
  message:string="Hi veryone";
  activity=["Swimming","Breakfast","College","Shopping","dinner"]
  inputValue:string="Initial value";
  // inputValue:
  // todo=[{task:'GYM',venue1:'marena',comleted:false},{task:'Lunch',venue1:'Mess',venue2:'Punjabi ktchen',comleted:false},{task:'shopping',venue1:'Trends',venue2:'BigBazar',comleted:false}]
  todolist=[{task:'BreakFast',comleted:false,venue1:'Mess',venu2:'Froyo'},{task:'Lunch',venue1:'Marena',venue2:'Punjabi Kitchen',completed:false},{task:'Dinner',venue1:'Marena',venue2:'Punjabi Kitchen'},{task:'Swimmimng',completed:false},{task:'Shopping',completed:false}]
}
