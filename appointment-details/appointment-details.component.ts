import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UxService } from '~/app/core/services';
import { AppointmentDetailBaseComponent } from '~/app/open-age/welcome/components/appointment-detail-base.component';
import { AppointmentsService } from '~/app/open-age/welcome/services';
import { RoleService } from '~/app/open-age/core/services';

@Component({
  selector: 'welcome-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent extends AppointmentDetailBaseComponent {

  displayedColumns: string[] = ['name', 'practice', 'location', 'prescriber'];

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

  download() {
    let url
    let tenant = this.auth.currentTenant()
    for (const service of tenant.services) {
      if (service.code == "drive") {
        url = service.url
      }
    }
    url = url + `/docs/appointment-details/${this.properties.id}.pdf?role-key=${this.auth.currentRole().key}`
    const el: HTMLElement = this.alink.nativeElement;
    el['href'] = url;
    el.click();
  }

}
