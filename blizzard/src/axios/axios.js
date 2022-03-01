import axios from 'axios';
import { secret } from '../Secret';
axios.post('https://kr.battle.net/oauth/token', {
  client_id: secret.client_id,
  client_secret: secret.client_secret,
  grant_type: 'client_credentials',
});
