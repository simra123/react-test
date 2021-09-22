import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const OTP = () => {
  const[OTP , setOTP] = useState('')

 
    return (
        <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={4}
        otpType="number"
        disabled={false}/>
    );
  
}
export default OTP;