import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  statusServer = 'offline';

  constructor() {
    this.statusServer = Math.random() > 0.5 ? 'online' : 'offline';

  }

  ngOnInit() {
  }

  getServerStatus(){
    return this.statusServer;
  }

  getColor() {
    return this.statusServer === 'online' ? 'green' : 'red';
  }
}
