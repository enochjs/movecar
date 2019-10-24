import fetch from 'isomorphic-fetch';

import { Toast } from '@nutui/nutui';

export function fetchJSON(url, params) {
  const fetchparam = {
    ...params,
    credentials: 'include',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      ...params.headers,
    },
  };

  return fetch(url, fetchparam)
    .then((resp) => {
      if (resp.status === 404) {
        Toast.fail('interface not found!');
      }
      if (resp.status === 403) {
        Toast.fail('no auth error!');
      }
      return resp;
    })
    .then(resp => resp.json()).then((result) => {
      if (result.status) {
        return result.data;
      }
      return false;
    });
}

const buildParams = (obj) => {
  if (!obj) {
    return '';
  }
  const params = [];
  Object.keys(obj).forEach((key) => {
    params.push(`${key}=${obj[key]}`);
  });
  return params.join('&');
};

const fetchJSONByMethod = (method, headers) => url => (query) => {
  const params = {
    method,
    headers: headers || {},
  };
  let queryUrl = url;
  if (method === 'GET') {
    if (query) {
      queryUrl += '?';
      Object.keys(query).forEach((key) => {
        queryUrl += `&${key}=${query[key] || ''}`;
      });
    }
  } else if (typeof query === 'string') {
    params.body = query;
  } else if (headers && headers['Content-Type'] === 'application/json;charset=UTF-8') {
    params.body = JSON.stringify(query);
  } else {
    params.body = buildParams(query);
  }
  return fetchJSON(queryUrl, params);
};

export const fetchJSONByGet = fetchJSONByMethod('GET');

export const fetchJSONByPost = fetchJSONByMethod('POST');

export const fetchJSONByPut = fetchJSONByMethod('PUT');

export const fetchJSONByDelete = fetchJSONByMethod('DELETE');

export const fetchJSONStringByPost = fetchJSONByMethod('POST', { 'Content-Type': 'application/json;charset=UTF-8' });

export const fetchJSONStringByPut = fetchJSONByMethod('PUT', { 'Content-Type': 'application/json;charset=UTF-8' });
