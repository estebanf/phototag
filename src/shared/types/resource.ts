import { ValueOf } from './common';
import { ResourceEndpoint } from './aliases';

export const RESOURCE_TYPES = {
  backend8base: 'backend8base',
  graphql: 'graphql',
} as const;

export type ResourceTypes = ValueOf<typeof RESOURCE_TYPES>;

export const RESOURCE_NAMES = {
  eightBase: 'eightBase',
  gqlBackend_1: 'gqlBackend_1',
} as const;

export type ResourceNames = ValueOf<typeof RESOURCE_NAMES>;

export type Resource = {
  name: ResourceNames;
  endpoint: ResourceEndpoint;
  type: ResourceTypes;
};

export type ResourceList = Record<ResourceNames, Resource>;
