
const Projects = ({ params }: { params: { all: string[] } }) => {
  const { all } = params;
  return (
    <div>
      <h1>Projects {all}</h1> <br />
      <ul>
        {all.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
