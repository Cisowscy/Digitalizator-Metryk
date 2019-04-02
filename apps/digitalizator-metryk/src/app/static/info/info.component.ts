import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  nazwa:string = 'Digitalizator Metryk (program w trakcie tworzenia)';
  strona:string = 'www.Cisowscy.com/Software/DGM';
  opis: string = '„Digitalizator Metryk” — to program wspomagający półautomatyczne przetwarzanie skanów dokumentów metrykalnych, w nowe, cyfrowe indeksowane dokumenty metrykalne, oraz zarządzanie tymi danymi.';
  cechy: string[] = [
    'Dzięki integralnym, rozszerzalnym słownikom. Spisywanie pojedynczego wyrazu, sprowadza się do wprowadzenia kilku liter i wybrania spośród pasujących, tego słowa.',
    'Opcjonalnie twórz biblioteki rastrowych i wektorowych odzwierciedleń wyrazów. Nieczytelne fragmenty będą prostsze do rozstrzygnięcia, gdy porównasz różne kroje.',
    'Zaoszczędź swój czas, uczestnicząc w rozwoju aplikacji, wysyłając rozszerzenia: słowników, baz ononimów, oraz bibliotek OCR (odzwierciedleń wektorowych wyrazów).',
    'Analizuj swoje zasoby w celu wykrycia, prawdopodobnych błędów skryby/kopisty, oraz konsolidacji prawdopodobnie tożsamych osób, wspominanych w źródłach metrykalnych. ',
    'Eksportuj opracowany zasób, w całości lub wybiórczo, na potrzeby indeksów geneteki czy familysearch, itp., generuj pliki GEDCOM i GRAMPS, oraz dla innych programów.',
    'Generuj raporty: częstotliwości występowania zawodów, antroponimów, dzietności, śmiertelności, długości pożycia, piramid demograficznych, mapy występowania nazwisk itp.',
    'Dobrowolnie, jeżeli opracowanie, nie posiada znamion prywatnego zasobu, możesz opublikować całość lub część opracowania, do publicznego zasobu Digitalizatora Metryk.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
