import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

type Props = {
  children: ReactNode;
};

export const RouterWrapper: NextPage<Props> = ({ children }) => {
  const router = useRouter();

  return <>{children}</>;
};
