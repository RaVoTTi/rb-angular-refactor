import { Component } from '@angular/core';

interface IStep {
  stepNumber: number,
  title: string,
  details: string[]
}

@Component({
  selector: 'lib-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  steps : IStep[] = [
    {
      stepNumber: 1,
      title: 'Purchase a summary of a book that pleases your heart.',
      details: [
        'Seeketh a summary that resonates with thy desires.',
        'Obtaineth it through a reputable source, be it a trustworthy merchant or a virtual marketplace.',
      ],
    },
    {
      stepNumber: 2,
      title:
        'Read the summary with utmost attention and grasp the key points presented within.',
      details: [
        "Engage thy mind in the delightful journey of the summary's words.",
        'Absorb the essence of the book through these condensed insights.',
      ],
    },
    {
      stepNumber: 3,
      title:
        'After thou hast read and comprehended the vital points of the book, thou canst undertake an evaluation of the tailor-made summary.',
      details: [
        'Visiteth the section named "my orders" in thy chosen realm of procurement.',
        'Seeketh the button marked "claim" and selecteth it with purpose.',
        'Complete the evaluation, reflecting upon the fundamental aspects and understanding required of the book.',
      ],
    },
    {
      stepNumber: 4,
      title:
        'Once the evaluation is complete, thou shalt receive a generous return of 80% of the total amount invested in the summary.',
      details: [
        'Rejoice, for thy noble efforts shall be rewarded!',
        'The riches thou hast spent on the summary shall be partly restored unto thee, bringing a smile upon thy face.',
      ],
    },
  ];
  constructor(){
    window.onload = function() {
      window.scrollTo(0, 0);
  };
  }
}
