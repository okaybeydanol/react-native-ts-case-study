import React, {useMemo, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

// Hook
import useCustomTextInput from '@src/hooks/useCustomTextInput';

// Svg
import Correct from '@assets/svg/Correct.svg';

// Store
import {useAppDispatch, useAppSelector} from '@src/store';
import {setFilter} from '@src/store/slices/filter';

// Constant
import {colors} from '@src/constants/colors';

// Style
import styles from './style';

const sortOptions = [
  {label: 'Old to new', value: 'Old to new'},
  {label: 'New to old', value: 'New to old'},
  {label: 'Price high to low', value: 'Price high to low'},
  {label: 'Price low to High', value: 'Price low to High'},
];
const Filter = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const reduxFilter = useAppSelector(state => state.filter);

  const navigation = useNavigation();

  const searchOne = useCustomTextInput(v => v.length > 0);
  const searchTwo = useCustomTextInput(v => v.length > 0);

  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    reduxFilter.brands,
  );
  const [selectedModels, setSelectedModels] = useState<string[]>(
    reduxFilter.models,
  );
  const [selectedSortOption, setSelectedSortOption] = useState<string>(
    reduxFilter.order,
  );

  const getModelsByBrands = (brands: string[]) => {
    if (brands.length === 0) {
      return [...new Set(reduxFilter?.product?.map(product => product.model))];
    }

    const modelsForSelectedBrands = reduxFilter?.product
      ?.filter(product => brands.includes(product.brand))
      .map(product => product.model);

    return [...new Set(modelsForSelectedBrands)];
  };

  // BRAND
  const uniqueBrands = useMemo(() => {
    return [...new Set(reduxFilter?.product?.map(product => product.brand))];
  }, [reduxFilter?.product]);

  const filteredBrands = uniqueBrands
    .filter(brand =>
      brand.toLowerCase().includes(searchOne.value.toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b));

  // MODEL
  const uniqueModels = useMemo(() => {
    return getModelsByBrands(selectedBrands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduxFilter?.product, selectedBrands]);

  const filteredModels = uniqueModels
    .filter(model =>
      model.toLowerCase().includes(searchTwo.value.toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b));

  const handleBrandSelection = (brand: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        setSelectedModels([]);
        return prev.filter(b => b !== brand);
      } else {
        setSelectedModels([]);
        return [...prev, brand];
      }
    });
  };
  const handleModelSelection = (model: string) => {
    setSelectedModels(prev => {
      if (prev.includes(model)) {
        return prev.filter(m => m !== model);
      } else {
        return [...prev, model];
      }
    });
  };

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option);
  };

  const setReduxFilters = () => {
    dispatch(
      setFilter({
        order: selectedSortOption,
        brands: selectedBrands,
        models: selectedModels,
      }),
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sort By</Text>
          {sortOptions.map(option => (
            <TouchableOpacity
              key={option.value}
              style={styles.sortByOption}
              activeOpacity={0.8}
              onPress={() => handleSortChange(option.value)}>
              <View style={styles.optionIndicator}>
                <View
                  style={[
                    styles.indicatorInner,
                    selectedSortOption === option.value
                      ? {backgroundColor: colors.primary.main}
                      : null,
                  ]}
                />
              </View>
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>
          <View style={styles.inputContainer}>{searchOne.textInputView()}</View>
          <ScrollView nestedScrollEnabled={true} style={styles.brandScroll}>
            {filteredBrands.map(brand => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={brand}
                style={styles.brandOption}
                onPress={() => handleBrandSelection(brand)}>
                <View
                  style={[
                    styles.brandIndicator,
                    {
                      backgroundColor: selectedBrands.includes(brand)
                        ? colors.primary.main
                        : colors.constant.white,
                    },
                  ]}>
                  {selectedBrands.includes(brand) && <Correct />}
                </View>
                <Text style={styles.brandText}>{brand}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.sectionTwo}>
          <Text style={styles.sectionTitle}>Model</Text>
          <View style={styles.inputContainer}>{searchTwo.textInputView()}</View>
          <ScrollView nestedScrollEnabled={true} style={styles.modelScroll}>
            {filteredModels.map(model => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={model}
                onPress={() => handleModelSelection(model)}
                style={styles.modelOption}>
                <View
                  style={[
                    styles.modelIndicator,
                    {
                      backgroundColor: selectedModels.includes(model)
                        ? colors.primary.main
                        : colors.constant.white,
                    },
                  ]}>
                  {selectedModels.includes(model) && <Correct />}
                </View>
                <Text style={styles.modelText}>{model}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={setReduxFilters}
        style={[
          styles.button,
          {
            marginBottom: insets.bottom,
          },
        ]}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
