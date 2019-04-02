import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
} from './core/aside';
import { InfoComponent } from './static/info/info.component';

const routes: Routes = [
{ path: '',  component: AsideBlankComponent, outlet: 'aside0' },
{ path: '',  component: AsideBlankComponent, outlet: 'aside2' },
{ path: '',  component: InfoComponent, outlet: 'main' },
{ path: 'explorer-save-restore', component: Aside0ExplorerSaveRestoreComponent, outlet: 'aside0' },
{ path: 'explorer-create-control', component: Aside0ExplorerCreateControlComponent, outlet: 'aside0' },
{ path: 'processing-faster', component: Aside0ProcessingFasterComponent, outlet: 'aside0' },
{ path: 'processing-slower', component: Aside0ProcessingSlowerComponent, outlet: 'aside0' },
{ path: 'browsing-in-tables', component: Aside0BrowsingInTablesComponent, outlet: 'aside0' },
{ path: 'browsing-in-graphs', component: Aside0BrowsingInGraphsComponent, outlet: 'aside0' },
{ path: 'export-to-print', component: Aside0ExportToPrintComponent, outlet: 'aside0' },
{ path: 'export-to-files', component: Aside0ExportToFilesComponent, outlet: 'aside0' },
{ path: 'settings', component: Aside0SettingsComponent, outlet: 'aside0' },
{ path: 'send-error', component: Aside0SendErrorComponent, outlet: 'aside0' },
{ path: 'send-email', component: Aside0SendEmailComponent, outlet: 'aside0' },
{ path: 'catalog-of-archives', component: Aside0CatalogOfArchivesComponent, outlet: 'aside0' },
{ path: 'find', component: Aside2FindComponent, outlet: 'aside2' },
{ path: 'lexicon-anthroponomasticon', component: Aside2LexiconAnthroponomasticonComponent, outlet: 'aside2' },
{ path: 'lexicon-toponomasticon', component: Aside2LexiconToponomasticonComponent, outlet: 'aside2' },
{ path: 'lexicon-other-words', component: Aside2LexiconOtherWordsComponent, outlet: 'aside2' },
{ path: 'mark-structure-in-image', component: Aside2MarkStructureInImageComponent, outlet: 'aside2' },
{ path: 'mark-words-in-structure', component: Aside2MarkWordsInStructureComponent, outlet: 'aside2' },
{ path: 'compare-style-of-the-same-words', component: Aside2CompareStyleOfTheSameWordsComponent, outlet: 'aside2' },
{ path: 'show-on-map', component: Aside2ShowOnMapComponent, outlet: 'aside2' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
