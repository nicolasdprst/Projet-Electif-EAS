import { FeedItem, Course, UserStats, Badge } from './types';

export const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    type: 'video',
    subject: 'maths',
    title: 'La Dérivée Intuitive',
    content: 'Découvre comment la pente d\'une courbe définit la variation instantanée. Un concept clé pour la Terminale S.',
    author: 'SciencesXpert',
    likes: 1240,
    videoUrl: '',
  }
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
