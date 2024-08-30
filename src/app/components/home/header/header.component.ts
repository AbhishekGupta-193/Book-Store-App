import { Component, inject, OnInit ,HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/BookContainerServices/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLoginCard1 = false;
  showLoginCard2 = false;
  header: HTMLElement | null = null;
  sticky: number = 0;


  searchText: string = '';
  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit(): void {
    this.header = document.getElementById('myHeader');
    if (this.header) {
      this.sticky = this.header.offsetTop;
    }
    
   }
   @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > this.sticky) {
      this.header?.classList.add('sticky');
    } else {
      this.header?.classList.remove('sticky');
    }
  }

  toggleLoginCard() {
    if (localStorage.getItem('accessToken') == null) {
      this.showLoginCard1 = !this.showLoginCard1;
      this.showLoginCard2 = false
    } else {
      this.showLoginCard1 = false;
      this.showLoginCard2 = !this.showLoginCard2;
    }
  }

  navigateToLogin() {
    this.router.navigate(['/loginSignup']);
  }

  onSearch() {
    console.log(this.searchText);
    this.dataService.sendData(this.searchText);
  }

  logoutmethod() {
    localStorage.removeItem('accessToken');
    this.toggleLoginCard();
    this.showLoginCard1 = true;
  }

}

