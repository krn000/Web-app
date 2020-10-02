import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UxService } from '~/app/core/services';
import { AppointmentListBaseComponent } from '~/app/open-age/welcome/components/appointment-list-base.component';
import { AppointmentsService } from '~/app/open-age/welcome/services';
import { RoleService } from '~/app/open-age/core/services';

@Component({
  selector: 'welcome-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent extends AppointmentListBaseComponent {
  @Input()
  view: 'table' | 'list' | 'grid' = 'table';

  tableColumns = ['prescriber', 'patient', 'topic', 'time', 'zoomId', 'actions']

  @ViewChild('alink')
  alink: ElementRef<HTMLElement>;

  constructor(
    service: AppointmentsService,
    uxService: UxService,
    private auth: RoleService
  ) {
    super(service, uxService);
  }

  copyItemValue(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  download(item) {
    let url
    let tenant = this.auth.currentTenant()
    for (const service of tenant.services) {
      if (service.code == "drive") {
        url = service.url
      }
    }
    url = url + `/docs/appointment-details/${item.id}.pdf?role-key=${this.auth.currentRole().key}`
    const el: HTMLElement = this.alink.nativeElement;
    el['href'] = url;
    el.click();
  }

}
