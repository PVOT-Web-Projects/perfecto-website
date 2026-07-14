import ProjectDetail from '@/components/projects/ProjectDetail';
import { getProject, otherProjects } from '@/lib/projectsData';

const SLUG = 'stavya-spine-hospital';
const project = getProject(SLUG);

export const metadata = {
  title: `${project.name} — PEHSPL Projects`,
  description: `${project.type}, ${project.location} — completed ${project.year}. ${project.scope}`,
};

export default function Page() {
  return <ProjectDetail project={project} more={otherProjects(SLUG)} />;
}