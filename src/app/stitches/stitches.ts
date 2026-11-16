import { Component } from '@angular/core';
import { listStitches } from '../data/stitches.data';
import { StitchesBlock } from '../stitches-block/stitches-block';

@Component({
  selector: 'app-stitches',
  imports: [StitchesBlock],
  templateUrl: './stitches.html',
  styleUrl: './stitches.css',
})
export class Stitches {
  stitchesList = listStitches;
}
