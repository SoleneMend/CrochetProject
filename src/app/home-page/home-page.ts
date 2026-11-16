import { Component } from '@angular/core';
import { HeaderBlock } from '../header-block/header-block';
import { FooterBlock } from '../footer-block/footer-block';
import { Pattern } from '../pattern/pattern';
import { Stitches } from '../stitches/stitches';

@Component({
  selector: 'app-home-page',
  imports: [HeaderBlock, FooterBlock, Stitches, Pattern],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
