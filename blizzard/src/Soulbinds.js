import React from 'react';
import axios from 'axios';
const Soulbinds = () => {
  // const getProfile = async () => {
  //   try {
  //     await axios
  //       .get(
  //         `https://kr.api.blizzard.com/profile/wow/character/azshara/${charName}/character-media`,
  //         {
  //           params: {
  //             region: 'kr',
  //             namespace: 'profile-kr',
  //             locale: 'ko-KR',
  //             access_token: access,
  //           },
  //         },
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setProfile(res.data.assets[3].value);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getProfile();
  // }, [charName]);
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
          <h4 style={{ color: '#ded100' }}>나이트페이, 코레인 </h4>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            height: '20px',
          }}
        >
          <h4>영예 80</h4>
        </div>
      </div>
      <div style={{ height: '70px', marginLeft: '10px' }}>
        <img width={'70px'} src={process.env.PUBLIC_URL + '/logo192.png'} />
      </div>
    </div>
  );
};

export default Soulbinds;
