import Styles from './Styles';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className={Styles.body}>
      <main className={Styles.landing}>
        <div className={Styles.landingSquare}>
          <h1 className={Styles.landingTitle}>Pacific Caribou</h1>
          <p className={Styles.landingSubtitle}>
            Developer &amp;&amp; Entrepreneur
          </p>
          <p className={Styles.landingBlurb}>
            Full stack web developer from the transistors up.
          </p>
          <ul className={Styles.contactList}>
            <li className={Styles.contactListItem}>
              <a href='https://www.github.com/pacificcaribou'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className={Styles.contactListItem}>
              <a href='mailto: ob09f520z@relay.firefox.com'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li className={Styles.contactListItem}>
              <FontAwesomeIcon icon={faRss} />
            </li>
          </ul>
        </div>
      </main>
      <div className={Styles.container}>
        <section className={Styles.section}>
          <h2 className={Styles.sectionTitle}>Projects</h2>
          <p className={Styles.sectionSubtitle}>WIP coming soon!</p>
        </section>
        <section className={Styles.section}>
          <h2 className={Styles.sectionTitle}>Skills</h2>
          <p className={Styles.sectionSubtitle}>
            The projects should speak for themselves... eventually.
          </p>
        </section>
        <footer className={Styles.footer}>
          Made with &hearts; by PacificCaribou
        </footer>
      </div>
    </div>
  );
}

export default App;
