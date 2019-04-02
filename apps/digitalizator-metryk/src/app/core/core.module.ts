import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {
  Aside0ExplorerSaveRestoreComponent,
  Aside0ExplorerCreateControlComponent,
  Aside0ProcessingFasterComponent,
  Aside0ProcessingSlowerComponent,
  Aside0BrowsingInTablesComponent,
  Aside0BrowsingInGraphsComponent,
  Aside0ExportToPrintComponent,
  Aside0ExportToFilesComponent,
  Aside0SettingsComponent,
  Aside0SendErrorComponent,
  Aside0SendEmailComponent,
  Aside0CatalogOfArchivesComponent,
  Aside2FindComponent,
  Aside2LexiconAnthroponomasticonComponent,
  Aside2LexiconToponomasticonComponent,
  Aside2LexiconOtherWordsComponent,
  Aside2MarkStructureInImageComponent,
  Aside2MarkWordsInStructureComponent,
  Aside2CompareStyleOfTheSameWordsComponent,
  Aside2ShowOnMapComponent,
  AsideBlankComponent
} from './aside';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Aside0ExplorerSaveRestoreComponent,
    Aside0ExplorerCreateControlComponent,
    Aside0ProcessingFasterComponent,
    Aside0ProcessingSlowerComponent,
    Aside0BrowsingInTablesComponent,
    Aside0BrowsingInGraphsComponent,
    Aside0ExportToPrintComponent,
    Aside0ExportToFilesComponent,
    Aside0SettingsComponent,
    Aside0SendErrorComponent,
    Aside0SendEmailComponent,
    Aside0CatalogOfArchivesComponent,
    Aside2FindComponent,
    Aside2LexiconAnthroponomasticonComponent,
    Aside2LexiconToponomasticonComponent,
    Aside2LexiconOtherWordsComponent,
    Aside2MarkStructureInImageComponent,
    Aside2MarkWordsInStructureComponent,
    Aside2CompareStyleOfTheSameWordsComponent,
    Aside2ShowOnMapComponent,
    AsideBlankComponent
  ],
  exports: [
    Aside0ExplorerSaveRestoreComponent,
    Aside0ExplorerCreateControlComponent,
    Aside0ProcessingFasterComponent,
    Aside0ProcessingSlowerComponent,
    Aside0BrowsingInTablesComponent,
    Aside0BrowsingInGraphsComponent,
    Aside0ExportToPrintComponent,
    Aside0ExportToFilesComponent,
    Aside0SettingsComponent,
    Aside0SendErrorComponent,
    Aside0SendEmailComponent,
    Aside0CatalogOfArchivesComponent,
    Aside2FindComponent,
    Aside2LexiconAnthroponomasticonComponent,
    Aside2LexiconToponomasticonComponent,
    Aside2LexiconOtherWordsComponent,
    Aside2MarkStructureInImageComponent,
    Aside2MarkWordsInStructureComponent,
    Aside2CompareStyleOfTheSameWordsComponent,
    Aside2ShowOnMapComponent,
    AsideBlankComponent
  ]
})
export class CoreModule {}
