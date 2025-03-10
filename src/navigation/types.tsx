export type RootStackParamList = {
  Home: undefined;
  News: undefined;
  Weather: undefined;
  Login: undefined;
  Profile: undefined;
};

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
