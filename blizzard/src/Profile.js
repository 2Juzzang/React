import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Profile = ({
  access,
  charName,
  server,
  faction,
  race,
  charClass,
  lv,
  itemLv,
}) => {
  const [profile, setProfile] = useState('');
  const getProfile = async () => {
    try {
      await axios
        .get(
          `https://kr.api.blizzard.com/profile/wow/character/azshara/${charName}/character-media`,
          {
            params: {
              region: 'kr',
              namespace: 'profile-kr',
              locale: 'ko-KR',
              access_token: access,
              // Authorization: 'Bearer ' + access,
            },
          },
        )
        .then((res) => {
          console.log(res.data);
          setProfile(res.data.assets[0].value);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProfile();
  }, [charName]);
  return (
    <>
      {charName.length === 0 ? null : (
        <div style={{ display: 'auto', margin: 'auto' }}>
          <div
            style={{
              width: '700px',
              height: '130px',
              margin: '0 auto',
              // backgroundSize: '40%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage:
                faction === 'HORDE'
                  ? 'url(/assets/horde.png)'
                  : 'url(/assets/alliance.png)',
            }}
          >
            {/* <div
              style={{
                display: 'flex',
                padding: '20px 50px',
                color: 'white',
              }}
            >
              <h2 style={{ color: 'blue' }}>{charName}</h2>
              <h3>{server}</h3>
              <h3>{lv}</h3>
              <h3>{race}</h3>
              <h3>{charClass}</h3>
              <h3>{itemLv}</h3>
            </div> */}
            <img
              style={{
                display: 'flex',
                // position: 'relative',
                // left: '-250px',
                // display: 'flex',
                // flexDirection: 'row',
                objectFit: 'cover',
                width: '130px',
                // height: '100%',
              }}
              src={profile}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
