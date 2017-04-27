'use strict';

export const  key = '@lussatech:session';
export const host = 'http://jangkoo.com';
export default {
  auth: {
    login: function (data) {
      let url = `${host}/api/auth/signin`,
          opt = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

      return fetch(url, opt);
    },
    register: function (data) {
      let url = `${host}/auth/register`,
          opt = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

      return fetch(url, opt);
    },
    forget: function (data) {
      let url = `${host}/auth/forget`,
          opt = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

      return fetch(url, opt);
    },
    reset: function (data) {
      let url = `${host}/auth/reset`,
          opt = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

      return fetch(url, opt);
    }
  }
};
