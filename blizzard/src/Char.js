import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile';
import { secret } from './Secret';
const Char = () => {
  const [inputName, setInputName] = useState('');
  const [server, setServer] = useState('');
  const [faction, setFaction] = useState('');
  const [race, setRace] = useState('');
  const [charName, setCharName] = useState('');
  const [charClass, setCharClass] = useState('');
  const [lv, setLv] = useState('');
  const [itemLv, setItemLv] = useState('');
  const [access, setAccess] = useState('');
  const getAccessToken = () => {
    let data = `client_id=${secret.client_id}&client_secret=${secret.client_secret}&grant_type=client_credentials`;
    axios.post('https://kr.battle.net/oauth/token', data).then((res) => {
      setAccess(res.data.access_token);
    });
  };
  const inputNickname = (e) => {
    setInputName(e.target.value);
  };
  const getChar = async () => {
    try {
      await axios
        .get(
          `https://kr.api.blizzard.com/profile/wow/character/azshara/${inputName}`,
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
          setServer(res.data.realm.name.ko_KR);
          setFaction(res.data.faction.type);
          setRace(res.data.race.name.ko_KR);
          setCharName(res.data.name);
          setCharClass(
            res.data.active_spec.name.ko_KR +
              ' ' +
              res.data.character_class.name.ko_KR,
          );
          setLv(res.data.level);
          setItemLv(res.data.average_item_level);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAccessToken();
  }, []);
  return (
    <div style={{ margin: 'auto' }}>
      <div>
        <input value={inputName} onChange={inputNickname}></input>
        <button onClick={getChar}>캐릭터 확인</button>
      </div>
      {/* <div style={{ display: 'flex', margin: 'auto' }}>
        <div
          style={{
            width: '1920px',
            height: '250px',
            margin: '0 auto',
            backgroundSize: '40%',
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(/assets/horde.png)',
          }}
        ></div>
      </div> */}
      {/* <div>서버 : {server}</div>
      <div>진영 : {faction}</div>
      <div>종족 : {race}</div>
      <div>닉네임 : {charName} </div>
      <div>직업 : {charClass}</div>
      <div>레벨 : {lv}</div>
      <div>아이템 레벨 : {itemLv}</div> */}
      {access ? (
        <>
          <Profile
            access={access}
            server={server}
            faction={faction}
            race={race}
            charName={charName}
            charClass={charClass}
            lv={lv}
            itemLv={itemLv}
          />
        </>
      ) : null}
    </div>
  );
};

export default Char;
