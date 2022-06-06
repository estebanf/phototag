/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { css, SerializedStyles, jsx, useTheme } from '@emotion/react';
import { useAuth } from '@8base-react/auth';
import { useAssets, useGlobalState } from 'providers';
import {
  LoginPage,
  ClientsPage,
  HomePage,
  ProjectsPage,
  AssetsManagerPage,
  ImageSearchPage,
  TagsPage,
  ReleasePage,
  DownloadsPage,
  CampaignsPage,
  ProjectClientsPage,
  SettingsPage,
} from 'pages';
import { AddNewProjectDialog } from 'dialogs';
import {
  Root,
  RootLayoutsContainer,
  EmptyPageLayout,
  RouterSwitchSymbol,
  PageLayout,
  NavListItemSymbol,
  ListItemIconSymbol,
  AppBarSymbol,
  GridContainerSymbol,
  GridItemSymbol,
  ListItemSymbol,
  MobileLayout,
} from 'shared/symbols';
import { Route, Box, Icon, Menu } from 'shared/components';
import {
  List,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material';

const container2CSS = css`
padding-left: 36px;
padding-top: 36px;
padding-right: 36px;
padding-bottom: 36px;
height: 100%;
background-color: rgb(244, 247, 252);
overflow: auto;
`;

const container1CSS = css`
height: 100%;
display: flex;
flex-direction: column;
`;

const container4CSS = css`
padding-top: 9px;
padding-left: 9px;
padding-bottom: 9px;
padding-right: 9px;
margin-top: 20px;
margin-bottom: 54px;
`;

const container3CSS = css`
overflow: hidden;
`;

const image1CSS = css`
height: 45px;
width: auto;
display: block;
margin-left: 5px;
margin-right: auto;
`;

const list1CSS = css`

padding-left: 9px;
padding-top: 9px;
padding-right: 9px;
padding-bottom: 9px;
`;

const icon9CSS = css`
margin-right: 32px;
`;

const icon10CSS = css`
margin-right: 32px;
`;

const icon11CSS = css`
margin-right: 32px;
`;

const icon12CSS = css`
margin-right: 32px;
`;

const icon13CSS = css`
margin-right: 32px;
`;

const icon14CSS = css`
margin-right: 32px;
`;

const icon15CSS = css`
margin-right: 32px;
`;

const icon16CSS = css`
margin-right: 32px;
`;

const icon17CSS = css`
margin-right: 32px;
`;

const container5CSS = css`
    flex-grow: 1;
`;

const container6CSS = css`

display: flex;
flex-direction: column;
`;

const list2CSS = css`
padding-left: 10px;
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
`;

const icon18CSS = css`
margin-right: 32px;
`;

const typography1CSS = css`
margin-left: 8px;
`;

const icon1CSS = css`
margin-right: 10px;
`;

const container9CSS = css`
border-left: 1px solid #F1F3F4;
padding-left: 10px;
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
`;

const container10CSS = css`
margin-left: 16px;
`;

const typography2CSS = css`
font-weight: 500;
`;

const menuTargetCSS = css`
display: inline-flex;
justify-content: center;
min-width: 36px;
min-height: 36px;
`;

const containerCSS = css`
flex-grow: 1;
`;

const footerCSS = css`
height: 56px;
`;

export const RootContent: React.FC = () => {
  const history = useHistory();
  const theme: any = useTheme();
  const auth = useAuth();
  const assets = useAssets();
  const { userQuery, layoutLeftMenu } = useGlobalState();

  return (
    <Root dialogs={<AddNewProjectDialog />}>
      <RootLayoutsContainer
        layouts={
          <Fragment>
            <EmptyPageLayout
              content={
                <RouterSwitchSymbol
                  routes={
                    <Route path={['/login']} authAccess="any" exact={true}>
                      <LoginPage />
                    </Route>
                  }
                />
              }
              path={['/login']}
              exact={true}
            />
            <PageLayout
              content={
                <Box css={container2CSS}>
                  <RouterSwitchSymbol
                    routes={
                      <Fragment>
                        <Route
                          path={['/clients']}
                          authAccess="private"
                          exact={true}
                        >
                          <ClientsPage />
                        </Route>
                        <Route path={['/']} authAccess="private" exact={true}>
                          <HomePage />
                        </Route>
                        <Route
                          path={['/projects']}
                          authAccess="any"
                          exact={true}
                        >
                          <ProjectsPage />
                        </Route>
                        <Route
                          path={['/assets-manager']}
                          authAccess="private"
                          exact={true}
                        >
                          <AssetsManagerPage />
                        </Route>
                        <Route
                          path={['/image-search']}
                          authAccess="any"
                          exact={true}
                        >
                          <ImageSearchPage />
                        </Route>
                        <Route
                          path={['/tags', '/tags/settings']}
                          authAccess="any"
                          exact={true}
                        >
                          <TagsPage />
                        </Route>
                        <Route
                          path={['/releases']}
                          authAccess="any"
                          exact={true}
                        >
                          <ReleasePage />
                        </Route>
                        <Route
                          path={['/downloads']}
                          authAccess="any"
                          exact={true}
                        >
                          <DownloadsPage />
                        </Route>
                        <Route
                          path={['/campaign']}
                          authAccess="any"
                          exact={true}
                        >
                          <CampaignsPage />
                        </Route>
                        <Route
                          path={['/project/:projectid/client/:clientid']}
                          authAccess="any"
                          exact={true}
                        >
                          <ProjectClientsPage />
                        </Route>
                        <Route
                          path={['/settings']}
                          authAccess="any"
                          exact={true}
                        >
                          <SettingsPage />
                        </Route>
                      </Fragment>
                    }
                  />
                </Box>
              }
              leftMenu={
                <Box css={container1CSS} display="flex" flexDirection="column">
                  <Box css={container4CSS}>
                    <Box css={container3CSS}>
                      <img
                        css={image1CSS}
                        src="https://images.squarespace-cdn.com/content/v1/5fa55a49d436c94b30e35bf8/1604672366093-41WTSXAVHKB5ZQZ26V08/v1-tags-horizontal-white%403x.png?format=1500w"
                        width={100}
                      />
                    </Box>
                  </Box>
                  <List css={list1CSS}>
                    <NavListItemSymbol
                      path="/"
                      exact={true}
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#ffffff"
                      selectedIconColor="#ffffff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon9CSS}
                          name="Home"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Home</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/clients"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#ffffff"
                      selectedIconColor="#ffffff"
                      color=""
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon10CSS}
                          name="Accessibility"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Clients</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/projects"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#ffffff"
                      selectedIconColor="#ffffff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon11CSS}
                          name="Weekend"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Projects</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/assets-manager"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#fff"
                      selectedIconColor="#fff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon12CSS}
                          name="Book"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Asset Manager</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/image-search"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#fff"
                      selectedIconColor="#fff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon13CSS}
                          name="ImageSearch"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Image Search</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/tags"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#fff"
                      selectedIconColor="#fff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon14CSS}
                          name="Backspace"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Tags</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/releases"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#fff"
                      selectedIconColor="#fff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon15CSS}
                          name="Contacts"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Releases</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/downloads"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#fff"
                      selectedIconColor="#fff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon16CSS}
                          name="ArrowDownward"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Downloads</ListItemText>}
                    />
                    <NavListItemSymbol
                      path="/campaign"
                      iconColor="#b3afaf"
                      selectedBackgroundColor={theme.palette.primary.main}
                      selectedColor="#fff"
                      selectedIconColor="#fff"
                      disableRipple={true}
                      startIcon={
                        <ListItemIconSymbol
                          css={icon17CSS}
                          name="Speed"
                          variant="filled"
                          color="inherit"
                          fontSize="default"
                          viewBox="0 0 24 24"
                        />
                      }
                      listItemText={<ListItemText>Campaigns</ListItemText>}
                    />
                  </List>
                  <Box
                    css={container5CSS}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    flex="1"
                  >
                    <Box css={container6CSS}>
                      <List css={list2CSS}>
                        <NavListItemSymbol
                          path="/settings"
                          iconColor="#b3afaf"
                          selectedBackgroundColor={theme.palette.primary.main}
                          selectedColor="#fff"
                          selectedIconColor="#fff"
                          disableRipple={true}
                          startIcon={
                            <ListItemIconSymbol
                              css={icon18CSS}
                              name="Settings"
                              variant="filled"
                              color="inherit"
                              fontSize="default"
                              viewBox="0 0 24 24"
                            />
                          }
                          listItemText={<ListItemText>Settings</ListItemText>}
                        />
                      </List>
                    </Box>
                  </Box>
                </Box>
              }
              header={
                <AppBarSymbol
                  appBarProps={{ color: 'inherit', position: 'relative' }}
                >
                  <GridContainerSymbol justifyContent="space-between">
                    <GridItemSymbol xs="auto">
                      <Box display="flex" alignItems="center">
                        <IconButton
                          onClick={(event) => {
                            if (layoutLeftMenu.isOpened) {
                              layoutLeftMenu.close();
                            } else {
                              layoutLeftMenu.open();
                            }
                          }}
                          color="default"
                          size="medium"
                        >
                          <Icon
                            name="Dehaze"
                            variant="filled"
                            color="action"
                            fontSize="medium"
                            viewBox="0 0 24 24"
                          />
                        </IconButton>
                        <Typography
                          css={typography1CSS}
                          variant="subtitle1"
                          align="inherit"
                          color="initial"
                          paragraph={false}
                        >
                          Home
                        </Typography>
                      </Box>
                    </GridItemSymbol>
                    <GridItemSymbol xs="auto">
                      <Box display="flex" alignItems="center">
                        <Icon
                          css={icon1CSS}
                          name="Notifications"
                          variant="filled"
                          color="action"
                          fontSize="medium"
                          viewBox="0 0 24 24"
                        />
                        <Box css={container9CSS} display="flex">
                          <Avatar
                            css={css`
background-color: ${theme.palette.primary.main};
`}
                            variant="circular"
                          />
                          <Box
                            css={container10CSS}
                            display="flex"
                            flexDirection="column"
                          >
                            <Typography
                              css={typography2CSS}
                              variant="body1"
                              align="inherit"
                              color="initial"
                              paragraph={false}
                            >
                              {(userQuery.data.firstName ?? '') +
                                '  ' +
                                (userQuery.data.lastName ?? '')}
                            </Typography>
                            <Typography
                              variant="caption"
                              align="inherit"
                              color="initial"
                              paragraph={false}
                            >
                              Administrator
                            </Typography>
                          </Box>
                        </Box>
                        <Menu
                          target={
                            <div css={menuTargetCSS}>
                              <IconButton color="default" size="medium">
                                <Icon name="KeyboardArrowDown" />
                              </IconButton>
                            </div>
                          }
                          content={(popupState) => (
                            <Fragment>
                              <ListItemSymbol
                                onClick={(event) => {
                                  auth?.authClient?.logout?.();
                                  history.push('/login');
                                  apolloClient?.clearStore();
                                }}
                                button={true}
                                listItemText={
                                  <ListItemText>Logout</ListItemText>
                                }
                              />
                            </Fragment>
                          )}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          elevation={4}
                        />
                      </Box>
                    </GridItemSymbol>
                  </GridContainerSymbol>
                </AppBarSymbol>
              }
              drawerOpen={layoutLeftMenu.isOpened}
              drawerOpenWidth={242}
              drawerClosedWidth={75}
              drawerAnchor="left"
              drawerVariant="permanent"
              drawerOnClose={layoutLeftMenu.close}
              path={[
                '/',
                '/clients',
                '/projects',
                '/assets-manager',
                '/image-search',
                '/tags',
                '/releases',
                '/downloads',
                '/campaign',
                '/tags/settings',
                '/project/:projectid/client/:clientid',
                '/settings',
              ]}
              exact={true}
            />
            <MobileLayout
              header={
                <AppBarSymbol
                  appBarProps={{ color: 'transparent', position: 'relative' }}
                />
              }
              content={
                <Box css={containerCSS}>
                  <RouterSwitchSymbol />
                </Box>
              }
              footer={<Box css={footerCSS} htmlElement="footer" />}
              path={[]}
              exact={true}
            />
          </Fragment>
        }
      />
    </Root>
  );
};
