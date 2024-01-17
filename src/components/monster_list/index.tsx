import Card from '../monster';
import { Monster } from '../../App'
import './monster_list.css'

type CardListProps = {
    monsters: Monster[]
}
const MonsterList = ({ monsters }: CardListProps) => {
    return(
        <div className='card-list'>
            { monsters.map( (monster) => {
                return <Card monster={monster} key={monster.id}/>
            })}
        </div>
    )

}

export default MonsterList;