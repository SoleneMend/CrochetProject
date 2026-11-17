import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pattern } from '../models/pattern.model';

@Component({
  selector: 'app-pattern-block',
  imports: [RouterLink],
  templateUrl: './pattern-block.html',
  styleUrl: './pattern-block.css',
})
export class PatternBlock {
  @Input() content! : pattern;
  @Input() index! : number;
}
