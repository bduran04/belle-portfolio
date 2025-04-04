"use client";

import { useQuery } from '@tanstack/react-query';
import supabase from '@/lib/supabase';

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
  image_url: string;
  tags: string[];
  demo_url?: string;
  repo_url?: string;
}

export function useProjects() {
  return useQuery({
    queryKey: projectKeys.lists(),
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
        
      console.log('Raw projects data:', data);
        
      if (error) {
        throw new Error(`Error fetching projects: ${error.message}`);
      }
      
      // Ensure tags are properly parsed if needed
      const parsedData = data?.map(project => ({
        ...project,
        tags: Array.isArray(project.tags) ? project.tags : JSON.parse(project.tags || '[]')
      }));
      
      console.log('Parsed projects data:', parsedData);
      
      return parsedData as Project[];
    },
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();
        
      if (error) {
        throw new Error(`Error fetching project: ${error.message}`);
      }
      
      return data as Project;
    },
    enabled: !!id,
  });
}