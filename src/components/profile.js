import '../styles/profile.css';
import { FaBars, FaStickyNote, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const profiles = {
  member1: {
    backgroundColor: '#ebfaff',
    imgShadow: '5px 15px 30px rgba(173, 216, 230, 0.8)',
    btnBg: 'linear-gradient(45deg, #4affff, #35e0f7)',
    btnShadow: '5px 10px 20px rgba(0, 255, 255, 0.493)',
    iconColor: '#35e0f7'
  },
  member2: {
    backgroundColor: '#edffeb',
    imgShadow: '5px 15px 20px #bdccb783',
    btnBg: 'linear-gradient(45deg, #a0ff9d, #55f5b2)',
    btnShadow: '5px 10px 20px rgba(33, 250, 105, 0.3)',
    iconColor: '#55f5b2'
  },
  member3: {
    backgroundColor: '#fff3fd',
    imgShadow: '5px 15px 20px rgba(252, 99, 214, 0.2)',
    btnBg: 'linear-gradient(45deg, #ef74ff, #ff11c4)',
    btnShadow: '5px 10px 20px rgba(255, 17, 196, 0.357)',
    iconColor: '#ff11c4'
  },
  member4: {
    backgroundColor: '#f5f0ff',
    imgShadow: '5px 15px 20px rgba(183, 82, 250, 0.2)',
    btnBg: 'linear-gradient(45deg, #8e74ff, #a011ff)',
    btnShadow: '5px 10px 20px rgba(160, 17, 255, 0.4)',
    iconColor: '#a011ff'
  }
};

const Profile = ({ member }) => {
  const profile = profiles[member] || profiles.member1;

  return (
    <div className="profile-container" style={{ backgroundColor: profile.backgroundColor }}>
      <section>
        <nav className="menu">
          <Link to="#">
            <FaBars style={{ color: profile.iconColor }} />
          </Link>
          <Link to="#">
            <FaStickyNote style={{ color: profile.iconColor }} />
          </Link>
        </nav>

        <article className="profile">
          <img
            src={`img/${member}.jpg`}
            alt="Profile"
            style={{ boxShadow: profile.imgShadow }}
          />
          <h1>DCODELAB</h1>
          <h2>UI/UX INTERACTIVE DEVELOPER</h2>
          <Link
            to="#"
            className="btnView"
            style={{
              background: profile.btnBg,
              boxShadow: profile.btnShadow
            }}
          >
            VIEW MORE
          </Link>
        </article>

        <ul className="contact">
          <li>
            <FaFacebookF style={{ color: profile.iconColor }} />
            <span>Visit My Facebook page.</span>
          </li>
          <li>
            <FaEnvelope style={{ color: profile.iconColor }} />
            <span>hadaboni80@naver.com</span>
          </li>
        </ul>

        <nav className="others">
          {Object.keys(profiles).map(m => (
            <Link
              key={m}
              to={`/${m}`}
              className={member === m ? 'on' : ''}
              style={{
                backgroundColor: profiles[m].iconColor,
                boxShadow: profiles[m].imgShadow
              }}
            />
          ))}
        </nav>
      </section>
    </div>
  );
};

export default Profile;