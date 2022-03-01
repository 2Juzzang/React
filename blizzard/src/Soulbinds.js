import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Soulbinds = ({ access, charName }) => {
  const [covenant, setCovenant] = useState('');
  const [renown, setRenown] = useState('');
  const [binder, setBinder] = useState('');
  const getSoulbinds = async () => {
    try {
      await axios
        .get(
          `https://kr.api.blizzard.com/profile/wow/character/azshara/${charName}/soulbinds`,
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
          console.log(
            res.data.soulbinds
              .filter((active) => active.is_active === true)[0]
              .soulbind.name.ko_KR.split(' ')
              .pop(),
          );
          const soulbinder = res.data.soulbinds.filter(
            (active) => active.is_active === true,
          )[0].soulbind.name.ko_KR;
          setRenown(res.data.renown_level);
          setCovenant(res.data.chosen_covenant.name.ko_KR);
          setBinder(soulbinder);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getSoulbinds();
  }, [charName]);
  return (
    <div style={{ display: 'flex', margin: 'auto 0 auto auto' }}>
      <div style={{ margin: 'auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            height: '20px',
          }}
        >
          <h4 style={{ color: '#ded100' }}>
            {covenant}, {binder}
          </h4>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            height: '20px',
          }}
        >
          <h4>영예 {renown}</h4>
        </div>
      </div>
      <div style={{ height: '70px', marginLeft: '5px' }}>
        <img
          height={'70px'}
          src={
            covenant === '강령군주'
              ? `${process.env.PUBLIC_URL + '/necrolord.png'}`
              : covenant === '벤티르'
              ? `${process.env.PUBLIC_URL + '/venthyr.png'}`
              : covenant === '키리안'
              ? `${process.env.PUBLIC_URL + '/kyrian.png'}`
              : covenant === '나이트 페이'
              ? `${process.env.PUBLIC_URL + '/nightfae.png'}`
              : null
          }
        />
      </div>
    </div>
  );
};

export default Soulbinds;
