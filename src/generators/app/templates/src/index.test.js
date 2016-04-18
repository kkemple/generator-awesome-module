import test from 'tape'

import { myModule } from './index'

test('myModule()', (assert) => {
  assert.equal(myModule(), '<%= moduleName %>', 'should return module name')
  assert.end()
})
