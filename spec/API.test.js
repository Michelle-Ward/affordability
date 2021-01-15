import frisby from 'frisby';
import { describe, it } from 'mocha';

describe('server', () => {
  it('should be running', () => frisby
    .get('http://localhost:3000')
    .expect('status', 200));
});
