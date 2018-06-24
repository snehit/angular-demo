import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class='main_div'><div class='first_div'>
		<input type='text' name='class_name' value='Marvellous Infosystems' class='class_name'>
	</div>
	<div>
		<input type='text' name='class_name1' value='Marvellous Infosystems' class='class_name1'>
	</div> </div>`,
	styles: ['.main_div{ text-align: center; }.first_div{padding-bottom:20px;} .class_name1{color:#0a07ff;font-size: 22px;}']
  
})
export class AppComponent {
  title = 'fourthApp';
}
