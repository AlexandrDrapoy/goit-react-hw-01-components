import { Stats } from 'components/ProfileStats/ProfileStats';
import css from './ProfileCard.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, location, stats, tag, username }) => (
  <div className={css.description}>
    <img src={avatar} alt={username} className={css.avatar} />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
    <Stats
      followers={stats.followers}
      likes={stats.likes}
      views={stats.views}
    ></Stats>
  </div>
);
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
