import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  yearOfBirth: string;
  dayOfBirth: string;
  monthOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  state: string;
  district: string;
}

interface UserState {
  phoneNumber: string;
  otp: string;
  profileDetails: ProfileDetails;
  step: number;
  termsAccepted: boolean;
}

const initialState: UserState = {
  phoneNumber: '',
  otp: '',
  profileDetails: {
    firstName: '',
    middleName: '',
    lastName: '',
    yearOfBirth: '',
    dayOfBirth: '',
    monthOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    state: '',
    district: '',
  },
  step: 0,
  termsAccepted: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setOtp(state, action: PayloadAction<string>) {
      state.otp = action.payload;
    },
    setProfileDetails(state, action: PayloadAction<Partial<ProfileDetails>>) {
      state.profileDetails = { ...state.profileDetails, ...action.payload };
    },
    nextStep(state) {
      state.step += 1;
    },
    prevStep(state) {
      state.step -= 1;
    },
    acceptTerms(state, action: PayloadAction<boolean>) {
      state.termsAccepted = action.payload;
    },
  },
});

export const { setPhoneNumber, setOtp, setProfileDetails, nextStep, prevStep, acceptTerms } = userSlice.actions;
export default userSlice.reducer;
