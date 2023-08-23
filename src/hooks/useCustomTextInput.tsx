import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

// Svg
import Search from '@assets/svg/Search.svg';

// Constant
import {fontFamily} from '@src/constants';
import {colors} from '@src/constants/colors';
import {UseTextInputReturnProps} from '@src/hooks/types';

const useTextInput = (
  validateValue: (value: string) => boolean,
): UseTextInputReturnProps => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const hasError: boolean =
    value?.length > 0
      ? validateValue !== undefined
        ? !validateValue(value)
        : false
      : false;

  const valueChangeHandler = (newValue: string): void => {
    setValue(newValue);
  };

  const inputHighlightedHandler = (isHighlight: boolean): void => {
    setIsTouched(isHighlight);
  };

  const textInputView = () => {
    return (
      <>
        <TextInput
          clearButtonMode={'always'}
          style={styles.input}
          placeholderTextColor={colors.gray['600']}
          placeholder={'Search'}
          onChangeText={valueChangeHandler}
          onBlur={() => inputHighlightedHandler(false)}
          onFocus={() => inputHighlightedHandler(true)}
          value={value}
        />
        <Search style={styles.svg} />
      </>
    );
  };

  return {
    value,
    isTouched,
    hasError,
    valueChangeHandler,
    textInputView,
  };
};

const styles = StyleSheet.create({
  input: {
    color: colors.gray[400],
    fontFamily: fontFamily.montserrat['500'],
    backgroundColor: '#FBFBFB',
    fontSize: 18,
    borderRadius: 8,
    height: 40,
    paddingLeft: 44,
  },
  svg: {
    position: 'absolute',
    top: 11,
    left: 15,
  },
});

export default useTextInput;
