import React from 'react';

const certificationsData = [
  {
    technology: 'JAVA (Servlet, JSP, Struts)',
    organization: 'Hewlett Packard Education India',
    duration: '120 Hours',
    description: 'Comprehensive summer training focused on core Java web technologies.',
  },
  {
    technology: 'Linux Red Hat Administration',
    organization: 'Hewlett Packard Education India',
    duration: '80 Hours',
    description: 'In-depth summer training covering essential Linux Red Hat administrative tasks.',
  },
  {
    technology: 'Oracle 9i Database Administration',
    organization: 'Hewlett Packard Education India',
    duration: '80 Hours',
    description: 'Focused training on Oracle 9i database administration, including PL/SQL and SQL.',
  },
  {
    technology: 'C & C++ Programming',
    organization: 'Hewlett Packard Education India',
    duration: '120 Hours',
    description: 'Advanced programming training in C and C++, tailored for MCA curriculum.',
  },
];

const Certifications = () => {
  return (
    <section className="bg-slate-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          Certifications
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-600 rounded-lg shadow-md">
            <thead className="bg-blue-600">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Technology
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-600">
              {certificationsData.map((cert, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-700'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-300">
                    {cert.technology}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {cert.organization}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {cert.duration}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {cert.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
