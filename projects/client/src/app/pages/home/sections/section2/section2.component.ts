import { Component } from '@angular/core';

interface IFeature {
  title: string,
  icon: string,
  description: string
}

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
})
export class Section2Component {

  featureItems: IFeature[] =

    [
      {
        "title": "Time efficiency",
        "icon": "ti-clock-cancel",
        "description": "Summarized books allow you to grasp the main ideas and concepts of a book in a fraction of the time it would take to read the entire work."
      },
      {
        "title": "Quick access to knowledge",
        "icon": "ti-mail-fast",
        "description": "By reading summaries, you can quickly acquire key information from various books, expanding your knowledge in a shorter period."
      },
      {
        "title": "Enhanced comprehension",
        "icon": "ti-topology-complex",
        "description": "Summaries distill complex ideas into concise explanations, making it easier to understand and retain the main concepts of a book."
      },
      {
        "title": "Wide range of topics",
        "icon": "ti-world",
        "description": "Reading summarized books enables you to explore a diverse range of subjects and authors, exposing you to a broader spectrum of knowledge."
      },
      {
        "title": "Efficient selection process",
        "icon": "ti-click",
        "description": "Summaries help you evaluate whether a book aligns with your interests and needs, allowing you to make informed decisions about which books to pursue further."
      },

      {
        "title": "Motivational Boost for the Time-strapped",
        "icon": "ti-rocket",
        "description": "The ultimate motivational method that will make you want to finish the book as quickly as possible. Get ready for a surge of energy and determination as you dive into these inspiring pages!"
        },
      {
        "title": "Improved memory retention",
        "icon": "ti-device-sd-card",
        "description": "Summaries often focus on the most important points, making them effective tools for reinforcing your understanding and recall of key ideas."
      },
      {
        "title": "Better time management",
        "icon": "ti-alarm",
        "description": "By incorporating summarized books into your reading routine, you can allocate your reading time more effectively and cover a wider range of topics."
      },
      {
        "title": "Exploratory reading",
        "icon": "ti-compass",
        "description": "Summaries serve as a gateway to new ideas and concepts, enabling you to explore a variety of subjects before deciding which ones to delve into more deeply."
      },
      {
        "title": "Supplement to book discussions",
        "icon": "ti-message-dots",
        "description": "Reading summaries can provide a quick overview of a book's content, allowing you to participate in discussions even if you haven't read the complete work."
      },
      {
        "title": "Broadened perspective",
        "icon": "ti-eye",
        "description": "Summarized books expose you to different perspectives, theories, and arguments, broadening your understanding of various subjects."
      },
      {
        "title": "Convenient reference tool",
        "icon": "ti-book",
        "description": "Summaries serve as a handy reference for revisiting key points and concepts without having to reread the entire book."
      },
      {
        "title": "Accessibility for busy individuals",
        "icon": "ti-briefcase",
        "description": "For those with busy schedules, reading summarized books offers an opportunity to continue learning and engaging with new ideas, even with limited time available."
      },
      {
        "title": "Improved critical thinking",
        "icon": "ti-brain",
        "description": "Reading book summaries can enhance your critical thinking skills by exposing you to different arguments and viewpoints. It allows you to analyze and evaluate the main ideas presented in the book, fostering a deeper understanding of the subject matter."
        }
    ]



}
