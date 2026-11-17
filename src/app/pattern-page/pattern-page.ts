import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { listPatterns } from '../data/pattern.data';

@Component({
  selector: 'app-pattern-page',
  imports: [RouterLink],
  templateUrl: './pattern-page.html',
  styleUrl: './pattern-page.css',
})
export class PatternPage {

  private route = inject(ActivatedRoute);

  content = listPatterns[0];

  constructor() {
    this.route.paramMap.subscribe(params => {
      const index = Number(params.get('index'));

      if (
        Number.isInteger(index) &&
        index >= 0 &&
        index < listPatterns.length
      ) {
        this.content = listPatterns[index];
      }
    })
  }
}
