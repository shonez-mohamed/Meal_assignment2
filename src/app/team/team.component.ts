import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-team',
  imports: [ChildComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
   myDescr:string="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam, tempore explicabo praesentium repellat commodi cumque nihil est modi ipsam itaque doloremque, assumenda dolorum veniam sequi illo corporis excepturi soluta eligendi molestias, et quae dolore odit doloribus? Corrupti inventore beatae odio sint reiciendis iusto debitis repellendus magni illo officiis error dicta dignissimos laboriosam, tenetur ab impedit, consectetur voluptatum omnis quibusdam rem deserunt. Totam expedita incidunt quis iste, consequuntur ratione atque blanditiis, eum in veritatis non eligendi? Nulla asperiores, esse tempore aliquam libero sequi, quibusdam distinctio voluptates, modi dolores vel a? Cumque rem vel libero natus distinctio fugiat consectetur aperiam voluptatem placeat"
  
  

}
