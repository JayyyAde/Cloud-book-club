
export enum UserRole {
  GUEST = 'GUEST',
  REGISTERED = 'REGISTERED',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  joinedDate: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  totalPages: number;
  category: string;
}

export interface BookClub {
  id: string;
  name: string;
  description: string;
  focus: string;
  adminId: string;
  members: string[]; // User IDs
  currentBookId?: string;
  isPrivate: boolean;
  pendingRequests: string[]; // User IDs
  readingCycleEnd?: string;
}

export interface ReadingProgress {
  userId: string;
  bookId: string;
  pagesRead: number;
  lastUpdated: string;
}

export interface DiscussionPost {
  id: string;
  clubId: string;
  bookId: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
  replies: DiscussionReply[];
}

export interface DiscussionReply {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
