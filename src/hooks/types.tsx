import React from 'react';

export interface UseTextInputReturnProps {
  textInputView: () => React.ReactElement;
  valueChangeHandler: (newValue: string) => void;
  isTouched: boolean;
  hasError: boolean;
  value: string;
}
