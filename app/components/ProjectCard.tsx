import React from 'react';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {project.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-2">
              <strong className="text-sm font-medium text-gray-700">Client:</strong>
              <p className="text-sm text-gray-600">{project.client}</p>
            </div>
            {project.url && (
              <div className="mb-2">
                <strong className="text-sm font-medium text-gray-700">URL:</strong>
                <p className="text-sm text-blue-600 hover:underline">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </a>
                </p>
              </div>
            )}
            <div className="mb-2">
              <strong className="text-sm font-medium text-gray-700">Application:</strong>
              <p className="text-sm text-gray-600">{project.application}</p>
            </div>
            <div className="mb-2">
              <strong className="text-sm font-medium text-gray-700">Duration:</strong>
              <p className="text-sm text-gray-600">{project.duration}</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <strong className="text-sm font-medium text-gray-700">Role:</strong>
              <p className="text-sm text-gray-600">{project.role}</p>
            </div>
            <div className="mb-2">
              <strong className="text-sm font-medium text-gray-700">Responsibilities:</strong>
              <p className="text-sm text-gray-600">{project.responsibilities}</p>
            </div>
            <div className="mb-2">
              <strong className="text-sm font-medium text-gray-700">Tools:</strong>
              <p className="text-sm text-gray-600">{project.tools}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <strong className="text-sm font-medium text-gray-700">Description:</strong>
          <p className="text-sm text-gray-700">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;