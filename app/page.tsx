import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
      <h1>Jefferson Chen</h1>
      <p>Hi! Thanks for checking out my site. I'm currently working on the
      future of AI + education at Art of Problem Solving, the program that tons
      of math olympiad winners past, present, and future come out of.</p>
      </main>
      <ul>
        <li>Machine Learning Engineer</li>
        <li>Technical Project Lead</li>
        <li>Ex-founder</li>
        <li>Software Engineer</li>
        <li>
          <a href="https://github.com/chenjefferson">Personal GitHub</a>
        </li>
        <li>
          <a href="https://github.com/pandagnar">AoPS GitHub</a>
        </li>
      </ul>

      <ul>
        <li>
          Tech
        </li>
        <li>
          Travel
        </li>
        <li>
          Food
        </li>
        <li>
          Volunteer Work
        </li>
      </ul>
      <footer style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="Mailing List" />
        Made with ❤️ by me. Copyright into perpetuity.
      </footer>
    </div>
  );
}
