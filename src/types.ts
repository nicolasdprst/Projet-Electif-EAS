export type Subject = 'maths' | 'physics' | 'chemistry';

export type FeedContentType = 'funfact' | 'formula' | 'method' | 'video';

export interface FeedItem {
  id: string;
  type: FeedContentType;
  subject: Subject;
  title: string;
  content: string;
  author: string;
  likes: number;
  videoUrl?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
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

