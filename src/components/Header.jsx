import './../css/Header.css';
import logo from './../img/logo.png';

let Header = function (){
    return(
        <header>
            <img src={logo}/>
            <div className='navigation'>
                <div className='navTitles'>ГЛАВНАЯ</div>
                <div className='navTitles'>НАШИ ПРЕПОДАВАТЕЛИ</div>
                <div className='navTitles'>КУРСЫ</div>
                <div className='navTitles'>ОНЛАЙН КУРСЫ</div>
                <div className='navTitles'>БЛОК</div>
                <div className='navTitles'>КОНТАКТЫ</div>
            </div>
        </header>
    );
};

export default Header;