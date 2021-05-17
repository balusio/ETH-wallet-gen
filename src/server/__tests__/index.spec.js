import { connect } from 'mongoose';
// import userModel from 'models/userModel';

const userData = {
  name: 'TekLoon',
  gender: 'Male',
  dob: new Date(),
  loginUsing: 'Facebook'
};

describe('User Model Test', () => {
  let db;
  let connection;

  beforeAll(async () => {
    connection = await connect(
      process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
    db = connection.db();

    console.log(db);
  });
  it('should start to do something', () => {
    console.log(db);
  });
  afterAll(async () => {
    await connection.close();
  });
});
