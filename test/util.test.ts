import { describe, it } from 'node:test';
import assert from 'node:assert';
import { IncomingMessage } from 'node:http';
import httpMocks from 'node-mocks-http';
import { getCacheKeyFromRequest } from '../src/lib/util';

describe('utils.ts test', () => {

    describe('getCacheKeyFromRequest() test', () => {
        
        it('Should return correct key', () => {

            const request = httpMocks.createRequest({
                method: 'GET',
                url: '/testing?id=42',
                query: {
                    id: 42
                }
            });
    
            const keyKache = getCacheKeyFromRequest(request);
        
            assert.strictEqual(
                keyKache,
                '/testing/id:42'
            );
        });
    })

});