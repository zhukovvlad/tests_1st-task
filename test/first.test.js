import health from '../src/js/health';

test.each([
  [{ health: 50 }, 'wounded'],
  [{ health: 95 }, 'healthy'],
  [{ health: 13 }, 'critical'],
  [{}, 'not defined'],
])(
  ('check health'),
  (hp, expected) => {
    const result = health(hp);

    expect(result).toBe(expected);
  },
);

/*
test('check health', () => {
  const example = { name: 'John', health: 90 };

  const expected = 'healthy';
  const received = health(example);

  expect(received).toBe(expected);
});
*/
