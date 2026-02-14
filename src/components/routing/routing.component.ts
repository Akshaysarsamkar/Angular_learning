import { Component, OnInit, signal } from '@angular/core';
import { User } from '../../enum/interfaces';
import { RoutingserviceService } from '../../services/route/routingservice.service';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [CommonModule],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent implements OnInit {

  userInfo = signal<User[]>([])

  constructor(private rs: RoutingserviceService, private route: Router) { }

  ngOnInit(): void {
    const data = this.rs.getAllDetails();
    this.userInfo.set(data)
    console.log(this.userInfo);

  }

  seeProfile(id: number) {
    this.route.navigate(['/info'], { queryParams: { userid: id } })
  }

  seeProfileWithRouteParams(id: number) {
    this.route.navigate(['/info', id])
  }



}


