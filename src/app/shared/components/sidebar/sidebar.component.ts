import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private sharedService: SharedService) { }

  get tags() {
    return this.sharedService.gifsWanted
  }
}
