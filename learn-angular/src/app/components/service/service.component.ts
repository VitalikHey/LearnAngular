import { Component, OnInit } from '@angular/core';
import { MyServer } from './my-server.service';

@Component({
  selector: 'service-component',
  templateUrl: 'service.component.html',
})
export class ServiceComponent implements OnInit {
  constructor(private PostService: MyServer) {}

  ngOnInit(): void {
    this.PostService.getApiPosts().subscribe((res) => console.log(res));
  }

  protected readonly MyServer = MyServer;
}
