"use client";

import { useProjects } from '@/hooks/queries/useProjects';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsList() {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;
  if (!projects || projects.length === 0) return <div>No projects found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.tags.join(', ')}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="relative w-full h-48 mb-4">
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={400}
                height={200}
                className="object-cover rounded-md"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <p>{project.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            {project.demoUrl && (
              <Button asChild variant="outline">
                <Link href={project.demoUrl} target="_blank">Demo</Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button asChild>
                <Link href={project.repoUrl} target="_blank">Code</Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}