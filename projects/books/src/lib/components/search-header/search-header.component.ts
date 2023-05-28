import { Component } from '@angular/core';
import { ISubject } from 'interfaces/ISubject';

@Component({
  selector: 'rb-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {
  subjects: ISubject[] = [
    {
      name: 'All',
      icon: 'ti-circles'
    },
    {
      name: 'Programming',
      icon: 'ti-code'
    },
    {
      name: 'Literature',
      icon: 'ti-pencil'
    },
    {
      name: 'History',
      icon: 'ti-wallpaper'
    }
  ]}
