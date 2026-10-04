import React from 'react';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="p-6">

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          {project.title}
        </h3>

        {/* Row 1: Client | Application */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-2">
          <div>
            <span className="text-sm font-medium text-slate-700">Client: </span>
            <span className="text-sm text-slate-500">{project.client}</span>
          </div>
          <div>
            <span className="text-sm font-medium text-slate-700">Application: </span>
            <span className="text-sm text-slate-500">{project.application}</span>
          </div>
        </div>

        {/* Row 2: Role | URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
          <div>
            <span className="text-sm font-medium text-slate-700">Role: </span>
            <span className="text-sm text-slate-500">{project.role}</span>
          </div>
          <div>
            {project.url ? (
              <>
                <span className="text-sm font-medium text-slate-700">URL: </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline break-all"
                >
                  Open Link
                </a>
              </>
            ) : (
              <>
                <span className="text-sm font-medium text-slate-700">Tools: </span>
                <span className="text-sm text-slate-500">{project.tools}</span>
              </>
            )}
          </div>
        </div>

        {/* Tools row — only shown when URL is present */}
        {project.url && (
          <div className="mb-4">
            <span className="text-sm font-medium text-slate-700">Tools: </span>
            <span className="text-sm text-slate-500">{project.tools}</span>
          </div>
        )}

        {/* Responsibilities */}
        <div className="mb-3">
          <p className="text-sm font-medium text-slate-700 mb-1">Responsibilities:</p>
          <p className="text-sm text-slate-500 leading-relaxed">{project.responsibilities}</p>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm font-medium text-slate-700 mb-1">Description:</p>
          <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
