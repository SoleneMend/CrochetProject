import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listStitches } from '../data/stitches.data';

@Component({
  selector: 'app-stitches-page',
  imports: [],
  templateUrl: './stitches-page.html',
  styleUrl: './stitches-page.css',
})
export class StitchesPage {
  
  private route = inject(ActivatedRoute);

  content = listStitches[0];

  constructor() {
    this.route.paramMap.subscribe(params => {
      const index = Number(params.get('index'));

      if (
        Number.isInteger(index) &&
        index >= 0 &&
        index < listStitches.length
      ) {
        this.content = listStitches[index];
      }
    });
  }
}
