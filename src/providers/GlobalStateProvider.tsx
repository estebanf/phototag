import React, { createContext, useContext } from 'react';

import {
  useRequest,
  useTestRequest,
  useProjectsState,
  useUserQuery,
  useOpenCloseState,
  useClientsQuery,
  useArrayState,
  useCreateProjectMutation,
  useStringState,
  useNumberState,
} from 'shared/hooks';

type GlobalState = Record<string, any>;

const GlobalStateContext = createContext<GlobalState>({});

export const GlobalStateProvider: React.FC = ({ children }) => {
  const projectsState = useProjectsState();
  const userQuery = useUserQuery();
  const addNewProjectModal = useOpenCloseState(false);
  const layoutLeftMenu = useOpenCloseState(true);
  const clientsQuery = useClientsQuery();
  const projectCatagoryOptions = useArrayState([
    { value: 'Aerial', label: 'Aerial' },
    { value: 'Advertising', label: 'Advertising' },
    { value: 'Agriculture', label: 'Agriculture' },
    { value: 'Architecture', label: 'Architecture' },
    { value: 'Brand Narrative', label: 'Brand Narrative' },
    { value: 'Breaking News', label: 'Breaking News' },
    { value: 'Commercial', label: 'Commercial' },
    { value: 'Conflict/Crisis', label: 'Conflict/Crisis' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Education', label: 'Education' },
    { value: 'Editorial/Documentary', label: 'Editorial/Documentary' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Events', label: 'Events' },
    { value: 'Food/Drink', label: 'Food/Drink' },
    { value: 'Health Care', label: 'Health Care' },
    { value: 'Home', label: 'Home' },
    { value: 'Hospitality', label: 'Hospitality' },
    { value: 'Humanitarian', label: 'Humanitarian' },
    { value: 'Interiors', label: 'Interiors' },
    { value: 'Infrastructure', label: 'Infrastructure' },
    { value: 'Landscape', label: 'Landscape' },
    { value: 'Lifestyle', label: 'Lifestyle' },
    { value: 'Music', label: 'Music' },
    { value: 'Product', label: 'Product' },
    { value: 'Real Estate', label: 'Real Estate' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Supply Chain', label: 'Supply Chain' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Work', label: 'Work' },
  ]);
  const projectUsageTypeOptions = useArrayState([
    { value: 'DOCUMENTARY', label: 'Editorial/Documentary' },
    { value: 'COMERCIAL', label: 'Commercial' },
  ]);
  const projectServiceLevelOptions = useArrayState([
    { value: 'AUTOMATED', label: 'Automated' },
    { value: 'CURATED', label: 'Curated' },
    { value: 'CUSTOM', label: 'Custom' },
  ]);
  const createProjectMutation = useCreateProjectMutation();
  const projectsQueryString = useStringState('');
  const projectsPageSize = useNumberState(5);

  return (
    <GlobalStateContext.Provider
      value={{
        projectsState,
        userQuery,
        addNewProjectModal,
        layoutLeftMenu,
        clientsQuery,
        projectCatagoryOptions,
        projectUsageTypeOptions,
        projectServiceLevelOptions,
        createProjectMutation,
        projectsQueryString,
        projectsPageSize,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalState => {
  return useContext(GlobalStateContext);
};
