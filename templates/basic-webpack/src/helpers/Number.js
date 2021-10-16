/**
 * Number helpers
 */
import React from 'react';

export function ordinalSuffixOf(i, tag = true) {
  const j = i % 10;
  const k = i % 100;
  let sfx = 'th';
  if (j === 1 && k !== 11) {
    sfx = 'st';
  }
  if (j === 2 && k !== 12) {
    sfx = 'nd';
  }
  if (j === 3 && k !== 13) {
    sfx = 'rd';
  }
  return tag ? (
    <span>
      {i} <sup>{sfx}</sup>
    </span>
  ) : (
    `${i}${sfx}`
  );
}
