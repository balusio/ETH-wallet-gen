// import { model, Schema } from 'mongoose';
// import bcrypt from 'bcrypt';

// const SALT_WORK_FACTOR = 16;

// // Create a simple User's schema
// const userSchema = new Schema({
//   name: { type: String, required: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true, index: { unique: true } }
// });

// userSchema.pre('save', (next) => {
//   const user = this;
//   console.log(user);
//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, ({ err: errSalt }, salt) => {
//     if (errSalt) return next(errSalt);
//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, ({ err: errhash }, hash) => {
//       if (errhash) return next(errhash);

//       // override the cleartext password with the hashed one
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.method('comparePassword',(candidatePassword,cb) => {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// });

// const userModel = new model('User', userSchema);

// module.exports = userModel;
