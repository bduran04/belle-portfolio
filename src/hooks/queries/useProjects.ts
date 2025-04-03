import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/api/services/base';

// Query keys
export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
  list: (filters: string) => [...projectKeys.lists(), { filters }] as const,
  details: () => [...projectKeys.all, 'detail'] as const,
  detail: (id: string) => [...projectKeys.details(), id] as const,
};

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export function useProjects() {
  return useQuery({
    queryKey: projectKeys.lists(),
    queryFn: () => fetcher<Project[]>('/projects'),
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => fetcher<Project>(`/projects/${id}`),
    enabled: !!id,
  });
}