import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FormControl, IconButton, Stack, TextField, Typography } from '@mui/material';
import {
  ArrowDownward,
  ArrowUpward,
  CheckBox,
  Close,
  RadioButtonChecked,
} from '@mui/icons-material';
import { Button } from 'components/atoms/Button';
import { Icon } from 'components/atoms/Icon';
import { SurveyItem, SurveyItemParts } from 'types/api';

type Props = {
  itemList: SurveyItem[];
  itemIndex: number;
  setItemList: Dispatch<SetStateAction<SurveyItem[]>>;
  editParts: (partsIndex: number, value: string) => void;
  addParts: (other?: 'その他') => void;
  deleteParts: (partsIndex: number) => void;
  validateParts: boolean;
  toggleOtherParts: (value: boolean) => void;
};

export const ChoicesForm: FC<Props> = ({
  itemList,
  itemIndex,
  setItemList,
  editParts,
  addParts,
  deleteParts,
  validateParts,
  toggleOtherParts,
}) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLDivElement>(null);
  const [partsCount, setPartsCount] = useState<number>(
    itemList[itemIndex] ? itemList[itemIndex].parts.length : 0,
  );

  const usePrevious = (item: any) => {
    const ref: React.MutableRefObject<any> = useRef(
      itemList[itemIndex] ? itemList[itemIndex].parts.length : 0,
    );
    useEffect(() => {
      ref.current = item;
    });
    return ref.current;
  };

  const prevPartsCount = usePrevious(partsCount);
  const prevRef = usePrevious(inputRef);

  useEffect(() => {
    const focus = setTimeout(() => {
      if (prevPartsCount !== partsCount && prevRef.current === inputRef.current) {
        inputRef.current?.focus({
          preventScroll: true,
        });
      }
    }, 100);

    return () => {
      clearTimeout(focus);
    };
  }, [itemList, itemIndex, partsCount, prevPartsCount, prevRef]);

  const replaceParts = (partsIndex: number, upDown: 'up' | 'down') => {
    const replacement = (
      array: SurveyItemParts[],
      beforeIndex: number,
      afterIndex: number,
    ) => {
      const result = [...array];
      [result[afterIndex], result[beforeIndex]] = [array[beforeIndex], array[afterIndex]];
      return result;
    };

    if (upDown === 'up') {
      itemList[itemIndex].parts = replacement(
        itemList[itemIndex].parts,
        partsIndex,
        partsIndex - 1,
      );
    } else {
      itemList[itemIndex].parts = replacement(
        itemList[itemIndex].parts,
        partsIndex,
        partsIndex + 1,
      );
    }
    setItemList([...itemList]);
    setPartsCount(partsCount + 1);
  };

  const emptyCheck = () => {
    return itemList[itemIndex].parts.some((parts) => parts.data === '');
  };

  const maxCountCheck = () => {
    switch (itemList[itemIndex].type) {
      case 'radio':
        if (itemList[itemIndex].parts.length < 15) {
          return true;
        }
        break;
      case 'checkbox':
        if (itemList[itemIndex].parts.length < 15) {
          return true;
        }
        break;
      case 'pulldown':
        if (itemList[itemIndex].parts.length < 50) {
          return true;
        }
        break;
      default:
        return false;
    }
  };

  return (
    <>
      <StyledFormControl>
        {itemList[itemIndex].parts.map((parts, index) => (
          <Stack className='parts' key={parts.id} direction='row' alignItems='center'>
            {itemList[itemIndex].type === 'radio' && (
              <div className='icon'>
                <RadioButtonChecked color='primary' />
              </div>
            )}
            {itemList[itemIndex].type === 'checkbox' && (
              <div className='icon'>
                <CheckBox color='primary' />
              </div>
            )}
            {itemList[itemIndex].type === 'pulldown' && (
              <div className='icon'>
                <Icon iconType='pulldown' iconSize='sm' style={{ margin: '3px' }} />
              </div>
            )}
            <TextField
              className={`input-text ${
                focusedIndex === index && validateParts && 'validate'
              }`}
              value={parts.data}
              onChange={(e) => editParts(index, e.target.value)}
              placeholder={`選択肢${index + 1}`}
              fullWidth
              key={`${parts.id}_textfield`}
              error={validateParts}
              disabled={
                (focusedIndex !== index && validateParts) ||
                (focusedIndex !== index && emptyCheck())
              }
              inputRef={inputRef}
              inputProps={{ maxLength: 100 }}
              onFocus={() => {
                setFocusedIndex(index);
              }}
            />
            {focusedIndex === index && validateParts && (
              <div className='validate-text'>
                <span>同一の選択肢を使用することはできません</span>
                <Icon iconType='warning' />
              </div>
            )}
            {focusedIndex === index && (
              <>
                <IconButton
                  onClick={() => deleteParts(index)}
                  disabled={itemList[itemIndex].parts.length === 1 || validateParts}>
                  <Close />
                </IconButton>
                <IconButton
                  onClick={() => {
                    replaceParts(index, 'down');
                    setFocusedIndex(index + 1);
                  }}
                  disabled={
                    focusedIndex !== index ||
                    validateParts ||
                    index === itemList[itemIndex].parts.length - 1 ||
                    emptyCheck()
                  }>
                  <ArrowDownward />
                </IconButton>
                <IconButton
                  onClick={() => {
                    replaceParts(index, 'up');
                    setFocusedIndex(index - 1);
                  }}
                  disabled={
                    focusedIndex !== index || validateParts || index === 0 || emptyCheck()
                  }>
                  <ArrowUpward />
                </IconButton>
              </>
            )}
          </Stack>
        ))}
        {itemList[itemIndex].partsOther && (
          <Stack className='parts other' direction='row' alignItems='center'>
            <Typography>その他：</Typography>
            <TextField
              placeholder='テキスト入力欄'
              disabled={true}
              sx={{ background: '#f2f2f2' }}
            />
            <IconButton onClick={() => toggleOtherParts(false)}>
              <Close />
            </IconButton>
          </Stack>
        )}
        {maxCountCheck() && (
          <Stack className='parts-control' direction='row' alignItems='center'>
            <Button
              label='選択肢を追加'
              classes='add-button'
              onClick={() => {
                addParts();
                setFocusedIndex(itemList[itemIndex].parts.length - 1);
                console.log(itemList[itemIndex].parts.length, focusedIndex);
              }}
              disabled={validateParts || emptyCheck()}
            />
            {!itemList[itemIndex].partsOther && (
              <>
                <Typography sx={{ margin: '0 8px' }}>または</Typography>
                <Button
                  label='「その他」を追加'
                  classes='add-button'
                  onClick={() => {
                    toggleOtherParts(true);
                    setFocusedIndex(itemList[itemIndex].parts.length - 1);
                  }}
                  disabled={validateParts || emptyCheck()}
                />
              </>
            )}
          </Stack>
        )}
      </StyledFormControl>
    </>
  );
};

const StyledFormControl = styled(FormControl)`
  .parts {
    &.other {
      padding-left: 42px;
      .MuiInputBase-root {
        background: #f2f2f2;
      }
    }
    .MuiTypography-root {
      color: rgba(0, 0, 0, 0.87);
      font-weight: bold;
    }
    :not(:last-child) {
      padding-bottom: 16px;
    }
    .icon {
      padding: 0 9px 0 9px;
    }
  }

  .input-text {
    width: 80%;
    .Mui-focused {
      &:before {
        content: '';
        position: absolute;
        width: 6px;
        height: 100%;
        background: #009845;
        left: -42px;
      }
    }
  }

  .validate {
    fieldset {
      background: #ffc1072b;
    }
  }

  .validate-text {
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 29vw;
    margin-top: -49px;
    padding: 0 6px;
    font-size: 13px;
    font-weight: bold;
    background: linear-gradient(
      to bottom,
      #f2f2f2 0%,
      #f2f2f2 63%,
      #fff4dd 65%,
      #fff4dd 100%
    );

    span {
      padding-right: 8px;
    }
  }

  .parts-control {
    padding-left: 42px;
  }
`;
