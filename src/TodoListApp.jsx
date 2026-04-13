import './todolistapp.css';
import Button from './components/Button';
import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import TodoHeader from './components/TodoHeader.jsx';
import Checkbox from './components/Checkbox.jsx';

function TodoListApp(){
    return(
        <div className="todo">
            <TodoHeader/>
            <form className='todo__form'>
                <input type="text" placeholder='할 일 입력' className='todo__input'/>
                <Button className='todo__button todo__button--add'>add</Button>
            </form>
            <ul className='todo__list'>
                <TodoItemEmpty>
                </TodoItemEmpty>
                <li className='todo__item todo__item--complete'>
                    <Checkbox id="1">할 일1</Checkbox>
                    <Button className='todo__button todo__button--edit'>수정</Button>
                    <Button className='todo__button todo__button--delete'>삭제</Button>
                </li>
            </ul>
        </div>
    )
}
export default TodoListApp;