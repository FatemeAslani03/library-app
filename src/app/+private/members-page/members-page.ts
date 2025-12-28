import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{MemberService} from './member-service';
@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class Memberspage implements OnInit {

  message: string = '';

  Save() {
    if (this.state == 'Add') {
      this.memberservice.Add(this.Item);
    }
    else if (this.state == 'Edit') {
      this.memberservice.Edit(this.Item)
    }
    else if (this.state == 'Remove') {
      this.memberservice.Remove(this.Item)
    }
    this.DataRefresh();
    this.state = 'List';
  }
  ngOnInit(): void {
    this.DataRefresh()
  }

  state: string = 'List';

  data: memberitem[] = [];

  Item: memberitem = {
    id:0,
    name: '',
    last: '',
    code:0,
    phone:'',
  }

  memberservice = inject(MemberService);
  DataRefresh() {
    this.data = this.memberservice.List();
  }

  add() {
    this.state = 'Add';
    this.Item = {id:0 , name: '',last:'',code:0, phone:''}
  }

  Edit(member: memberitem) {
    this.Item = { ...member };
    this.state = 'Edit';
  }

  Remove(member: memberitem) {
    this.Item = { ...member };
    this.state = 'Remove';
  }

  cancel() {
    this.state = 'List';
  }

}

export interface memberitem {
    id:number,
    name:string,
    last:string,
    code:number,
    phone:string,
}
