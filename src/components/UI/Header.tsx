import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Svg
import Close from '@assets/svg/Close.svg';
import Back from '@assets/svg/Back.svg';

// Constant
import {headerHeight} from '@src/constants/dimensions';

// Type
import {HeaderProps} from './types';

const Header = ({
  leftOptions,
  rightOptions,
  style,
  presentation,
  insetTop,
  textOptions,
}: HeaderProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const containerStyle = StyleSheet.flatten(style);

  const leftIconClick: () => void = () =>
    leftOptions?.iconClick ? leftOptions.iconClick?.() : navigation?.goBack();

  const rightIconClick: () => void = () =>
    rightOptions?.iconClick ? rightOptions.iconClick?.() : () => {};

  const marginTop: number = containerStyle?.marginTop
    ? +containerStyle.marginTop
    : 0;
  const paddingTop: number = containerStyle?.paddingTop
    ? insetTop
      ? +containerStyle.paddingTop + insets.top
      : +containerStyle.paddingTop
    : insetTop
    ? insets.top
    : 0;

  const iconOptions: {
    stroke: string;
    strokeWidth: number;
    fill: string;
  } = {
    stroke:
      leftOptions && leftOptions.strokeOptions?.color
        ? leftOptions.strokeOptions.color
        : 'gray',
    strokeWidth:
      leftOptions && leftOptions.strokeOptions?.width
        ? leftOptions.strokeOptions.width
        : 0,
    fill:
      leftOptions && leftOptions.fillOptions?.color
        ? leftOptions.fillOptions.color
        : 'transparent',
  };

  const leftShown =
    leftOptions !== undefined
      ? leftOptions.shown !== undefined
        ? leftOptions.shown
        : true
      : true;
  const rightShown = rightOptions && rightOptions.shown;
  const textShown = textOptions && textOptions.shown;

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          marginTop: marginTop,
          paddingTop: paddingTop,
          height: insetTop
            ? containerStyle.height
              ? insets.top + +containerStyle.height
              : insets.top + headerHeight
            : headerHeight,
        },
      ]}>
      {leftShown && (
        <TouchableOpacity
          style={[styles.left, leftOptions !== undefined && leftOptions.style]}
          hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
          activeOpacity={0.7}
          onPress={leftIconClick}>
          {leftOptions?.icon ? (
            leftOptions.icon
          ) : presentation === 'close' ? (
            <Close
              width={leftOptions?.width ? leftOptions?.width : 14}
              height={leftOptions?.height ? leftOptions?.width : 14}
              {...iconOptions}
            />
          ) : (
            <Back
              width={leftOptions?.width ? leftOptions?.width : 14}
              height={leftOptions?.height ? leftOptions?.width : 14}
              {...iconOptions}
            />
          )}
        </TouchableOpacity>
      )}
      {textShown && (
        <View style={[styles.titleContainer, textOptions.containerStyle]}>
          {!textOptions.component ? (
            <Text numberOfLines={1} style={textOptions.style}>
              {textOptions?.title && textOptions?.title?.length > 22
                ? textOptions.title?.slice(0, 22) + '...'
                : textOptions.title}
            </Text>
          ) : (
            textOptions?.component
          )}
        </View>
      )}
      {rightShown && (
        <TouchableOpacity
          style={[
            styles.right,
            rightOptions !== undefined && rightOptions.style,
          ]}
          hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
          activeOpacity={0.7}
          onPress={rightIconClick}>
          <>{rightOptions && rightOptions.icon}</>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    left: 16,
    zIndex: 1,
    marginRight: -15,
    justifyContent: 'center',
  },
  right: {
    right: 16,
    zIndex: 1,
    marginLeft: -15,
    justifyContent: 'center',
  },
});

export default Header;
