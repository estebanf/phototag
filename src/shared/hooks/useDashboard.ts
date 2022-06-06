import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';

const DASHBOARD = gql`query Dashboard($liveProjectFilter: ProjectFilter, $completedProjectFilter: ProjectFilter, $totalApprovedPhotoFilter: PhotoFilter) {
  liveProjects: projectsList(filter: $liveProjectFilter) {
    count
    __typename
  }
  completedProjects: projectsList(filter: $completedProjectFilter) {
    count
    __typename
  }
  totalPhotos: photosList {
    count
    __typename
  }
  totalApprovedPhotos: photosList(filter: $totalApprovedPhotoFilter) {
    count
    __typename
  }
}`;

export const useDashboard = () => {
  const queryResult = useQuery(DASHBOARD, {
    variables: {
      completedProjectFilter: { status: { in: ['APPROVED'] } },
      liveProjectFilter: { status: { in: ['PENDING'] } },
      totalApprovedPhotoFilter: { status: { in: ['ACCEPTED'] } },
    },
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    notifyOnNetworkStatusChange: true,
  });

  return queryResult;
};
