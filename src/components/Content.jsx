import './../css/Content.css';
import php from './../img/php.png';
import js from './../img/js.png';
import python from './../img/python.png';
import html from './../img/html.png';
import react from './../img/react.png';
import java from './../img/java.png';

let Content = function (){
    return(
        <div className='content'>
            <div className='ourCoursesDescription'>
                <div className='ourCoursesDescriptionTitle'>НАШИ КУРСЫ</div>
                <div className='ourCoursesDescriptionText'>
                    Поскольку число отдельных курсов программирования достаточно велико, вы можете начать с какого-то одного языка программирования, самого удобного и легкого в освоении. На сегодняшний день примером такого языка считается Python. Освоив его, можно будет перейти к другим обучающим модулям, исходя из того, на какую конкретную категорию  в мире программистских вакансий вы ориентируетесь.<br /><br />
                    Все материалы курсов достаточно сжаты и лишены пустой информации. Вместе с тем, они содержат концентрат всего самого важного и нужного. Того, что вам обязательно пригодится в будущей работе. Передовые методики обучения, используемые в школе, помогают  качественно и устойчиво пополнять багаж знаний начинающих программистов.  Мы помогаем всем желающим найти свою первую работу в сфере IT или реализовать свои первые самостоятельные проекты.
                </div>
            </div>

            <div className='courses'>
                <div className='course'>
                    <div className='circle'></div>
                    <img src={php}/>
                    <hr />
                    <div className='courseName'>PHP LARAVEL</div>
                    <div className='courseDescription'>
                        Cкриптовый язык общего<br /> назначения для разработки веб-<br />приложений. Поддерживается<br /> большинством хостинг-<br />провайдеров.
                    </div>
                    <div className='button'>Подробнее ></div>
                </div>
                <div className='course'>
                    <div className='circle'></div>
                    <img src={js}/>
                    <hr />
                    <div className='courseName'>JS</div>
                    <div className='courseDescription'>
                        JavaScript используется как встраиваемый язык для<br /> программного доступа к объектам<br /> приложений.
                    </div>
                    <div className='button'>Подробнее ></div>
                </div>
                <div className='course'>
                    <div className='circle'></div>
                    <img src={python}/>
                    <hr />
                    <div className='courseName'>PYTHON DJANGO</div>
                    <div className='courseDescription'>
                        Язык программирования общего назначения, ориентированный на повышение производительности разработчика и читаемости кода.
                    </div>
                    <div className='button'>Подробнее ></div>
                </div>
                <div className='course'>
                    <div className='circle'></div>
                    <img src={html}/>
                    <hr />
                    <div className='courseName'>HTML CSS</div>
                    <div className='courseDescription'>
                        Стандартизированный язык разметки документов. Язык HTML интерпретируется браузерами и форматированный текст отображается на экране.
                    </div>
                    <div className='button'>Подробнее ></div>
                </div>
                <div className='course'>
                    <div className='circle'></div>
                    <img src={react}/>
                    <hr />
                    <div className='courseName'>REACT</div>
                    <div className='courseDescription'>
                        React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций
                    </div>
                    <div className='button'>Подробнее ></div>
                </div>
                <div className='course'>
                    <div className='circle'></div>
                    <img src={java}/>
                    <hr />
                    <div className='courseName'>JAVA</div>
                    <div className='courseDescription'>
                        Строго типизированный объектно-ориентированный язык программирования общего назначения.
                    </div>
                    <div className='button'>Подробнее ></div>
                </div>
            </div>
        </div>
    );
};

export default Content;