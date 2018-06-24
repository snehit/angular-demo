import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	str="";
  title = 'ass32';
  name= "Marvellous";
	public fun()
	{
		return "welcome to function";
	}
	public gun()
	{
		this.str="button is click";
	}
}
