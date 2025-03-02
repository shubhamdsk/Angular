import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponse, IDesignation } from '../../model/interface/Role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignation[] = [];
  isLooader: boolean = true
  ngOnInit(): void {
    this.masterService.getDesignation().subscribe({
      next: (result: ApiResponse) => {
        this.designationList = result.data;
        this.isLooader = false;
      },
      error: (error) => {
        this.isLooader = false;
        alert(error.message);
      }
    })
  }
  masterService = inject(MasterService)
}
