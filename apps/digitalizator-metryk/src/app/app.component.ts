import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

//class AdresAside
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './theme/config.scss']
})
export class AppComponent {

  constructor(private router: Router) {}
  
  asides = [
    [
      [
        {aside: 0, link: 'explorer-save-restore', srcSVG: 'assets/svgs/aside_explorer-save-restore.svg'},
        {aside: 0, link: 'explorer-create-control', srcSVG: 'assets/svgs/aside_explorer-create-control.svg'},
        {aside: 0, link: 'processing-faster', srcSVG: 'assets/svgs/aside_processing-faster.svg'},
        {aside: 0, link: 'processing-slower', srcSVG: 'assets/svgs/aside_processing-slower.svg'},
        {aside: 0, link: 'browsing-in-tables', srcSVG: 'assets/svgs/aside_browsing-in-tables.svg'},
        {aside: 0, link: 'browsing-in-graphs', srcSVG: 'assets/svgs/aside_browsing-in-graphs.svg'}
      ],
      [
        {aside: 0, link: 'export-to-print', srcSVG: 'assets/svgs/aside_export-to-print.svg'},
        {aside: 0, link: 'export-to-files', srcSVG: 'assets/svgs/aside_export-to-files.svg'},
        {aside: 0, link: 'settings', srcSVG: 'assets/svgs/aside_settings.svg'},
        {aside: 0, link: 'send-error', srcSVG: 'assets/svgs/aside_send-error.svg'},
        {aside: 0, link: 'send-email', srcSVG: 'assets/svgs/aside_send-email.svg'},
        {aside: 0, link: 'catalog-of-archives', srcSVG: 'assets/svgs/aside_catalog-of-archives.svg'}
      ]
    ],
    [
      [
        {aside: 2, link: 'find', srcSVG: 'assets/svgs/aside_find.svg'},
        {aside: 2, link: 'lexicon-anthroponomasticon', srcSVG: 'assets/svgs/aside_lexicon-anthroponomasticon.svg'},
        {aside: 2, link: 'lexicon-toponomasticon', srcSVG: 'assets/svgs/aside_lexicon-toponomasticon.svg'},
        {aside: 2, link: 'lexicon-other-words', srcSVG: 'assets/svgs/aside_lexicon-other-words.svg'}
      ],
      [
        {aside: 2, link: 'mark-structure-in-image', srcSVG: 'assets/svgs/aside_mark-structure-in-image.svg'},
        {aside: 2, link: 'mark-words-in-structure', srcSVG: 'assets/svgs/aside_mark-words-in-structure.svg'},
        {aside: 2, link: 'compare-style-of-the-same-words', srcSVG: 'assets/svgs/aside_compare-style-of-the-same-words.svg'},
        {aside: 2, link: 'show-on-map', srcSVG: 'assets/svgs/aside_show-on-map.svg'}
      ]
    ]
  ];
  isOpenDrawer: [boolean, string, boolean, string] = [true, '', true, ''];

  clickTogleDrawer(L_R: number, panel: string){
    let adres = {};

    this.isOpenDrawer[L_R + 0] = this.isOpenDrawer[L_R + 0] === true ? (this.isOpenDrawer[L_R + 1] === panel) ? false : true : true;

    if(this.isOpenDrawer[L_R + 1] !== panel){
      adres['aside' + L_R] = [ panel ];
      this.router.navigate([{ outlets: adres }], {skipLocationChange: true});
    } 
    this.isOpenDrawer[L_R + 1] = panel;
    // this.router.navigate([{ outlets: this.adres }], { skipLocationChange: true, relativeTo: this.route });
    
  }

  winControl_exit() { alert('winControl_exit'); }
  winControl_hide() { alert('winControl_hide'); }
  winControl_size() { alert('winControl_size'); }
  winControl_info() { alert('winControl_info'); }


  

  public rozmiarEkranu: [number, number];
  otwartyLewySidenav: boolean;
  otwartyPrawySidenav: boolean;
  sposobNaSidenav: string = 'side';
  title: string = 'Digitalizator Metryk';
  
  getBackgroundColorTheme(){
    return '#1C2898';
  }
  

  
}
