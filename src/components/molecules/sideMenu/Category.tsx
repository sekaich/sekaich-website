import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Collapse, List, ListItemButton, ListItemText, Stack } from '@mui/material';
import { Icon } from 'components/atoms/Icon';
import { CategoryItem, IconType } from 'types/domain';

type Props = {
  id: number;
  categoryTitle: string;
  categoryPath: string;
  iconType: IconType;
  categoryItem: CategoryItem[];
  mission: boolean;
};

export const Category: FC<Props> = ({
  id,
  categoryTitle,
  categoryPath,
  iconType,
  categoryItem,
  mission,
}) => {
  const router = useRouter();
  const [menuOpenFlg, setMenuOpenFlg] = React.useState(true);

  const menuOpen = () => {
    setMenuOpenFlg(!menuOpenFlg);
  };

  const menuRouter = async (categoryPath: string) => {
    await router.push(categoryPath);
  };

  const getEndPath = (pathname: string) => {
    const splitPath = pathname.split('/').filter((e) => Boolean(e));
    return splitPath[splitPath.length - 1];
  };

  return (
    <>
      <StyledWrapper>
        <List>
          {categoryItem.length > 0 && (
            <List className="category-body" component="div">
              {categoryItem.map((e) => (
                <Link href={e.path} passHref={true} key={e.id}>
                  <ListItemButton
                    className={`${
                      getEndPath(router.pathname) &&
                      getEndPath(router.pathname).match(getEndPath(e.path)) &&
                      'selected'
                    }`}>
                    <Stack className="body-text" direction="row" alignItems="center">
                      <span className="step">{`7373`}</span>
                      <ListItemText primary={e.name} />
                    </Stack>
                  </ListItemButton>
                </Link>
              ))}
            </List>
          )}
        </List>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .MuiList-root {
    padding: unset;
    .category-title {
      display: flex;
      padding: 12px 0px 8px 4px;
      border-top: solid 1px #cecece;
      border-bottom: dotted #cecece;
      .title-text {
        margin-right: auto;
        padding-left: 10px;
        .mission {
          color: #009845;
          font-size: 14px;
          font-weight: bold;
          line-height: 1;
          letter-spacing: 1.4px;
        }
        .MuiListItemText-root {
          margin: unset;
        }
        .MuiListItemText-primary {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
    .category-body {
      padding: 12px 0;
      .MuiListItemButton-root {
        padding: 4px 0 0 60px;
        &:hover {
          border-radius: 2px;
        }
        .body-text {
          z-index: 1;
          .step {
            position: absolute;
            margin-left: -54px;
            color: #009845;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 1.4px;
          }
          .MuiListItemText-primary {
            color: #868686;
            font-size: 14px;
            font-weight: bold;
          }
        }
        &.selected {
          &:hover {
            background-color: unset;
          }
          .MuiTouchRipple-root {
            display: flex;
            align-items: center;
            width: 108%;
          }
          .MuiTouchRipple-root:before {
            z-index: 0;
            content: '';
            display: block;
            position: absolute;
            left: 0;
            width: 88%;
            height: 34px;
            border-radius: 3px 0 0 3px;
            background: #d2ef18;
          }
          .MuiTouchRipple-root:after {
            z-index: -1;
            content: '';
            display: block;
            position: absolute;
            right: 19px;
            width: 26px;
            height: 26px;
            border-radius: 3px;
            background: #d2ef18;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
`;
