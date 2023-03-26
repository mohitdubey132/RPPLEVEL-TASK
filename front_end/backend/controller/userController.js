const User = require('../model/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErr = require('../middleware/chatchAsyncError');
const sendToken = require('../utils/jwtToken')
//register users 
exports.Resgistr = catchAsyncErr(async (req, res, next) => {
    const { Name, email, password } = req.body;
    const user = await (User.create({
        Name,
        email,
        password,
    }));

    sendToken(user, 201, res);

});
//loginUser
exports.loginUser = catchAsyncErr(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
     console.log(!user) 
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
  
    sendToken(user, 200, res);
  });

  // Logout User
exports.logout = catchAsyncErr(async (req, res, next) => {
    res.cookie("token", null, {
      //expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });

exports.AllVistor = catchAsyncErr(async (req,res,next)=>{
  const vistor = await  User.find();
    res.status(200).json({
      success:true,
      message :"All vistors ",
      vistor
    })
})