export type Subject = 'maths' | 'physics' | 'chemistry';

export type FeedContentType = 'funfact' | 'formula' | 'method' | 'video' | 'carousel';

export interface FeedItem {
  id: string;
  type: FeedContentType;
  subject: Subject;
  title: string;
  content: string;
  author: string;
  likes: number;
  videoUrl?: string;
  images?: string[]; 
  //Note pour plus tard : rajouter un attribut pour savoir si l'utilisateur a like
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  category?: string;
  icon?: string;
}

export interface Course {
  id: string;
  subject: Subject;
  title: string;
  chaptersCount: number;
  exercisesCount: number;
  progress: number;
  chapters: Chapter[];
}

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  summariesRead: number;
  exercisesSolved: number;
  favorites: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  requirement: string;
  icon: string;
  isUnlocked: boolean;
}

