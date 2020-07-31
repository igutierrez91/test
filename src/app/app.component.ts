import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication.service';
import { UserService } from './core/user.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-init',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'loginTresCapasSC';
  loading = true;


  constructor(private authorizationSerive: AuthenticationService, private userService: UserService,
    public activatedRoute: ActivatedRoute, private router: Router, private transateService: TranslateService) {

  }

  ngOnInit(): void {
    this.transateService.setDefaultLang('es');
    this.transateService.use('es');
    setTimeout(() => {
      const token = this.activatedRoute.snapshot.paramMap.get('token');
      this.userService.setTokenUser('token');
      this.loading = false;
      this.mockToken(token);
    }, 2500);
  }

  private mockToken(token: string) {
    switch (token) {
      case '8d41cc55-c239-463f-8bf7-060dcebaa5df':
        this.router.navigate(['register']);
        break;
      case '8d41cc55-c239-463f-8bf7-060dcebaa5dg':
        this.router.navigate(['update']);
        break;
      default:
        this.router.navigate(['error']);
        break;
    }
  }


}
