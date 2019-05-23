import { lengthOfLongestSubstring } from './longest-substring-without-repeating';

describe('Longest Substring Without Repeating Characters', () => {
  test('Should return 3 for abcabcbb', () => {
      expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  })

  test('Should return 1 for bbbbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbbbb')).toEqual(1);
  })

  test('Should return 3 for pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  })

  test('Should return 6 for fotpqsf', () => {
    expect(lengthOfLongestSubstring('fotpqsf')).toEqual(6);
  })

  test('Should return 7 for acbcnjtrs', () => {
    expect(lengthOfLongestSubstring('acbcnjtrs')).toEqual(7);
  })
});
