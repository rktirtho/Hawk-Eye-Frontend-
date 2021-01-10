import { Component, OnInit } from '@angular/core';
import { SecurityOfficerService } from '../services/security-officer.service';
import { SecurityOfficer } from '../model/sucurityOfficer';

@Component({
  selector: 'app-security-officer',
  templateUrl: './security-officer.component.html',
  styleUrls: ['./security-officer.component.css']
})
export class SecurityOfficerComponent implements OnInit {
  securityOff: SecurityOfficer[];

  constructor(private secOffi: SecurityOfficerService) { }

  ngOnInit(): void {
    this.getAllSecurityOfficer()
  }
  private getAllSecurityOfficer() {
    this.secOffi.getAllSecurity().subscribe(data => {
      console.log(data.length)
      this.securityOff = data;
    });
  }
}
