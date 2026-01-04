import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  imports: [CommonModule],
  templateUrl: './progress-bar.html',
  styleUrls: ['./progress-bar.css'],
})
export class ProgressBar {

  @Input() label = '';
  @Input() percentage: number | string = 0;
  @Input() img = '';

  // animation only on initial load
  animate = true;

  get pct(): number {
    const n = Number(this.percentage) || 0;
    return Math.max(0, Math.min(100, Math.round(n)));
  }

  get duration(): string {
    const d = 0.6 + (this.pct / 100) * 0.9; // 0.6s -> 1.5s
    return `${d}s`;
  }

}
