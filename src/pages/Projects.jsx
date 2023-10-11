import React from 'react';
import proyectoLucas from "../assets/projects/lucas.png";
import proyectoIselec from "../assets/projects/iselec.png";
import proyectoBarfer from "../assets/projects/barfer.png";
import proyectoBarferApp from "../assets/projects/barfer_app.png";
import proyectoConstructora from "../assets/projects/constructora.png";
import Button from '../components/Button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const PROJECTS = [
    {
      id: 1,
      name: 'Iselec',
      description: 'Página web desarrollada para Iselec, empresa dedicada a la venta de dispositivos iPhone. El desarrollo cuenta con un autogestor para el cliente.',
      link: 'http://iselec.ar/',
      img: proyectoIselec,
      category: 'fullstack',
    },
    {
      id: 2,
      name: 'Landing Page',
      description: 'Desarrollo web para productor asesor de seguros. La página se encuentra en proceso.',
      link: 'https://bright-meerkat-181bf8.netlify.app/',
      img: proyectoLucas,
      category: 'frontend',
    },
    {
      id: 3,
      name: 'Barfer App Desktop',
      description: 'App de escritorio desarrollada con C# y .NET Windows Forms. Proyecto para la Universidad Tecnológica Nacional.',
      link: '',
      img: proyectoBarfer,
      category: 'fullstack',
    },
    {
      id: 4,
      name: 'Barfer App Mobile',
      description: 'App móvil desarrollada con React Native, TypeScript, Node y Express. Proyecto para la empresa Barfer. Sigue en proceso.',
      link: '',
      img: proyectoBarferApp,
      category: 'fullstack',
    },
    {
      id: 5,
      name: 'Constructora',
      description: 'Página web desarrollada para una empresa constructora. Se utilizó React Vite y Tailwind CSS.',
      link: '',
      img: proyectoConstructora,
      category: 'frontend',
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-[120rem] m-auto w-[92%] mt-10 md:mt-20" id="proyectos">
      <h2 className="text-white text-center text-3xl md:text-4xl font-semibold mb-10">
        Proyectos
      </h2>

      <div className="projects__content">
        <div className="mt-10 flex flex-col items-center sm:flex-row justify-center sm:items-center sm:gap-20 filter-buttons">
          <Button
            className={`mb-4 sm:mb-0 ${selectedCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('frontend')}
          >
            Frontend
          </Button>
          <Button
            className={`mb-4 sm:mb-0 ${selectedCategory === 'fullstack' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('fullstack')}
          >
            Full Stack
          </Button>
        </div>

        {filteredProjects.map((item) => (
          <div key={item.id} className="my-10">
            <div className="overflow-hidden flex justify-center">
              <img src={item.img} alt="Software Screenshot" className="w-60 sm:w-80 block object-cover" loading="lazy" />
            </div>
            <div className="p-4 flex flex-col items-center text-center sm:text-left">
              <h3 className="font-bold text-xl sm:text-4xl text-white mb-4">
                {item.name}
              </h3>
              <p className="text-base sm:text-xl text-white font-semibold mb-4">
                {item.description}
              </p>
              <Button
                href={item.link}
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                rel="noreferrer"
              >
                Ver página
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
