import { FeedItem, Course, UserStats, Badge } from './types';

export const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    type: 'video',
    subject: 'maths',
    title: 'La Dérivée Intuitive',
    content: 'Découvre comment la pente d\'une courbe définit la variation instantanée. Un concept clé pour la Terminale S.',
    author: 'Jean-Math',
    likes: 1240,
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: '2',
    type: 'formula',
    subject: 'physics',
    title: 'Relativité Restreinte',
    content: 'E=mc² : L\'énergie est égale à la masse multipliée par le carré de la célérité. Une révolution signée Einstein.',
    author: 'Albert E.',
    likes: 3500,
  },
  {
    id: '3',
    type: 'funfact',
    subject: 'chemistry',
    title: 'L\'Or est Inoxydable',
    content: 'Sais-tu pourquoi l\'or est si précieux ? Sa structure atomique le rend presque totalement insensible à l\'oxydation.',
    author: 'Chemix',
    likes: 890,
  },
  {
    id: '4',
    type: 'method',
    subject: 'maths',
    title: 'Loi Binomiale',
    content: 'Comment calculer la probabilité de k succès parmi n expériences indépendantes. Un must pour le Bac.',
    author: 'Proba-Pro',
    likes: 450,
  },
  {
    id: '5',
    type: 'video',
    subject: 'physics',
    title: 'Les Lois de Kepler',
    content: 'Comprendre le mouvement des planètes autour du Soleil. Les orbites ne sont pas des cercles !',
    author: 'Astro-Guy',
    likes: 1560,
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: '6',
    type: 'video',
    subject: 'physics',
    title: 'Pendule Élastique',
    content: 'Étude du mouvement d\'un système masse-ressort. Énergie cinétique et potentielle.',
    author: 'Equipe SX',
    likes: 2450,
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  },
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'maths-t',
    subject: 'maths',
    title: 'Mathématiques Terminale',
    chaptersCount: 18,
    exercisesCount: 200,
    progress: 45,
    chapters: [
      { id: 'm1', title: 'Suites numériques', description: 'Limites, récurrence et suites géométriques.', isCompleted: true },
      { id: 'm2', title: 'Fonctions exponentielles', description: 'Propriétés, limites et dérivées.', isCompleted: true },
      { id: 'm3', title: 'Nombres complexes', description: 'Forme algébrique et géométrique.', isCompleted: false },
    ],
  },
  {
    id: 'phys-t',
    subject: 'physics',
    title: 'Physique Terminale',
    chaptersCount: 12,
    exercisesCount: 150,
    progress: 30,
    chapters: [
      { id: 'p1', title: 'Mouvement et forces', description: 'Lois de Newton et applications.', isCompleted: true },
      { id: 'p2', title: 'Ondes et signaux', description: 'Phénomènes périodiques et diffraction.', isCompleted: false },
    ],
  },
  {
    id: 'chem-t',
    subject: 'chemistry',
    title: 'Chimie Terminale',
    chaptersCount: 10,
    exercisesCount: 120,
    progress: 60,
    chapters: [
      { id: 'c1', title: 'Acides et Bases', description: 'pH, titrage et équilibres.', isCompleted: true },
      { id: 'c2', title: 'Cinétique chimique', description: 'Vitesse de réaction et facteurs.', isCompleted: true },
    ],
  },
];

export const MOCK_USER_STATS: UserStats = {
  xp: 1250,
  level: 12,
  streak: 7,
  summariesRead: 45,
  exercisesSolved: 128,
  favorites: 12,
};

export const MOCK_BADGES: Badge[] = [
  { 
    id: '1', 
    name: 'Test', 
    description: 'test',
    requirement: 'test',
    icon: 'test', 
    isUnlocked: true 
  }
];
