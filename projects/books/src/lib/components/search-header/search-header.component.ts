import { Component } from '@angular/core';
import { ISubject } from 'interfaces/ISubject';

interface ISort {
  name: string,
  icon: string,
  sorter?: () => void
}

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


  ]
  sorters: ISort[] = [
    {
      icon: 'ad-2',
      name: 'Newest'
    },
    {
      icon: 'sort-ascending-2',
      name: 'Price: High-Low'
    },
    {
      icon: 'sort-descending-2',
      name: 'Price: Low-High'
    },
    {
      icon: 'ad-2',
      name: 'Discounted'
    },



  ]
}
