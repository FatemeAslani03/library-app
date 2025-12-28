import { Injectable } from '@angular/core';
import { memberitem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private Data: memberitem[] = [
    { id: 1, name: 'فاطمه', last: 'اصلانی', phone: '09912223020', code:3861234567},
    { id: 2, name: 'حدیث', last: 'شکوفه', phone: '09915753020', code:3865534567},
    { id: 3, name: 'غزل', last: 'احمدی', phone: '09967823020', code:3878234567 },
  ];
  List(): memberitem[] {
    return [...this.Data];
  }
  Add(item: memberitem){
    this.Data.push(item);
  }

  Edit(item: memberitem){
    const index = this.Data.findIndex(m => m.id === item.id);
    if (index !== -1) {
      this.Data[index] = { ...item };
      this.Data[index].name = item.name;
      this.Data[index].last = item.last;
      this.Data[index].code = item.code;
      this.Data[index].phone = item.phone;
    }
  }
  Remove(item: memberitem){
    this.Data = this.Data.filter(m => m.id !== item.id);
  }
}