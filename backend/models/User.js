const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 10,
  },
  id: {
    type: String,
    trim: true, // 스페이스와 같은 공백을 없애주는 역할
    unique: 1, // 똑같은 이메일을 쓰지 못하도록
  },
  password: {
    type: String,
    minlength: 8,
  },
  birth: {
    type: Number,
    default: 0,
  },
  sex: {
    type: Boolean,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };

// server/models/User.js
const bcrypt = require("bcrypt");
const saltRounds = 10;

userSchema.pre("save", function (next) {
  var user = this;
  // salt를 이용해서 비밀번호 암호화한 후 보내줌 (비밀번호와 관련될 때만)
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    // 그 외에는 그냥 내보냄
    next();
  }
});

const cookieParser = require("cookie-parser");

app.use(cookieParser()); // 토큰을 쿠키에 저장하기 위해 사용

app.post("/api/users/login", (req, res) => {
  // 요청된 이메일을 데이터베이스에서 있는지 찾는다
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      // 비밀번호까지 맞다면 토큰을 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 정상적일 경우 토큰을 쿠키나 로컬스토리지 등에 저장
        // 쿠키에 저장
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});
