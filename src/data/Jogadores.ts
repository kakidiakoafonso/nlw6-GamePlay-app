export type JogadoresProps = {
    id:number,
    nome:string,
    disponibilidade:number,
    img:string
}
const imgLink = 'https://m.media-amazon.com/images/M/MV5BMWQ0ODdkOGMtZjYxZC00NjE2LTg3ZWUtNjY3YmQ5ZWI1ZDM2XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg'
export const Jogadores:JogadoresProps[] = 
[
    {id:1,nome:'Kakidiako Afonso',disponibilidade:1,img:imgLink},
    {id:2,nome:'Cleusa Rabugenta',disponibilidade:2,img:imgLink},
    {id:3,nome:'Divina Paulina',disponibilidade:3,img:imgLink},
    {id:4,nome:'Eliseu Salomao',disponibilidade:1,img:imgLink},
    {id:5,nome:'Eduardo Kuanguluka',disponibilidade:2,img:imgLink},
]
