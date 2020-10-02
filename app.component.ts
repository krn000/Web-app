import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { environment } from 'src/environments/environment';
import { NavService, UxService } from './core/services';
import { Entity } from './open-age/core/models/entity.model';
import { EnvironmentService } from './open-age/core/services/environment.service';
import { RoleService } from './open-age/core/services/role.service';
import { Role } from './open-age/directory/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Opos';

  envName: string;

  currentRole: Role;

  currentEntity: Entity;

  sideNavMode = 'side';

  sideNavOpened = true;
  sideBarOpened = true;

  device = 'mobile';

  isLoading = true;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(
    private auth: RoleService,
    private environmentService: EnvironmentService,
    private titleService: Title,
    private router: Router,
    private navService: NavService,
    private uxService: UxService,
    private userIdle: UserIdleService
  ) {
    if (environment.name && environment.name !== 'prod') {
      this.envName = environment.name;
    }
    this.auth.roleChanges.subscribe((role) => {
      this.currentRole = role;
    });

    this.navService.title.subscribe((title) => {
      if (title) {
        this.titleService.setTitle(title);
      } else {
        this.titleService.setTitle('Open Age');
      }
    });

    this.uxService.deviceChanges.subscribe((device) => {
      this.device = device;

      if (device === 'desktop') {
        this.sideNavMode = 'side';
        this.sideNavOpened = true;
      } else {
        this.sideNavMode = 'over';
        this.sideNavOpened = false;
      }
    });

    this.uxService.sideNavShowChanges.subscribe((show) => {
      if (show) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth > 800) {
      this.uxService.setDevice('desktop');
    } else {
      this.uxService.setDevice('mobile');
    }
  }

  ngOnInit(): void {
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => this.auth.logout());
    this.auth.currentIdle().subscribe(() => {
      this.userIdle.resetTimer()
    })
    this.environmentService.get().subscribe((t) => {
      this.isLoading = false;
      if (t.styles) {
        const sheet = document.createElement('STYLE');
        const sheetData = document.createTextNode(t.styles);
        sheet.appendChild(sheetData);
        document.head.appendChild(sheet);
      }
      if (t.level === 'new') {
        this.router.navigate(['home', 'register'], { queryParams: { code: t.code, host: t.host } });
      }
    }, (err) => {
      this.isLoading = false;
      console.error(err);
      return this.router.navigate(['home', 'error'], { queryParams: { code: err.message } });
    });

    this.currentRole = this.auth.currentRole();
    this.device = this.uxService.getDevice();

    if (!this.auth.currentUser()) {
      this.navService.goto('/home/login');
    } else if (!this.auth.currentRole()) {
      this.navService.goto('/home/roles');
    } else {
      // this.navService.goto('/home/dashboard');
    }

    this.currentEntity = new Entity();
    this.onResize(null);
  }
}
