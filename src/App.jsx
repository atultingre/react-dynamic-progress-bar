import './App.css'
import skill from "./Skills.json"
function App() {

  return (
    <article className="article">
      <section className="skills">
        {/* <h3 className="h3 skills-title">My skills</h3> */}
        <ul className="skills-list content-card">
          {skill.map((skill, ind) => (
            <li className="skill-item" key={ind}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.title}</h5>
                <data value={skill.value}>{skill.percentage}</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.percentage}` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default App
