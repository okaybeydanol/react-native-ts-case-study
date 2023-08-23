import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// NAVIGATION
export type RootStack = {
  TabNavigator: NavigatorScreenParams<TabStack>;
  FilterScreen: undefined;
  ProductDetailScreen: {id: string};
};

export type HomeStack = {
  HomeScreen: undefined;
  ProductDetailScreen: {id: string};
};

export type FavoriteStack = {
  FavoriteScreen: undefined;
  ProductDetailScreen: {id: string};
};
export type BasketStack = {
  BasketScreen: undefined;
  ProductDetailScreen: {id: string};
};

export type TabStack = {
  HomeNavigator: NavigatorScreenParams<HomeStack>;
  BasketNavigator: NavigatorScreenParams<BasketStack>;
  FavoriteNavigator: NavigatorScreenParams<FavoriteStack>;
  ProfileScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStack> =
  NativeStackScreenProps<RootStack, T>;

/*export type HomeRootStackScreenProps<
  T extends keyof TabStack,
  E extends keyof RootStack,
> = CompositeScreenProps<
  NativeStackScreenProps<HomeStack, 'HomeScreen'>,
  CompositeScreenProps<
    NativeStackScreenProps<TabStack, T>,
    NativeStackScreenProps<RootStack, E>
  >
>;*/

export type HomeRootStackScreenProps<
  T extends keyof RootStack,
  E extends keyof HomeStack,
> = CompositeScreenProps<
  NativeStackScreenProps<HomeStack, 'HomeScreen'>,
  CompositeScreenProps<
    NativeStackScreenProps<RootStack, T>,
    NativeStackScreenProps<HomeStack, E>
  >
>;

declare global {
  namespace ReactNavigation {
    // noinspection JSUnusedGlobalSymbols
    interface RootParamList extends RootStack {}
  }
}
