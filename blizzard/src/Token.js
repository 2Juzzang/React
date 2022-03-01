import React, { useState, useEffect } from 'react';
import { secret } from './Secret';
import axios from 'axios';
const Token = () => {
  const [access, setAccess] = useState('');
  const [token, setToken] = useState('');
  const [update, setUpdate] = useState();
  const getAccessToken = () => {
    let data = `client_id=${secret.client_id}&client_secret=${secret.client_secret}&grant_type=client_credentials`;
    axios.post('https://kr.battle.net/oauth/token', data).then((res) => {
      setAccess(res.data.access_token);
    });
  };

  const getToken = async () => {
    try {
      setToken(null);
      const response = await axios
        .get(
          'https://kr.api.blizzard.com/data/wow/token/?namespace=dynamic-kr',
          {
            headers: {
              Authorization: 'Bearer ' + access,
            },
          },
        )
        .then((res) => {
          setToken(res.data.price / 10000);
          let date = new Date(res.data.last_updated_timestamp);
          const month = date.getMonth() + 1;
          date =
            date.getFullYear() +
            '년 ' +
            month +
            '월' +
            date.getDate() +
            '일 ' +
            date.getHours() +
            '시' +
            date.getMinutes() +
            '분' +
            date.getSeconds() +
            '초';
          setUpdate(`${date}`);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAccessToken();
  }, [token]);
  return (
    <div>
      현재 한국 서버의 와우 토큰 값은? <button onClick={getToken}>확인</button>
      {typeof token === 'number' ? (
        <>
          <div>한국 서버의 토큰값은 {token}골드 입니다.</div>
          <div>최근 갱신 시간은 {update} 입니다.</div>
        </>
      ) : null}
    </div>
  );
};

export default Token;
