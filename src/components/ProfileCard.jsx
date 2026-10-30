import { useEffect, useState } from 'react';

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProfile({
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        city: 'London',
      });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) return <p className="component-content loading" role="status">Loading...</p>;

  return (
    <dl className="component-content profile-details">
      <div><dt>Name</dt><dd>{profile.name}</dd></div>
      <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
      <div><dt>City</dt><dd>{profile.city}</dd></div>
    </dl>
  );
}

export default ProfileCard;
