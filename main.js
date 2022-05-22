const str = `
010-1234-5678
ooothe@gmail.com
http://www.omdbpai.com/?apikey=7035c60c&s=frozen
The quick brown for jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/(?<=@).{1,}/g)
)