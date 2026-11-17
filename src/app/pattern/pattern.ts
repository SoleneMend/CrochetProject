import { Component } from '@angular/core';
import { listPatterns } from '../data/pattern.data';
import { PatternBlock } from '../pattern-block/pattern-block';

@Component({
  selector: 'app-pattern',
  imports: [PatternBlock],
  templateUrl: './pattern.html',
  styleUrl: './pattern.css',
})
export class Pattern {
  patternList = listPatterns;
}
