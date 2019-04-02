import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {FormsModule} from '@angular/forms';
import { MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  } from '@angular/material';
  import { A11yModule } from '@angular/cdk/a11y';
  import { CdkAccordionModule } from '@angular/cdk/accordion';
  import { BidiModule } from '@angular/cdk/bidi';
  import { LayoutModule } from '@angular/cdk/layout';
  import { OverlayModule } from '@angular/cdk/overlay';
  import { PlatformModule } from '@angular/cdk/platform';
  import { ScrollDispatchModule } from '@angular/cdk/scrolling';
  import { CdkStepperModule } from '@angular/cdk/stepper';
  import { CdkTableModule } from '@angular/cdk/table';
  import { CdkTreeModule } from '@angular/cdk/tree';

  import { MdePopoverModule } from '@material-extended/mde';
  import { FlexLayoutModule } from '@angular/flex-layout';
import { AsideHeaderComponent } from './aside-header/aside-header.component';


@NgModule({
  imports: [
    
    CommonModule,

    FormsModule,

    A11yModule,
    BidiModule,
    LayoutModule,
    OverlayModule,
    PlatformModule,
    ScrollDispatchModule,
    CdkAccordionModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FlexLayoutModule,
    MdePopoverModule
  ],
  declarations: [AsideHeaderComponent],
  exports: [
    FormsModule,
      
      A11yModule,
      BidiModule,
      LayoutModule,
      OverlayModule,
      PlatformModule,
      ScrollDispatchModule,
      CdkAccordionModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatLineModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatOptionModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatPseudoCheckboxModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatStepperModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,

      MdePopoverModule,
      FlexLayoutModule,
      AsideHeaderComponent,
  ]
})
export class SharedModule { }
