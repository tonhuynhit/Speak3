import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { SampleItem } from './sample-item';

import { SciAuthService } from '@speak/ng-sc/auth';
import { SciLogoutService } from '@speak/ng-sc/logout';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html'
})
export class TaskPageComponent {
  static sampleItemId = '588AB906-6191-4545-9566-06988CA6219C';

  objectKeys = Object.keys;

  response: any;
  sampleItem: SampleItem;

  isEditing = false;
  isErrorResponse = false;
  isLoading = false;

  constructor(
    public authService: SciAuthService,
    public logoutService: SciLogoutService,
    public itemService: ItemService
  ) { }

  fetchItem() {
    this.isLoading = true;
    this.isErrorResponse = false;
    this.itemService.fetchItem(TaskPageComponent.sampleItemId).subscribe({
      next: data => {
        this.response = data;
        this.sampleItem = data as SampleItem;
        this.isLoading = false;
      },
      error: error => {
        this.response = error;
        this.sampleItem = null;
        this.isErrorResponse = true;
        this.isLoading = false;
      }
    });
  }

  saveItem() {
    this.itemService.saveItem(TaskPageComponent.sampleItemId, this.sampleItem).subscribe({
      next: result => { },  // success
      error: error => { }   // fail silently
    });
  }

  edit() {
    this.isEditing = true;
  }

  close() {
    this.isEditing = false;
  }

  isEditDisabled() {
    return this.isLoading || this.isErrorResponse || !this.sampleItem;
  }
}
