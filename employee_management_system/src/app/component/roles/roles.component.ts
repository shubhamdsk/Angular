import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  title: string = "Roles";
  currentDate: Date = new Date();
  inputType: string = 'radio';
  inputTypes: string = 'checkbox'

  onSave() {
    alert('Save button clicked');
  }

  onSaves(event: Event) {
    console.log('Save button clicked', event);
  }

  selectedState: string = '';
}
