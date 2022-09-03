function disemvowel(str) {
    let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) continue
      newStr += str[i]
      }
    return newStr
  }

console.log(disemvowel('Hey there partner')) // => 'Hy thr prtnr'
console.log(disemvowel('I wanna fly like an eagle')) // => ' wnn fly lk n gl'
console.log(disemvowel('HHdfjdjnaan ifgoeoij dfvnmdvnmvnv   fifednv iiuuuos njfbn  s')) // => 'HHdfjdjnn fgj dfvnmdvnmvnv   ffdnv s njfbn  s'