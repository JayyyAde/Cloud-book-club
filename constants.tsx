
import { Book, BookClub, User, UserRole } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    coverImage: 'https://picsum.photos/seed/thingsfallapart/400/600',
    description: 'A classic of African literature, focusing on the life of Okonkwo and the profound impact of cultural intersection in Nigeria.',
    totalPages: 209,
    category: 'African Classic'
  },
  {
    id: 'b2',
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    coverImage: 'https://picsum.photos/seed/halfyellowsun/400/600',
    description: 'A modern masterpiece exploring the lives of characters caught in the complex web of struggle and identity.',
    totalPages: 443,
    category: 'Historical Fiction'
  },
  {
    id: 'b3',
    title: 'Stay With Me',
    author: 'Ayobami Adebayo',
    coverImage: 'https://picsum.photos/seed/staywithme/400/600',
    description: 'A heart-wrenching novel about marriage, family, and the power of love in the modern Nigerian landscape.',
    totalPages: 260,
    category: 'Contemporary'
  }
];

export const MOCK_CLUBS: BookClub[] = [
  {
    id: 'c1',
    name: 'Lagos Literary Society',
    description: 'Discussing contemporary Nigerian fiction and poetry.',
    focus: 'Nigerian Literature',
    adminId: 'u1',
    members: ['u1', 'u2', 'u3'],
    currentBookId: 'b1',
    isPrivate: false,
    pendingRequests: [],
    readingCycleEnd: '2026-05-15'
  },
  {
    id: 'c2',
    name: 'Pan-African Readers',
    description: 'Exploring voices from across the continent and the diaspora.',
    focus: 'Pan-Africanism',
    adminId: 'u2',
    members: ['u2', 'u1'],
    currentBookId: 'b2',
    isPrivate: true,
    pendingRequests: ['u3'],
    readingCycleEnd: '2026-06-01'
  }
];

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Amaka Obi',
  email: 'amaka@example.com',
  role: UserRole.REGISTERED,
  avatar: 'https://i.pravatar.cc/150?u=u1',
  bio: 'Avid reader and educator based in Lagos. Passionate about Igbo folklore.',
  joinedDate: '2026-01-12'
};
