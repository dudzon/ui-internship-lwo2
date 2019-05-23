import { letterCombinations } from './letter-combinations-for-numbers';

describe('Letter Combinations', () => {
  test('Should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] for 23', () => {
      expect(letterCombinations('23').sort()).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  })

  test('Should return ["tmd", "tme", "tmf", "tnd", "tne", "tnf", "tod", "toe", "tof", "umd", "ume", "umf", "und", "une", "unf", "uod", "uoe", "uof", "vmd", "vme", "vmf", "vnd", "vne", "vnf", "vod", "voe", "vof"] for 863', () => {
    expect(letterCombinations('863').sort()).toEqual(["tmd", "tme", "tmf", "tnd", "tne", "tnf", "tod", "toe", "tof", "umd", "ume", "umf", "und", "une", "unf", "uod", "uoe", "uof", "vmd", "vme", "vmf", "vnd", "vne", "vnf", "vod", "voe", "vof"]);
  })

  test('Should return [] for ""', () => {
    expect(letterCombinations('').sort()).toEqual([]);
  })

  test('Should return ["j", "k", "l"] for "5"', () => {
    expect(letterCombinations('5').sort()).toEqual(["j", "k", "l"]);
  })

  test('Should return big array for "3289"', () => {
    expect(letterCombinations('3289').sort()).toEqual(["datw","datx","daty","datz","dauw","daux","dauy","dauz","davw","davx","davy","davz","dbtw","dbtx","dbty","dbtz","dbuw","dbux","dbuy","dbuz","dbvw","dbvx","dbvy","dbvz","dctw","dctx","dcty","dctz","dcuw","dcux","dcuy","dcuz","dcvw","dcvx","dcvy","dcvz","eatw","eatx","eaty","eatz","eauw","eaux","eauy","eauz","eavw","eavx","eavy","eavz","ebtw","ebtx","ebty","ebtz","ebuw","ebux","ebuy","ebuz","ebvw","ebvx","ebvy","ebvz","ectw","ectx","ecty","ectz","ecuw","ecux","ecuy","ecuz","ecvw","ecvx","ecvy","ecvz","fatw","fatx","faty","fatz","fauw","faux","fauy","fauz","favw","favx","favy","favz","fbtw","fbtx","fbty","fbtz","fbuw","fbux","fbuy","fbuz","fbvw","fbvx","fbvy","fbvz","fctw","fctx","fcty","fctz","fcuw","fcux","fcuy","fcuz","fcvw","fcvx","fcvy","fcvz"]);
  })
});
