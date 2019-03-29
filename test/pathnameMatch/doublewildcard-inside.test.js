import { assert } from "/node_modules/@dmail/assert/index.js"
import { pathnameMatch } from "../../index.js"

{
  const actual = pathnameMatch({ pathname: "/a/b/c", pattern: "/a/**/b/c" })
  const expected = {
    matched: true,
    patternIndex: 9,
    pathnameIndex: 6,
  }
  assert({ actual, expected })
}
