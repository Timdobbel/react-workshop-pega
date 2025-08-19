import { createSlide, createSlides, createTopic } from 'wb-slides';

import Agenda from './Welkom/Agenda.mdx';
import Goals from './Welkom/Goals.mdx';

export const slides = createSlides([
  createTopic({
    title: 'Intro',
    slides: [
      createSlide({ title: 'Agenda', component: Agenda }),
      createSlide({ title: 'Goals', component: Goals }),
    ],
  }),
]);
