import { Component, OnInit } from '@angular/core';
import { RunEnumService } from 'src/app/enum/run-enum.service';
import { userM } from 'src/app/model/usersM';
import { RunServeService } from 'src/app/services/run-serve.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  list_users: userM[] = [];
  constructor(private runServe: RunServeService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers() {
    await this.runServe.getData(RunEnumService.GET_USERS).subscribe(data => {
      this.list_users = data;
    }, error => {
      console.log(error);

    });
  }

}
