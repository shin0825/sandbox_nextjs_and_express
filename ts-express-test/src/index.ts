import express from 'express';

const app: express.Express = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:6682', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

type User = {
  id: number
  name: string
  email: string
};

const users: User[] = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  { id: 3, name: "User3", email: "user3@test.local" }
]

//一覧取得
app.get('/users', (_, res) => {
  res.send(JSON.stringify(users))
})

app.get('/', (_, res) => {
  res.send('Hello world');
})

app.listen(6683, () => console.log('Server is running'));
