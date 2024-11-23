export interface LoginFormValues {
  name: string;
  email: string;
  currentPassword: string;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  newPassword: string;
  passwordConfirm: string;
}

export interface SettingsFormValues {
  username: string;
  fullName: string;
  avatarUrl: string;
  countryOfResidence?: string;
  currentCountry?: string;
  bio?: string;
}
