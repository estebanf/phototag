import {
  RESOURCE_TYPES,
  RESOURCE_NAMES,
  ResourceList,
  Resource,
} from '../types';

export const APP_AUTH_RESOURCE: Resource = {
  name: RESOURCE_NAMES.eightBase,
  endpoint: 'https://api.8base.com/ckoskvcd0000001mj7j2i4z0z',
  type: RESOURCE_TYPES.backend8base,
} as const;

export const RESOURCES_LIST: ResourceList = {
  [APP_AUTH_RESOURCE.name as typeof RESOURCE_NAMES.eightBase]: APP_AUTH_RESOURCE,
  gqlBackend_1: {
    name: RESOURCE_NAMES.gqlBackend_1,
    endpoint: 'https://api.8base.com/cl1bddz01054k09jl13u2cmf8',
    type: RESOURCE_TYPES.graphql,
  },
};
