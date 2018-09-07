'use strict'

const test = require('tap').test
const prettyFactory = require('../')

const logLine = '{"level":30,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo","v":1}\n'

test('crlf', (t) => {
  t.test('uses LF by default', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const formatted = pretty(logLine)
    t.is(formatted.substr(-2), 'd\n')
  })

  t.test('can use CRLF', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ crlf: true })
    const formatted = pretty(logLine)
    t.is(formatted.substr(-3), 'd\r\n')
  })

  t.end()
})
