export interface Movie {
  id: number;
  title: string;
  description: string;
  release_date: string; 
  actor_count: number;
  votes: number;
}

export interface Actor {
    id: number;
    name: string;
    date_of_birth: string;
    movie_count: number;
}

export interface vote{
  message: string;
  votes: number;
}
  