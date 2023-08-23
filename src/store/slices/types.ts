import {ProductsApiResponse} from '@src/store/api/types';

export type RouteSliceParams = {
  path: 'RootNavigator';
};

type ActionType = 'plus' | 'minus';

export interface BasketAction {
  product: ProductsApiResponse;
  actionType: ActionType;
}

export type ProductSlice = ProductsApiResponse & {count: number};

export interface FilterSliceParams {
  models: string[];
  brands: string[];
  order: string;
  product?: ProductsApiResponse[];
}
