import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Soulbinds from './Soulbinds';
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
            },
          },
        )
        .then((res) => {
          console.log(res.data);
          setProfile(res.data.assets[3].value);
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
              margin: '0 auto',
              backgroundSize: '1200px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage:
                faction === 'HORDE'
                  ? 'url(/assets/horde.png)'
                  : 'url(/assets/alliance.png)',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '700px',
                height: '30px',
                padding: '40px 50px 0',
                margin: '0 20px -10px',
              }}
            >
              <h2
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '30px',
                  color: charClass.includes('전사')
                    ? '#C79C6E'
                    : charClass.includes('성기사')
                    ? '#F58CBA'
                    : charClass.includes('죽음의 기사')
                    ? '#C41F3B'
                    : charClass.includes('주술사')
                    ? '#0070DE'
                    : charClass.includes('사제')
                    ? '#FFF'
                    : charClass.includes('드루이드')
                    ? '#FF7D0A'
                    : charClass.includes('도적')
                    ? '#FFF569'
                    : charClass.includes('수도사')
                    ? '#00FF96'
                    : charClass.includes('마사냥꾼')
                    ? '#A330C9'
                    : charClass.includes('마법사')
                    ? '#69CCF0'
                    : charClass.includes('흑마법사')
                    ? '#9482C9'
                    : '#ABD473',
                }}
              >
                {charName}
              </h2>
            </div>
            <div
              style={{
                display: 'flex',
                height: '100px',
                padding: '0 50px',
                color: 'white',
              }}
            >
              {/* <h2
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  // fontSize: '30px',
                  color: charClass.includes('전사')
                    ? '#C79C6E'
                    : charClass.includes('성기사')
                    ? '#F58CBA'
                    : charClass.includes('죽음의 기사')
                    ? '#C41F3B'
                    : charClass.includes('주술사')
                    ? '#0070DE'
                    : charClass.includes('사제')
                    ? '#FFF'
                    : charClass.includes('드루이드')
                    ? '#FF7D0A'
                    : charClass.includes('도적')
                    ? '#FFF569'
                    : charClass.includes('수도사')
                    ? '#00FF96'
                    : charClass.includes('마사냥꾼')
                    ? '#A330C9'
                    : charClass.includes('마법사')
                    ? '#69CCF0'
                    : charClass.includes('흑마법사')
                    ? '#9482C9'
                    : '#ABD473',
                }}
              >
                {charName}
              </h2> */}
              <div style={{ margin: 'auto 20px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '20px',
                  }}
                >
                  <h4>{server}&nbsp;</h4>
                  <h4>Lv. {lv}&nbsp;</h4>
                  <h4 style={{ color: '#ded100' }}>Item Lv. {itemLv}</h4>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '20px',
                  }}
                >
                  <h4>{race}&nbsp;</h4>
                  <h4>{charClass}</h4>
                </div>
              </div>
              <Soulbinds access={access} charName={charName} />
            </div>
            <img
              style={{
                objectFit: 'cover',
                width: '700px',
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
