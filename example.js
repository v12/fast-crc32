'use strict';

const crc32 = require('.'),
      http  = require('http');

http.get('http://example.com',
    response => crc32.calculateFromStream(response)
        .then(checksum => console.log('CRC32C: ' + checksum.toString(16)))
        .catch(error => console.error('Unable to calculate CRC32C', error)));
