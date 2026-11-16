import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { stitches } from '../models/stitches.model';

@Component({
  selector: 'app-stitches-block',
  imports: [RouterLink],
  templateUrl: './stitches-block.html',
  styleUrl: './stitches-block.css',
})
export class StitchesBlock {
  @Input() content! : stitches;
  @Input() index! : number;
}
