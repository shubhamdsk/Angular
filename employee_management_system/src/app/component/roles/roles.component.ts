import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponse, IRole } from '../../model/interface/Role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  http = inject(HttpClient);
  isLoader: boolean = true;
  roleList: IRole[] = [];
  // old way
  // constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<ApiResponse>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res: ApiResponse) => {
      this.roleList = res.data;
      this.isLoader = false;
    }
    );
  }

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
